"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "exit" | "gone">("loading");

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setPhase("gone");
      return;
    }
    const exitTimer = setTimeout(() => setPhase("exit"), 2200);
    const goneTimer = setTimeout(() => setPhase("gone"), 3300);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <AnimatePresence>
      <motion.div
          key="loader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={
            phase === "exit"
              ? { duration: 0.95, ease: [0.76, 0, 0.24, 1] }
              : { duration: 0 }
          }
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#0A0004",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            pointerEvents: phase === "exit" ? "none" : "all",
          }}
        >
          {/* Subtle radial glow behind logo */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: "420px",
              height: "280px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,27,109,0.14) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
          >
            <Image
              src="/photos/nainilogowhite.png"
              width={148}
              height={56}
              alt="NAINI"
              priority
              style={{ display: "block" }}
            />
          </motion.div>

          {/* Pink line draw */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.65, ease: [0.32, 0.72, 0, 1] }}
            style={{
              width: 148,
              height: "1px",
              backgroundColor: "#FF1B6D",
              marginTop: "0.8rem",
              transformOrigin: "left center",
              boxShadow: "0 0 14px rgba(255,27,109,0.55)",
            }}
          />

        </motion.div>
    </AnimatePresence>
  );
}
