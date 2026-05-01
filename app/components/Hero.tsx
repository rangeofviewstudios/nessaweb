"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, Instagram, Twitter, Youtube } from "lucide-react";
import SplitText from "@/app/components/SplitText";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  function scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToMusic() {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100svh",
        backgroundColor: "#07050C",
        display: "flex",
        alignItems: "center",
        /* Push content visual-center below the fixed 72px navbar */
        paddingTop: "72px",
        overflow: "hidden",
      }}
    >
      {/* Decorative vertical text */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(5rem, 18vw, 16rem)",
          fontWeight: 700,
          color: "#F0E4EB",
          opacity: 0.04,
          letterSpacing: "0.1em",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          zIndex: 0,
        }}
      >
        NAINI
      </span>

      {/* Pink light bleed behind image */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "65%",
          height: "100%",
          background:
            "radial-gradient(ellipse 60% 70% at 75% 45%, rgba(255,27,109,0.32) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Hero image — right side, offset to fill entire section including paddingTop space */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "62%",
          zIndex: 2,
        }}
      >
        <Image
          src="/photos/pinkhero.JPG"
          alt="NAINI — artist portrait"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 62vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            boxShadow: "-80px 0 120px rgba(255,27,109,0.25)",
          }}
        />
        {/* Fade gradient on left edge of image */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #07050C 0%, rgba(7,5,12,0.4) 30%, transparent 60%)",
          }}
        />
      </div>

      {/* Left content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 10,
          padding: "clamp(3rem, 6vw, 5rem) 2rem clamp(5rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)",
          maxWidth: "560px",
          width: "100%",
        }}
      >
        {/* Label */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            color: "#FF1B6D",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          Artist · Songwriter
        </motion.p>

        {/* Name — GSAP SplitText handles per-char bounce */}
        <SplitText
          tag="h1"
          text="NAINI"
          splitType="chars"
          threshold={0}
          rootMargin="0px"
          delay={55}
          duration={0.85}
          ease="power4.out"
          from={{ opacity: 0, y: 70, rotateX: -15 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          textAlign="left"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(4.5rem, 10vw, 9rem)",
            fontWeight: 700,
            lineHeight: 0.88,
            color: "#F0E4EB",
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            perspective: "600px",
          }}
        />

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
            fontStyle: "italic",
            color: "rgba(240,228,235,0.6)",
            marginBottom: "1.75rem",
          }}
        >
          Raw emotion. Refined sound.
        </motion.p>

        {/* Pink divider */}
        <motion.div
          variants={itemVariants}
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: "#FF1B6D",
            marginBottom: "1.75rem",
            boxShadow: "0 0 8px rgba(255,27,109,0.5)",
          }}
        />

        {/* Short bio */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "0.875rem",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "#7B6B77",
            marginBottom: "2.25rem",
            maxWidth: "320px",
          }}
        >
          Bridging the space between underground pulse and cinematic soul.
          <br />
          Music that lives in the hour before dawn.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: "0.875rem", marginBottom: "2.5rem", flexWrap: "wrap" }}
        >
          <button
            onClick={scrollToMusic}
            style={{
              padding: "0.75rem 1.75rem",
              backgroundColor: "#FF1B6D",
              color: "#07050C",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              fontWeight: 400,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(255,27,109,0.5)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Stream Now
          </button>
          <button
            onClick={scrollToAbout}
            style={{
              padding: "0.75rem 1.75rem",
              backgroundColor: "transparent",
              color: "#F0E4EB",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid rgba(240,228,235,0.25)",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              fontWeight: 400,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "#FF1B6D";
              (e.currentTarget as HTMLButtonElement).style.color = "#FF1B6D";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(240,228,235,0.25)";
              (e.currentTarget as HTMLButtonElement).style.color = "#F0E4EB";
            }}
          >
            Discover
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}
        >
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Youtube, label: "YouTube" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              style={{
                color: "#7B6B77",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#FF1B6D";
                (e.currentTarget as HTMLAnchorElement).style.filter =
                  "drop-shadow(0 0 8px rgba(255,27,109,0.6))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#7B6B77";
                (e.currentTarget as HTMLAnchorElement).style.filter = "none";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll down"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "clamp(2rem, 5vw, 5rem)",
          zIndex: 10,
          background: "none",
          border: "1px solid rgba(240,228,235,0.12)",
          borderRadius: "50px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
          color: "#7B6B77",
          padding: "0.45rem 0.9rem 0.45rem 0.7rem",
          animation: "scrollBounce 2.5s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={16} />
      </button>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }

        @media (max-width: 768px) {
          /* On mobile, image is full width with content overlaid */
        }
      `}</style>
    </div>
  );
}
