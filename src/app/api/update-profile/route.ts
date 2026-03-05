import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getFile, putFile } from "@/lib/github";

const PASSWORDS_PATH = "src/lib/data/passwords.json";
const PROFILES_PATH = "src/lib/data/profiles.json";

// Fields brothers are allowed to edit
const EDITABLE_FIELDS = ["linkedIn", "homeTown", "year", "experience", "campusInvolvements", "interests", "whyLPN"];

export async function POST(req: NextRequest) {
  try {
    const { profileKey, password, updates } = await req.json();

    if (!profileKey || !password) {
      return NextResponse.json({ error: "Missing credentials." }, { status: 400 });
    }

    // Verify password
    const { content: rawPasswords } = await getFile(PASSWORDS_PATH);
    const passwords: Record<string, string> = JSON.parse(rawPasswords);

    if (!passwords[profileKey]) {
      return NextResponse.json({ error: "Profile not registered. Please register first." }, { status: 401 });
    }
    const valid = await bcrypt.compare(password, passwords[profileKey]);
    if (!valid) {
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }

    // If no updates provided, this is just a login check — return success
    if (!updates) {
      return NextResponse.json({ success: true });
    }

    // Strip any locked fields from updates
    const safeUpdates: Record<string, unknown> = {};
    for (const key of EDITABLE_FIELDS) {
      if (key in updates) safeUpdates[key] = updates[key];
    }

    // Fetch and update profiles.json
    const { content: rawProfiles, sha } = await getFile(PROFILES_PATH);
    const profilesData: Record<string, Record<string, unknown>> = JSON.parse(rawProfiles);

    if (!profilesData[profileKey]) {
      return NextResponse.json({ error: "Profile not found." }, { status: 404 });
    }

    profilesData[profileKey] = { ...profilesData[profileKey], ...safeUpdates };

    await putFile(
      PROFILES_PATH,
      JSON.stringify(profilesData, null, 2) + "\n",
      sha,
      `Update profile: ${profileKey}`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Update profile error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
