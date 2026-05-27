"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, ExternalLink } from "lucide-react";
import LoadingScreen from "@/app/components/LoadingScreen";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StreamingPlatform {
  name: string;
  color: string;
  href: string;
}

interface SocialLink {
  label: string;
  icon: React.ReactNode;
  href: string;
  key: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STREAMING_PLATFORMS: StreamingPlatform[] = [
  { name: "Spotify", color: "#1DB954", href: "#" },
  { name: "Apple Music", color: "#FC3C44", href: "#" },
  { name: "YouTube Music", color: "#FF0000", href: "#" },
  { name: "SoundCloud", color: "#FF5500", href: "#" },
  { name: "Tidal", color: "#2C0015", href: "#" },
  { name: "Amazon Music", color: "#00A8E1", href: "#" },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StreamingRow({ platform }: { platform: StreamingPlatform }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={platform.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: isHovered
          ? "rgba(255,255,255,0.45)"
          : "rgba(255,179,198,0.5)",
        borderLeft: `3px solid ${platform.color}`,
        borderRadius: "3px",
        padding: "0.85rem 1.1rem",
        textDecoration: "none",
        transform: isHovered ? "translateX(4px)" : "translateX(0)",
        transition: "all 0.22s ease",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.65rem",
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: platform.color,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 500,
            fontSize: "0.875rem",
            color: "#2C0015",
          }}
        >
          {platform.name}
        </span>
      </span>
      <ExternalLink
        size={14}
        style={{ color: "rgba(44,0,21,0.3)", flexShrink: 0 }}
      />
    </a>
  );
}

function SocialButton({ link }: { link: SocialLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.45rem",
        backgroundColor: isHovered ? "#FF1B6D" : "rgba(255,255,255,0.3)",
        border: "1px solid rgba(44,0,21,0.12)",
        borderRadius: "50px",
        padding: "0.6rem 1.1rem",
        textDecoration: "none",
        transition: "all 0.22s ease",
        cursor: "pointer",
        color: isHovered ? "#FFF0F6" : "#FF1B6D",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", color: "inherit" }}>
        {link.icon}
      </span>
      <span
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: isHovered ? "#FFF0F6" : "rgba(44,0,21,0.55)",
          transition: "color 0.22s ease",
        }}
      >
        {link.label}
      </span>
    </a>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function LandingPage() {
  const socialLinks: SocialLink[] = [
    {
      key: "instagram",
      label: "Instagram",
      href: "#",
      icon: <Instagram size={16} />,
    },
    {
      key: "twitter",
      label: "Twitter",
      href: "#",
      icon: <Twitter size={16} />,
    },
    {
      key: "youtube",
      label: "YouTube",
      href: "#",
      icon: <Youtube size={16} />,
    },
  ];

  return (
    <>
      <LoadingScreen />
      <div
        className="lp-layout"
        style={{
          display: "flex",
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#FFC2D1",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Left Panel ────────────────────────────────────────────────── */}
        <div
          className="lp-left"
          style={{
            width: "clamp(340px, 48%, 560px)",
            minHeight: "100vh",
            padding:
              "clamp(2rem, 4vw, 3.5rem) clamp(2rem, 5vw, 4rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 2,
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 0 }}
          >
            {/* Logo */}
            <div style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
              <Image
                src="/photos/nainilogowhite.png"
                width={88}
                height={33}
                alt="NAINI"
                style={{ filter: "brightness(0) saturate(100%)" }}
              />
            </div>

            {/* Name + tagline block */}
            <div style={{ marginBottom: "0.4rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#FF1B6D",
                  margin: "0 0 0.4rem 0",
                }}
              >
                Artist · Songwriter
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(4rem, 8vw, 7rem)",
                  fontWeight: 700,
                  lineHeight: 0.88,
                  color: "#2C0015",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                NAINI
              </h1>
            </div>
            {/* Divider */}
            <hr
              style={{
                width: 40,
                height: 1,
                border: "none",
                backgroundColor: "#FF1B6D",
                margin: "1.5rem 0 1.25rem",
              }}
            />

            {/* Stream section */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(44,0,21,0.4)",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Stream
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                {STREAMING_PLATFORMS.map((platform) => (
                  <StreamingRow key={platform.name} platform={platform} />
                ))}
              </div>
            </div>

            {/* Follow section */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(44,0,21,0.4)",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Follow
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {socialLinks.map((link) => (
                  <SocialButton key={link.key} link={link} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ROV Credit */}
          <motion.a
            href="https://www.rovstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-rov"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
              paddingTop: "2rem",
              textDecoration: "none",
              opacity: 0.75,
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.58rem",
                color: "rgba(44,0,21,0.6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Curated by
            </span>
            <Image
              src="/photos/WHITEnoBG.png"
              width={64}
              height={25}
              alt="Range Of View Studios"
              style={{
                filter: "brightness(0) saturate(100%)",
                opacity: 0.7,
              }}
            />
          </motion.a>
        </div>

        {/* ── Right Photo Panel ─────────────────────────────────────────── */}
        <div
          className="lp-photo"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "55%",
            height: "100%",
          }}
        >
          <Image
            src="/photos/pinkhero.JPG"
            fill
            alt="NAINI"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          {/* Left-edge gradient fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #FFC2D1 0%, rgba(255,194,209,0.6) 25%, transparent 55%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* ── Responsive overrides ─────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .lp-rov { justify-content: center !important; }
          .lp-layout { flex-direction: column !important; }
          .lp-photo {
            order: -1 !important;
            position: relative !important;
            width: 100% !important;
            height: 72vw !important;
            min-height: 280px !important;
            max-height: 420px !important;
            flex-shrink: 0 !important;
          }
          .lp-photo img {
            object-position: center 15% !important;
          }
          .lp-photo > div {
            background: linear-gradient(to bottom, transparent 55%, #FFC2D1 100%) !important;
          }
          .lp-left {
            order: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}
