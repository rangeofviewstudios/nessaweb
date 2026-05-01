"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Music2 } from "lucide-react";

interface Platform {
  name: string;
  color: string;
  borderColor: string;
  href: string;
}

const PLATFORMS: Platform[] = [
  { name: "Spotify", color: "#1DB954", borderColor: "#1DB954", href: "#" },
  { name: "Apple Music", color: "#FC3C44", borderColor: "#FC3C44", href: "#" },
  {
    name: "YouTube Music",
    color: "#FF0000",
    borderColor: "#FF0000",
    href: "#",
  },
  { name: "SoundCloud", color: "#FF5500", borderColor: "#FF5500", href: "#" },
  { name: "Tidal", color: "#d4d4d4", borderColor: "#d4d4d4", href: "#" },
  {
    name: "Amazon Music",
    color: "#00A8E1",
    borderColor: "#00A8E1",
    href: "#",
  },
];

export default function StreamingPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("naini-visited");
    if (!hasVisited) {
      setIsVisible(true);
    }
  }, []);

  function handleDismiss() {
    sessionStorage.setItem("naini-visited", "true");
    setIsVisible(false);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "rgba(7, 5, 12, 0.92)",
            backdropFilter: "blur(12px)",
          }}
          onClick={handleDismiss}
          aria-modal="true"
          role="dialog"
          aria-labelledby="popup-title"
        >
          {/* Pink radial glow behind panel */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,27,109,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            key="popup-panel"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "520px",
              backgroundColor: "rgba(14, 10, 22, 0.97)",
              border: "1px solid rgba(255, 27, 109, 0.2)",
              borderRadius: "2px",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {/* Logo */}
            <Image
              src="/photos/nainilogowhite.png"
              alt="NAINI"
              width={120}
              height={48}
              style={{ objectFit: "contain" }}
              priority
            />

            {/* NOW STREAMING label */}
            <p
              id="popup-title"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                color: "#FF1B6D",
                textTransform: "uppercase",
              }}
            >
              Now Streaming
            </p>

            {/* Platform grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                width: "100%",
              }}
            >
              {PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.75rem 1rem",
                    backgroundColor: "rgba(22, 15, 31, 0.9)",
                    borderLeft: `3px solid ${platform.borderColor}`,
                    borderTop: "1px solid rgba(240,228,235,0.06)",
                    borderRight: "1px solid rgba(240,228,235,0.06)",
                    borderBottom: "1px solid rgba(240,228,235,0.06)",
                    borderRadius: "2px",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      "rgba(32, 22, 44, 0.9)";
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      "rgba(22, 15, 31, 0.9)";
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <Music2
                    size={16}
                    style={{ color: platform.color, flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: "0.82rem",
                      fontWeight: 400,
                      color: "#F0E4EB",
                    }}
                  >
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Thin divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(240,228,235,0.08)",
              }}
            />

            {/* Enter site button */}
            <button
              onClick={handleDismiss}
              style={{
                width: "100%",
                padding: "0.9rem",
                backgroundColor: "#FF1B6D",
                color: "#07050C",
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                fontWeight: 400,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,27,109,0.85)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 30px rgba(255,27,109,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#FF1B6D";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Enter Site &rarr;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
