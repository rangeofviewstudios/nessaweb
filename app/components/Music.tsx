"use client";

import Image from "next/image";
import { Music2, Play } from "lucide-react";
import { useReveal } from "@/app/hooks/useReveal";
import SplitText from "@/app/components/SplitText";

interface Release {
  number: string;
  title: string;
  year: string;
}

const RELEASES: Release[] = [
  { number: "01", title: "Pink Noise EP", year: "2024" },
  { number: "02", title: "Between the Lines", year: "2024" },
  { number: "03", title: "Golden Hours", year: "2023" },
];

const STREAM_PLATFORMS = [
  { name: "Spotify", color: "#1DB954" },
  { name: "Apple Music", color: "#FC3C44" },
  { name: "YouTube", color: "#FF0000" },
];

const MARQUEE_TEXT =
  "VELVET DARK · PINK NOISE · BETWEEN THE LINES · GOLDEN HOURS · VELVET DARK · PINK NOISE · BETWEEN THE LINES · GOLDEN HOURS · ";

export default function Music() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal(0.1);
  const { ref: cardRef, isVisible: cardVisible } = useReveal(0.15);
  const { ref: listRef, isVisible: listVisible } = useReveal(0.1);

  return (
    <div
      style={{
        backgroundColor: "#0E0A16",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main content */}
      <div
        style={{
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header — large editorial right-aligned */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal-up ${headerVisible ? "visible" : ""}`}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "4rem",
            overflow: "hidden",
          }}
        >
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "#FF1B6D",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              02 / Music
            </p>
            <SplitText
              tag="h2"
              text="MUSIC"
              splitType="chars"
              threshold={0.1}
              rootMargin="-80px"
              delay={60}
              duration={0.75}
              ease="power4.out"
              from={{ opacity: 0, y: 80, skewY: 6 }}
              to={{ opacity: 1, y: 0, skewY: 0 }}
              textAlign="right"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(5rem, 14vw, 12rem)",
                fontWeight: 700,
                lineHeight: 0.85,
                color: "#F0E4EB",
                letterSpacing: "-0.02em",
                marginRight: "clamp(-1rem, -4vw, -3rem)",
              }}
            />
          </div>
        </div>

        {/* Featured release card */}
        <div
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`reveal-up ${cardVisible ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#160F1F",
              border: "1px solid rgba(240,228,235,0.08)",
              borderRadius: "2px",
              overflow: "hidden",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(255,27,109,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(240,228,235,0.08)";
            }}
          >
            {/* Cover art */}
            <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
              <Image
                src="/photos/flashpic1.jpg"
                alt="Velvet Dark — latest single cover"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark overlay */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(22,15,31,0.9) 0%, transparent 60%)",
                }}
              />
              {/* Play button */}
              <button
                aria-label="Play Velvet Dark"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,27,109,0.15)",
                  border: "2px solid rgba(255,27,109,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(255,27,109,0.4)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 30px rgba(255,27,109,0.4)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translate(-50%, -50%) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(255,27,109,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "none";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translate(-50%, -50%) scale(1)";
                }}
              >
                <Play size={22} fill="#FF1B6D" color="#FF1B6D" style={{ marginLeft: "3px" }} />
              </button>
            </div>

            {/* Card info */}
            <div style={{ padding: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "#FF1B6D",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Latest Single · 2025
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#F0E4EB",
                  marginBottom: "1.25rem",
                }}
              >
                Velvet Dark
              </h3>
              {/* Platform mini-buttons */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {STREAM_PLATFORMS.map((p) => (
                  <a
                    key={p.name}
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.4rem 0.8rem",
                      backgroundColor: "rgba(7,5,12,0.6)",
                      border: `1px solid ${p.color}33`,
                      borderRadius: "2px",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        p.color;
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        `${p.color}22`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        `${p.color}33`;
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "rgba(7,5,12,0.6)";
                    }}
                  >
                    <Music2 size={12} style={{ color: p.color }} />
                    <span
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "0.72rem",
                        fontWeight: 400,
                        color: "#F0E4EB",
                      }}
                    >
                      {p.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Recent releases list */}
          <div
            ref={listRef as React.RefObject<HTMLDivElement>}
            className={`reveal-up delay-2 ${listVisible ? "visible" : ""}`}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "#7B6B77",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Recent Releases
            </p>
            {RELEASES.map((release, i) => (
              <div
                key={release.number}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1.25rem 1rem",
                  borderTop: "1px solid rgba(240,228,235,0.06)",
                  borderLeft: "2px solid transparent",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  transitionDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor =
                    "#FF1B6D";
                  (e.currentTarget as HTMLDivElement).style.backgroundColor =
                    "rgba(255,27,109,0.05)";
                  (e.currentTarget as HTMLDivElement).style.paddingLeft =
                    "1.5rem";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor =
                    "transparent";
                  (e.currentTarget as HTMLDivElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLDivElement).style.paddingLeft =
                    "1rem";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.65rem",
                    color: "#FF1B6D",
                    opacity: 0.7,
                    minWidth: "28px",
                  }}
                >
                  {release.number}
                </span>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.4rem",
                      fontStyle: "italic",
                      color: "#F0E4EB",
                      lineHeight: 1.2,
                    }}
                  >
                    {release.title}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "0.6rem",
                      color: "#7B6B77",
                    }}
                  >
                    {release.year}
                  </span>
                  <div style={{ display: "flex", gap: "0.4rem" }}>
                    {STREAM_PLATFORMS.map((p) => (
                      <a
                        key={p.name}
                        href="#"
                        aria-label={`Stream ${release.title} on ${p.name}`}
                        style={{
                          color: "#7B6B77",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            p.color;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "#7B6B77";
                        }}
                      >
                        <Music2 size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/* Bottom border */}
            <div style={{ borderTop: "1px solid rgba(240,228,235,0.06)" }} />
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div
        style={{
          backgroundColor: "#07050C",
          borderTop: "1px solid rgba(255,27,109,0.15)",
          borderBottom: "1px solid rgba(255,27,109,0.15)",
          padding: "1rem 0",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#FF1B6D",
              whiteSpace: "nowrap",
              paddingRight: "2rem",
            }}
          >
            {MARQUEE_TEXT}
          </span>
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#FF1B6D",
              whiteSpace: "nowrap",
              paddingRight: "2rem",
            }}
          >
            {MARQUEE_TEXT}
          </span>
        </div>
      </div>
    </div>
  );
}
