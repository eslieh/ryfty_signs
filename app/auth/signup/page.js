"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../auth.module.css";

export default function SignupPage() {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleSignup = (e) => {
    e.preventDefault();
    setIsVerifying(true);
  };

  const handleCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };
  return (
    <main className={styles.authContainer}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.authCard}
      >
        <div className={styles.authHeader}>
          <Link href="/" className={styles.logoWrapper}>
            <Image src="/dot.png" alt="Ryfty Sign" width={32} height={32} />
            <span className="signature" style={{ fontSize: "2.5em" }}>Signs</span>
          </Link>
          <h1 className={styles.title}>Create account</h1>
          <p className={styles.subtitle}>Start signing documents in seconds</p>
        </div>

        <AnimatePresence mode="wait">
          {!isVerifying ? (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <button className={styles.socialBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
                </svg>
                Sign up with Google
              </button>

              <div className={styles.divider}>or</div>

              <form onSubmit={handleSignup}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full name</label>
                  <input type="text" className={styles.input} placeholder="John Doe" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email address</label>
                  <input type="email" className={styles.input} placeholder="name@company.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Password</label>
                  <input type="password" className={styles.input} placeholder="Min. 8 characters" required />
                </div>
                
                <div style={{ textAlign: "left", marginBottom: "24px" }}>
                  <p style={{ fontSize: "12px", color: "#666", lineHeight: "1.4" }}>
                    By signing up, you agree to our <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>.
                  </p>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Create account
                </button>
              </form>

              <p className={styles.footerText}>
                Already have an account? <Link href="/auth/login" className={styles.link}>Sign in</Link>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="verify-signup"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1 className={styles.title} style={{ fontSize: "22px" }}>Verify your email</h1>
              <p className={styles.subtitle} style={{ marginBottom: "32px" }}>
                We've sent a 6-digit verification code to your email.
              </p>

              <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "32px" }}>
                {code.map((digit, i) => (
                  <input
                    key={i}
                    id={`code-${i}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(i, e.target.value)}
                    className={styles.input}
                    style={{ width: "45px", textAlign: "center", fontSize: "20px", fontWeight: "800" }}
                  />
                ))}
              </div>

              <button className={styles.submitBtn} onClick={() => router.push("/")}>
                Confirm Identity
              </button>

              <p className={styles.footerText}>
                Wrong email? <a href="#" className={styles.link} onClick={() => setIsVerifying(false)}>Back</a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.verifyBadge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Identity Verified
        </div>
      </motion.div>
    </main>
  );
}
