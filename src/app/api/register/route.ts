import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getFile, putFile } from "@/lib/github";
import { profiles } from "@/lib/data/profiles";

const PASSWORDS_PATH = "src/lib/data/passwords.json";

export async function POST(req: NextRequest) {
  try {
    const { profileKey, inviteCode, password } = await req.json();

    // Validate inputs
    if (!profileKey || !inviteCode || !password) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (inviteCode !== process.env.INVITE_CODE) {
      return NextResponse.json({ error: "Invalid invite code." }, { status: 401 });
    }
    if (!profiles[profileKey]) {
      return NextResponse.json({ error: "Profile not found." }, { status: 404 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    }

    // Check if already registered
    const { content: rawPasswords, sha } = await getFile(PASSWORDS_PATH);
    const passwords: Record<string, string> = JSON.parse(rawPasswords);

    if (passwords[profileKey]) {
      return NextResponse.json({ error: "This profile is already registered." }, { status: 409 });
    }

    // Hash password and save
    const hash = await bcrypt.hash(password, 12);
    passwords[profileKey] = hash;

    await putFile(
      PASSWORDS_PATH,
      JSON.stringify(passwords, null, 2) + "\n",
      sha,
      `Register profile: ${profileKey}`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
