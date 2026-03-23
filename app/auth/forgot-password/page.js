"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../auth.module.css";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          <h1 className={styles.title}>Reset password</h1>
          <p className={styles.subtitle}>Enter your email to receive a reset link</p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email address</label>
                  <input type="email" className={styles.input} placeholder="name@company.com" required />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send reset link
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div style={{ background: "#dcfce7", color: "#166534", padding: "24px", borderRadius: "16px", marginBottom: "24px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "12px" }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3 style={{ fontWeight: 800, marginBottom: "8px" }}>Check your inbox</h3>
                <p style={{ fontSize: "14px", opacity: 0.9 }}>If an account exists for that email, you'll receive a password reset link shortly.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className={styles.footerText}>
          Remember your password? <Link href="/auth/login" className={styles.link}>Sign in</Link>
        </p>

        <div className={styles.verifyBadge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Secure Recovery
        </div>
      </motion.div>
    </main>
  );
}
