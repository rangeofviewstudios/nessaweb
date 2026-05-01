"use client";

import Image from "next/image";
import { useReveal } from "@/app/hooks/useReveal";
import SplitText from "@/app/components/SplitText";

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  isPrimary?: boolean;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "NAINI",
    role: "Artist · Songwriter",
    imageSrc: "/photos/pinkhero.JPG",
    imageAlt: "NAINI — artist portrait",
    isPrimary: true,
  },
  {
    name: "A. Chen",
    role: "Creative Director",
    imageSrc: "/photos/treepic1.jpg",
    imageAlt: "A. Chen — Creative Director",
  },
  {
    name: "M. Rivera",
    role: "Visual Director",
    imageSrc: "/photos/flashcalm.JPG",
    imageAlt: "M. Rivera — Visual Director",
  },
];

export default function Team() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useReveal(0.1);

  return (
    <div
      style={{
        backgroundColor: "#0E0A16",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "40%",
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,27,109,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal-up ${headerVisible ? "visible" : ""}`}
          style={{ marginBottom: "4rem" }}
        >
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
            04 / Team
          </p>
          <SplitText
            tag="h2"
            text="THE TEAM"
            splitType="chars"
            threshold={0.1}
            rootMargin="-80px"
            delay={50}
            duration={0.72}
            ease="power4.out"
            from={{ opacity: 0, y: 55, skewX: 8 }}
            to={{ opacity: 1, y: 0, skewX: 0 }}
            textAlign="left"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              color: "#F0E4EB",
              letterSpacing: "-0.02em",
            }}
          />
        </div>

        {/* Cards */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.name}
              className={`reveal-up ${cardsVisible ? "visible" : ""}`}
              style={{
                backgroundColor: "#160F1F",
                border: "1px solid rgba(240,228,235,0.06)",
                borderRadius: "2px",
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.32,0.72,0,1)",
                transitionDelay: `${index * 0.1}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,27,109,0.35)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,27,109,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(240,228,235,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    transition: "transform 0.5s ease",
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Subtle bottom gradient */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(22,15,31,0.8) 0%, transparent 100%)",
                  }}
                />
                {/* Primary badge */}
                {member.isPrimary && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      backgroundColor: "#FF1B6D",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#07050C",
                      }}
                    >
                      Artist
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: "#FF1B6D",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  {member.role}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                    fontWeight: member.isPrimary ? 700 : 400,
                    fontStyle: member.isPrimary ? "normal" : "italic",
                    color: "#F0E4EB",
                    lineHeight: 1.1,
                  }}
                >
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
