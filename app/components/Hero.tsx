"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, Instagram, Twitter, Youtube, Play } from "lucide-react";
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
  const [discoverHover, setDiscoverHover] = useState(false);
  const [streamHover, setStreamHover] = useState(false);

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
        backgroundColor: "#FFC2D1",
        display: "flex",
        alignItems: "center",
        paddingTop: "72px",
        overflow: "hidden",
      }}
    >
      {/* Soft glow behind image */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "65%",
          height: "100%",
          background:
            "radial-gradient(ellipse 60% 70% at 75% 45%, rgba(255,143,171,0.35) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Hero image */}
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
            boxShadow: "-80px 0 120px rgba(255,143,171,0.4)",
          }}
        />
        {/* Fade gradient on left edge */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #FFC2D1 0%, rgba(255,194,209,0.55) 30%, transparent 60%)",
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

        {/* Name */}
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
            color: "#2C0015",
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
            color: "rgba(44,0,21,0.6)",
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
            boxShadow: "0 0 8px rgba(255,27,109,0.4)",
          }}
        />

        {/* Short bio */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "rgba(44,0,21,0.55)",
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
          {/* Stream Now — pill + shimmer sweep */}
          <button
            onClick={scrollToMusic}
            onMouseEnter={() => setStreamHover(true)}
            onMouseLeave={() => setStreamHover(false)}
            style={{
              padding: "0.75rem 1.75rem",
              background:
                "linear-gradient(105deg, #FF1B6D 0%, #FF1B6D 38%, rgba(255,255,255,0.38) 50%, #FF1B6D 62%, #FF1B6D 100%)",
              backgroundSize: "280% auto",
              animation: "btnShimmer 2.8s linear infinite",
              color: "#FFF0F6",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "box-shadow 0.25s ease, transform 0.25s ease",
              fontWeight: 400,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              boxShadow: streamHover
                ? "0 0 32px rgba(255,27,109,0.5), 0 4px 16px rgba(255,27,109,0.25)"
                : "0 0 16px rgba(255,27,109,0.22)",
              transform: streamHover ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            <Play
              size={11}
              fill="#FFF0F6"
              color="#FFF0F6"
              style={{
                transition: "transform 0.25s ease",
                transform: streamHover ? "scale(1.3)" : "scale(1)",
              }}
            />
            Stream Now
          </button>

          {/* Discover — corner brackets + fill sweep */}
          <button
            onClick={scrollToAbout}
            onMouseEnter={() => setDiscoverHover(true)}
            onMouseLeave={() => setDiscoverHover(false)}
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "0.75rem 1.75rem",
              background: `
                linear-gradient(#2C0015,#2C0015) top left / 10px 1.5px no-repeat,
                linear-gradient(#2C0015,#2C0015) left top / 1.5px 10px no-repeat,
                linear-gradient(#2C0015,#2C0015) top right / 10px 1.5px no-repeat,
                linear-gradient(#2C0015,#2C0015) right top / 1.5px 10px no-repeat,
                linear-gradient(#2C0015,#2C0015) bottom left / 10px 1.5px no-repeat,
                linear-gradient(#2C0015,#2C0015) left bottom / 1.5px 10px no-repeat,
                linear-gradient(#2C0015,#2C0015) bottom right / 10px 1.5px no-repeat,
                linear-gradient(#2C0015,#2C0015) right bottom / 1.5px 10px no-repeat,
                transparent
              `,
              color: discoverHover ? "#FFF0F6" : "#2C0015",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              fontWeight: 400,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              transition: "color 0.3s ease",
            }}
          >
            {/* Fill sweep layer */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#FF1B6D",
                transform: discoverHover ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left center",
                transition: "transform 0.32s cubic-bezier(0.32,0.72,0,1)",
                zIndex: 0,
              }}
            />
            <span style={{ position: "relative", zIndex: 1 }}>Discover</span>
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
                color: "rgba(44,0,21,0.45)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#FF1B6D";
                (e.currentTarget as HTMLAnchorElement).style.filter =
                  "drop-shadow(0 0 8px rgba(255,27,109,0.5))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(44,0,21,0.45)";
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
          border: "1px solid rgba(44,0,21,0.2)",
          borderRadius: "50px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
          color: "rgba(44,0,21,0.45)",
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
        @keyframes btnShimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}
