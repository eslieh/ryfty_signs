"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Image src="/dot.png" alt="Ryfty Sign Logo" width={50} height={50} />
          <span className="signature" style={{ marginLeft: "10px", fontSize: "3.4em" }}>Signs</span>
        </div>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={styles.navLink}>{item.name}</a>
          ))}
          <div className={styles.navActions}>
            <a href="/auth/login" className={styles.signIn}>Sign in</a>
            <a href="/auth/signup" className="btn-primary" style={{ textDecoration: "none" }}>Create account</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            Digital signing <br />
            should be <span className={styles.titleAccent}>easy</span>
          </h1>
          <p className={styles.subtitle}>
            Get agreements signed quickly with electronic IDs or 
            <span className={styles.logoText} style={{ marginLeft: "10px", fontSize: "1.4em" }}> touch signatures</span>
          </p>
          
          <div className={styles.heroActions}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-primary ${styles.heroBtn}`}
            >
              Try for free
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-secondary ${styles.heroBtn}`}
            >
              Book a demo
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.details}>
        <div className={styles.detailsContent}>
          <motion.div {...fadeInUp}>
            <div className={styles.planName} style={{ marginBottom: "16px", color: "hsl(var(--primary))" }}>About Ryfty Signs</div>
            <h2>The dream of a paperless world</h2>
            <p>
              Ryfty Signs is built for the modern Kenyan business. We understand the need for speed, 
              security, and legal compliance in every digital transaction.
            </p>
            <p>
              From small startups to large enterprises, our platform scales with you, 
              ensuring your documents are handled with the highest level of integrity.
            </p>
            <div style={{ marginTop: "40px" }}>
              <span className="signature" style={{ fontSize: "2.5em" }}>Authenticated by Ryfty.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.features}>
        <div className={styles.featuresGrid}>
          {[
            {
              title: "Limitless Flow",
              desc: "Seal deals in seconds, not days. The dream of a paperless world starts here.",
              icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            },
            {
              title: "Bank-Grade Security",
              desc: "Your signature is your identity. We protect it with the highest encryption standards.",
              icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
              highlight: true
            },
            {
              title: "Real-time Tracking",
              desc: "Know exactly where your document is. No more chasing for signatures.",
              icon: <path d="M12 6v6l4 2"/>
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`${styles.featureCard} glass ${feature.highlight ? styles.featureCardHighlight : ""}`}
            >
              <div className={styles.iconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Section - How it Works */}
      <section id="workflow" className={styles.workflow}>
        <div className={styles.pricingHeader}>
          <motion.div {...fadeInUp}>
            <h2>Flow of the Future</h2>
            <p style={{ color: "#666" }}>Seamless coordination between senders and recipients.</p>
          </motion.div>
        </div>

        <div className={styles.workflowGrid}>
          {/* Sender Flow */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.workflowColumn}
          >
            <div className={`${styles.workflowTag} ${styles.tagSender}`}>Sender Actions</div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} />
              <div className={styles.stepContent}>
                <h4>Login / Sign up</h4>
                <p>Email + password for a secure workspace.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} />
              <div className={styles.stepContent}>
                <h4>Upload document</h4>
                <p>PDF supported with AI-ready scanning.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} />
              <div className={styles.stepContent}>
                <h4>Place fields</h4>
                <p>Drag signature boxes onto the canvas.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} />
              <div className={styles.stepContent}>
                <h4>Send to client</h4>
                <p>Enter recipient email and hit send.</p>
              </div>
            </div>
          </motion.div>

          {/* Recipient Flow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.workflowColumn}
            style={{ border: "1px solid hsl(var(--primary) / 0.1)" }}
          >
            <div className={`${styles.workflowTag} ${styles.tagRecipient}`}>Recipient Actions</div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} style={{ borderColor: "#92400e" }} />
              <div className={styles.stepContent}>
                <h4>Email notification</h4>
                <p>Receive a unique, secure signing link.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} style={{ borderColor: "#92400e" }} />
              <div className={styles.stepContent}>
                <h4>Open signing link</h4>
                <p>No login needed to review the document.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} style={{ borderColor: "#92400e" }} />
              <div className={styles.stepContent}>
                <h4>Sign document</h4>
                <p>Draw, type or upload your signature.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} style={{ borderColor: "#92400e" }} />
              <div className={styles.stepContent}>
                <h4>Confirm identity</h4>
                <p>Biometric or ID verification for certainty.</p>
              </div>
            </div>
          </motion.div>

          {/* System Output */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.workflowColumn}
          >
            <div className={`${styles.workflowTag} ${styles.tagSystem}`}>System Output</div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} style={{ borderColor: "#166534" }} />
              <div className={styles.stepContent}>
                <h4>Generate signed PDF</h4>
                <p>Signature embedded with full audit logs.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.stepDot} style={{ borderColor: "#166534" }} />
              <div className={styles.stepContent}>
                <h4>Download signed doc</h4>
                <p>Both parties notified of completion.</p>
              </div>
            </div>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <span className="signature" style={{ fontSize: "1.2em", color: "#166534" }}>Certified by Ryfty</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricing}>
        <div className={styles.pricingHeader}>
          <motion.div {...fadeInUp}>
            <h2>Simple Pricing</h2>
            <p style={{ color: "#666" }}>Choose the plan that fits your signature needs.</p>
          </motion.div>
        </div>
        
        <div className={styles.pricingGrid}>
          {[
            {
              name: "Starter",
              price: "KES 0",
              limit: "3 documents/month",
              features: ["Single user", "Basic templates", "Audit trail basics"],
              popular: false
            },
            {
              name: "Pro",
              price: "KES 1,500",
              limit: "Unlimited documents",
              features: ["Unlimited documents", "Advanced templates", "Custom branding", "Priority support"],
              popular: true
            },
            {
              name: "Business",
              price: "KES 4,000",
              limit: "Team + Audit logs",
              features: ["Multi-user teams", "Advanced audit logs", "API access", "Dedicated account manager"],
              popular: false
            }
          ].map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${styles.pricingCard} ${plan.popular ? styles.pricingCardPopular : ""}`}
            >
              {plan.popular && <div className={styles.popularBadge}>POPULAR</div>}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.planPrice}>{plan.price} <span>/mo</span></div>
              <ul className={styles.planFeatures}>
                <li style={{ fontWeight: 700, color: "hsl(var(--primary))" }}>
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                   {plan.limit}
                </li>
                {plan.features.map(f => (
                  <li key={f}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={plan.popular ? "btn-primary" : "btn-secondary"} style={{ width: "100%" }}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.pricingHeader}>
          <motion.div {...fadeInUp}>
            <h2>Get in Touch</h2>
            <p style={{ color: "#666" }}>Our team is here to help you automate your workflow.</p>
          </motion.div>
        </div>
        <div className={styles.contactGrid}>
          {[
            { title: "Email Us", value: "hello@ryftysigns.com", icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></> },
            { title: "Call Us", value: "+254 700 000 000", icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/> },
            { title: "Support", value: "Available 24/7", icon: <><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></> }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
              <div className={styles.contactTitle}>{item.title}</div>
              <div className={styles.contactValue}>{item.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <Image src="/dot.png" alt="Ryfty Sign" width={24} height={24} />
          <span style={{ fontWeight: 800 }}>Ryfty Signs</span>
        </div>
        <p className={styles.copyright}>
          &copy; 2026 Ryfty Sign. Authenticated by <span className="signature" style={{ fontSize: "1.2em", marginLeft: "5px" }}>Ryfty</span>
        </p>
      </footer>
    </main>
  );
}
