"use client";

import { useState, useRef, useEffect } from "react";
import { profiles } from "@/lib/data/profiles";
import { csuite } from "@/lib/data/csuite";
import { directors } from "@/lib/data/directors";
import { brothers } from "@/lib/data/brothers";
import { companyList } from "@/lib/data/companyList";
import type { Profile } from "@/lib/data/types";

type View = "login" | "register" | "edit";

function nameToKey(name: string) {
  return name.replace(/[\s-]+/g, "_");
}

const activeBrotherKeys = [
  ...csuite.map((b) => nameToKey(b.name)),
  ...directors.map((b) => nameToKey(b.name)),
  ...brothers.map((b) => nameToKey(b.name)),
].filter((k) => k in profiles);

const profileKeys = Array.from(new Set(activeBrotherKeys)).sort();

function ProfileDropdown({ value, onChange }: { value: string; onChange: (key: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm text-left flex items-center justify-between transition-colors focus:outline-none focus:border-white/20"
        style={{ color: value ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
      >
        <span>{value ? value.replace(/_/g, " ") : "Select your name"}</span>
        <svg className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-[hsl(var(--surface))] shadow-xl overflow-hidden">
          <div className="max-h-60 overflow-y-auto">
            {profileKeys.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => { onChange(k); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${value === k ? "text-foreground bg-white/5" : "text-muted-foreground"}`}
              >
                {k.replace(/_/g, " ")}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [view, setView] = useState<View>("login");
  const [profileKey, setProfileKey] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<Partial<Profile>>({});
  const [companySearch, setCompanySearch] = useState("");
  const companyDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(e.target as Node)) setCompanySearch("");
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const displayName = (key: string) => key.replace(/_/g, " ");

  function loadProfileIntoForm(key: string) {
    const p = profiles[key];
    setCompanySearch("");
    setForm({
      linkedIn: p.linkedIn,
      homeTown: p.homeTown,
      year: p.year,
      company: p.company ?? "",
      logo: p.logo ?? "",
      experience: { ...p.experience },
      campusInvolvements: { ...p.campusInvolvements },
      interests: [...(p.interests ?? [])],
      whyLPN: p.whyLPN,
    });
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/update-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileKey, password }),
    });
    const data = await res.json();
    if (res.ok) {
      loadProfileIntoForm(profileKey);
      setStatus("idle");
      setView("edit");
    } else {
      setStatus("error");
      setMessage(data.error ?? "Login failed.");
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileKey, inviteCode, password: newPassword }),
    });
    const data = await res.json();
    if (res.ok) {
      setPassword(newPassword);
      loadProfileIntoForm(profileKey);
      setStatus("success");
      setMessage("Account created! Loading your profile...");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
        setView("edit");
      }, 1500);
    } else {
      setStatus("error");
      setMessage(data.error ?? "Registration failed.");
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/update-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileKey, password, updates: form }),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus("success");
      setMessage("Saved! Changes will be live in ~2 minutes.");
    } else {
      setStatus("error");
      setMessage(data.error ?? "Save failed.");
    }
  }

  // Key-value pair helpers
  function updateKVField(field: "experience" | "campusInvolvements", oldKey: string, newKey: string, value: string) {
    const current = (form[field] ?? {}) as Record<string, string>;
    const updated: Record<string, string> = {};
    for (const k of Object.keys(current)) {
      const resolvedKey = k === oldKey ? newKey : k;
      updated[resolvedKey] = k === oldKey ? value : current[k];
    }
    setForm({ ...form, [field]: updated });
  }

  function addKVRow(field: "experience" | "campusInvolvements") {
    const current = (form[field] ?? {}) as Record<string, string>;
    setForm({ ...form, [field]: { ...current, "": "" } });
  }

  function removeKVRow(field: "experience" | "campusInvolvements", key: string) {
    const current = { ...(form[field] ?? {}) } as Record<string, string>;
    delete current[key];
    setForm({ ...form, [field]: current });
  }

  function updateInterest(index: number, value: string) {
    const updated = [...(form.interests ?? [])];
    updated[index] = value;
    setForm({ ...form, interests: updated });
  }

  function addInterest() {
    setForm({ ...form, interests: [...(form.interests ?? []), ""] });
  }

  function removeInterest(index: number) {
    const updated = (form.interests ?? []).filter((_, i) => i !== index);
    setForm({ ...form, interests: updated });
  }

  const inputClass = "w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-white/20 transition-colors";
  const labelClass = "text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block";
  const btnPrimary = "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-burgundy hover:bg-[hsl(var(--burgundy-hover))] text-white font-medium transition-all duration-200 disabled:opacity-50";
  const btnSecondary = "text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2";

  return (
    <div className="pt-24 pb-24 min-h-screen section-padding max-w-2xl mx-auto">

      {/* LOGIN */}
      {view === "login" && (
        <div className="glass rounded-2xl p-8">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Profile Editor</h1>
          <p className="text-muted-foreground text-sm mb-8">Log in to update your profile.</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className={labelClass}>Your Name</label>
              <ProfileDropdown value={profileKey} onChange={setProfileKey} />
            </div>
            <div>
              <label className={labelClass}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Your password"
                className={inputClass}
              />
            </div>
            {status === "error" && <p className="text-sm text-red-400">{message}</p>}
            <button type="submit" disabled={status === "loading"} className={btnPrimary}>
              {status === "loading" ? "Logging in..." : "Log In"}
            </button>
          </form>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            First time?{" "}
            <button className={btnSecondary} onClick={() => { setStatus("idle"); setMessage(""); setView("register"); }}>
              Create your account
            </button>
          </p>
        </div>
      )}

      {/* REGISTER */}
      {view === "register" && (
        <div className="glass rounded-2xl p-8">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground text-sm mb-8">Enter the invite code shared by the webmaster to set up your profile.</p>
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className={labelClass}>Your Name</label>
              <ProfileDropdown value={profileKey} onChange={setProfileKey} />
            </div>
            <div>
              <label className={labelClass}>Invite Code</label>
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                required
                placeholder="Invite code"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Create Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                placeholder="At least 8 characters"
                className={inputClass}
              />
            </div>
            {status === "error" && <p className="text-sm text-red-400">{message}</p>}
            {status === "success" && <p className="text-sm text-green-400">{message}</p>}
            <button type="submit" disabled={status === "loading"} className={btnPrimary}>
              {status === "loading" ? "Creating account..." : "Create Account"}
            </button>
          </form>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Already registered?{" "}
            <button className={btnSecondary} onClick={() => { setStatus("idle"); setMessage(""); setView("login"); }}>
              Log in
            </button>
          </p>
        </div>
      )}

      {/* EDIT */}
      {view === "edit" && (
        <div>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Editing</p>
              <h1 className="font-serif text-3xl font-bold text-foreground">{displayName(profileKey)}</h1>
            </div>
            <button className={btnSecondary} onClick={() => { setPassword(""); setView("login"); setStatus("idle"); setMessage(""); }}>
              Log out
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="glass rounded-2xl p-6 space-y-5">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Basic Info</h2>
              <div>
                <label className={labelClass}>LinkedIn URL</label>
                <input type="url" value={form.linkedIn ?? ""} onChange={(e) => setForm({ ...form, linkedIn: e.target.value })} placeholder="https://linkedin.com/in/..." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Hometown</label>
                <input type="text" value={form.homeTown ?? ""} onChange={(e) => setForm({ ...form, homeTown: e.target.value })} placeholder="City, State" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Year</label>
                <select value={form.year ?? ""} onChange={(e) => setForm({ ...form, year: e.target.value })} className={inputClass}>
                  <option value="">Select year</option>
                  {["1st", "2nd", "3rd", "4th", "5th", "Graduate"].map((y) => (
                    <option key={y} value={y}>{y} Year</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Company */}
            <div ref={companyDropdownRef} className="relative">
              <div className="glass rounded-2xl p-6 space-y-5">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Company</h2>
                {form.company && form.logo ? (
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-background border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={form.logo} alt={form.company} className="h-5 w-10 object-contain" />
                    <span className="text-sm text-foreground flex-1">{form.company}</span>
                    <button type="button" onClick={() => { setForm({ ...form, company: "", logo: "" }); setCompanySearch(""); }} className="text-muted-foreground hover:text-red-400 transition-colors text-lg leading-none">×</button>
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      value={companySearch}
                      onChange={(e) => setCompanySearch(e.target.value)}
                      placeholder="Search company..."
                      className={inputClass}
                    />
                  </div>
                )}
              </div>
              {companySearch && (
                <div className="absolute left-0 right-0 mt-1 z-50 rounded-lg border border-border bg-[hsl(var(--surface))] shadow-xl overflow-hidden">
                  <div className="max-h-48 overflow-y-auto">
                    {companyList
                      .filter((c) => c.name.toLowerCase().includes(companySearch.toLowerCase()))
                      .map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => { setForm({ ...form, company: c.name, logo: c.logo }); setCompanySearch(""); }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={c.logo} alt={c.name} className="h-4 w-8 object-contain" />
                          {c.name}
                        </button>
                      ))}
                    {companyList.filter((c) => c.name.toLowerCase().includes(companySearch.toLowerCase())).length === 0 && (
                      <p className="px-4 py-3 text-sm text-muted-foreground">No match — reach out to the webmaster to add it.</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Experience */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Experience</h2>
                <button type="button" onClick={() => addKVRow("experience")} className="text-xs text-burgundy hover:text-foreground transition-colors">+ Add row</button>
              </div>
              {Object.entries((form.experience ?? {}) as Record<string, string>).map(([role, company], i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
                  <input
                    placeholder="Job title / role"
                    value={role}
                    onChange={(e) => updateKVField("experience", role, e.target.value, company)}
                    className={inputClass}
                  />
                  <input
                    placeholder="Company"
                    value={company}
                    onChange={(e) => updateKVField("experience", role, role, e.target.value)}
                    className={inputClass}
                  />
                  <button type="button" onClick={() => removeKVRow("experience", role)} className="text-muted-foreground hover:text-red-400 transition-colors text-lg leading-none">×</button>
                </div>
              ))}
            </div>

            {/* Campus Involvements */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Campus Involvement</h2>
                <button type="button" onClick={() => addKVRow("campusInvolvements")} className="text-xs text-burgundy hover:text-foreground transition-colors">+ Add row</button>
              </div>
              {Object.entries((form.campusInvolvements ?? {}) as Record<string, string>).map(([role, org], i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
                  <input
                    placeholder="Role / position"
                    value={role}
                    onChange={(e) => updateKVField("campusInvolvements", role, e.target.value, org)}
                    className={inputClass}
                  />
                  <input
                    placeholder="Organization"
                    value={org}
                    onChange={(e) => updateKVField("campusInvolvements", role, role, e.target.value)}
                    className={inputClass}
                  />
                  <button type="button" onClick={() => removeKVRow("campusInvolvements", role)} className="text-muted-foreground hover:text-red-400 transition-colors text-lg leading-none">×</button>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Interests</h2>
                <button type="button" onClick={addInterest} className="text-xs text-burgundy hover:text-foreground transition-colors">+ Add</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {(form.interests ?? []).map((interest, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <input
                      value={interest}
                      onChange={(e) => updateInterest(i, e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-white/20 w-32"
                    />
                    <button type="button" onClick={() => removeInterest(i)} className="text-muted-foreground hover:text-red-400 transition-colors">×</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Why LPN */}
            <div className="glass rounded-2xl p-6 space-y-3">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Why ΛΦΝ?</h2>
              <textarea
                value={form.whyLPN ?? ""}
                onChange={(e) => setForm({ ...form, whyLPN: e.target.value })}
                rows={4}
                placeholder="Share why you joined LPN..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && <p className="text-sm text-red-400">{message}</p>}
            {status === "success" && <p className="text-sm text-green-400">{message}</p>}

            <button type="submit" disabled={status === "loading"} className={btnPrimary}>
              {status === "loading" ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
