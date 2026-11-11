"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SignUpPage() {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const data = new FormData(event.currentTarget);
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email: String(data.get("email")),
        password: String(data.get("password"))
      });
      if (error) throw error;
      setMessage("Check your email for a confirmation link. Your account will be ready after confirmation.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Sign up is not available.");
    } finally {
      setBusy(false);
    }
  }

  return <main className="auth-wrap"><Link className="brand" href="/">TTJ<span>.</span></Link><section className="auth-card"><div className="eyebrow">JOIN THE PLAYGROUND</div><h1>Create account</h1><p>Start your TTJ journey.</p><form onSubmit={submit}><label>Email address<input name="email" type="email" autoComplete="email" required /></label><label>Password<input name="password" type="password" autoComplete="new-password" minLength={8} required /></label><button disabled={busy}>{busy ? "Creating…" : "Create account"}</button></form>{message && <p role="status" className="form-message">{message}</p>}<p className="auth-foot">Already registered? <Link href="/sign-in">Sign in</Link></p></section></main>;
}
