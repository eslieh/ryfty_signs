"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../auth.module.css";

export default function VerifyPage() {
  const [status, setStatus] = useState("verifying"); // verifying, success, error

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("success");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.authContainer}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={styles.authCard}
      >
        <div className={styles.authHeader}>
          <Link href="/" className={styles.logoWrapper}>
            <Image src="/dot.png" alt="Ryfty Sign" width={32} height={32} />
            <span className="signature" style={{ fontSize: "2.5em" }}>Signs</span>
          </Link>
          
          {status === "verifying" && (
            <>
              <h1 className={styles.title}>Verifying identity</h1>
              <p className={styles.subtitle}>Securing your signature session...</p>
              <div style={{ marginTop: "40px" }}>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{ width: "40px", height: "40px", border: "4px solid #eee", borderTopColor: "hsl(var(--primary))", borderRadius: "50%", margin: "0 auto" }}
                />
              </div>
            </>
          )}

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div style={{ color: "hsl(var(--primary))", marginBottom: "20px" }}>
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                 </svg>
              </div>
              <h1 className={styles.title}>Verified</h1>
              <p className={styles.subtitle} style={{ marginBottom: "32px" }}>Identity confirmed. You can now sign documents.</p>
              <Link href="/" className={styles.submitBtn} style={{ textDecoration: "none", display: "block" }}>
                Continue to Dashboard
              </Link>
            </motion.div>
          )}
        </div>

        <div className={styles.verifyBadge} style={{ marginTop: "32px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Bank-Grade Security
        </div>
      </motion.div>
    </main>
  );
}
