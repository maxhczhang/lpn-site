"use client";

import { useState } from "react";
import { profiles } from "@/lib/data/profiles";
import type { Profile } from "@/lib/data/types";

type View = "login" | "register" | "edit";

const profileKeys = Object.keys(profiles).sort();

export default function AdminPage() {
  const [view, setView] = useState<View>("login");
  const [profileKey, setProfileKey] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<Partial<Profile>>({});

  const displayName = (key: string) => key.replace(/_/g, " ");

  function loadProfileIntoForm(key: string) {
    const p = profiles[key];
    setForm({
      linkedIn: p.linkedIn,
      homeTown: p.homeTown,
      year: p.year,
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
              <select
                value={profileKey}
                onChange={(e) => setProfileKey(e.target.value)}
                required
                className={inputClass}
              >
                <option value="">Select your name</option>
                {profileKeys.map((k) => (
                  <option key={k} value={k}>{displayName(k)}</option>
                ))}
              </select>
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
              <select
                value={profileKey}
                onChange={(e) => setProfileKey(e.target.value)}
                required
                className={inputClass}
              >
                <option value="">Select your name</option>
                {profileKeys.map((k) => (
                  <option key={k} value={k}>{displayName(k)}</option>
                ))}
              </select>
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
