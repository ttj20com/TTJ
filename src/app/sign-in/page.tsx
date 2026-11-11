"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SignInPage() {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const data = new FormData(event.currentTarget);
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email: String(data.get("email")),
        password: String(data.get("password"))
      });
      if (error) throw error;
      window.location.href = "/";
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Sign in is not available.");
    } finally {
      setBusy(false);
    }
  }

  return <main className="auth-wrap"><Link className="brand" href="/">TTJ<span>.</span></Link><section className="auth-card"><div className="eyebrow">WELCOME BACK</div><h1>Sign in</h1><p>Access your TTJ account.</p><form onSubmit={submit}><label>Email address<input name="email" type="email" autoComplete="email" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required /></label><button disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button></form>{message && <p role="alert" className="form-message">{message}</p>}<p className="auth-foot">New to TTJ? <Link href="/sign-up">Create an account</Link></p></section></main>;
}
