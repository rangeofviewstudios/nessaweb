"use client";

import Image from "next/image";
import { useReveal } from "@/app/hooks/useReveal";
import SplitText from "@/app/components/SplitText";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "50M+", label: "Streams" },
  { value: "200+", label: "Shows" },
  { value: "5 Yrs", label: "Creating" },
];

export default function About() {
  const { ref: sectionRef, isVisible } = useReveal(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useReveal(0.15);
  const { ref: contentRef, isVisible: contentVisible } = useReveal(0.1);

  return (
    <div
      style={{
        backgroundColor: "#07050C",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "0",
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(ellipse 60% 70% at 20% 40%, rgba(255,27,109,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "center",
        }}
      >
        {/* Left: Images */}
        <div
          ref={imageRef as React.RefObject<HTMLDivElement>}
          className={`reveal-up ${imageVisible ? "visible" : ""}`}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Primary image */}
          <div
            style={{
              position: "relative",
              borderRadius: "2px",
              overflow: "hidden",
              transform: "rotate(-2deg)",
              border: "1px solid rgba(255,27,109,0.2)",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(255,27,109,0.1)",
            }}
          >
            {/* Glow behind */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-20px",
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,27,109,0.2) 0%, transparent 70%)",
                zIndex: 0,
                borderRadius: "2px",
              }}
            />
            <Image
              src="/photos/flashcalm.JPG"
              alt="NAINI — artistic portrait"
              width={600}
              height={750}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                position: "relative",
                zIndex: 1,
                maxHeight: "500px",
                width: "100%",
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Secondary image — offset */}
          <div
            style={{
              alignSelf: "flex-end",
              width: "65%",
              borderRadius: "2px",
              overflow: "hidden",
              transform: "rotate(1.5deg)",
              border: "1px solid rgba(240,228,235,0.08)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              marginTop: "-2rem",
            }}
          >
            <Image
              src="/photos/bluefitpic.JPG"
              alt="NAINI — editorial fashion"
              width={400}
              height={500}
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                width: "100%",
              }}
              sizes="(max-width: 768px) 65vw, 30vw"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Section label */}
          <p
            className={`reveal-up delay-1 ${contentVisible ? "visible" : ""}`}
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "#FF1B6D",
              textTransform: "uppercase",
            }}
          >
            01 / About
          </p>

          {/* Pull quote — word-by-word SplitText reveal */}
          <blockquote
            style={{
              borderLeft: "2px solid #FF1B6D",
              paddingLeft: "1.25rem",
              margin: 0,
            }}
          >
            <SplitText
              tag="span"
              text='"Music is the space between the notes."'
              splitType="words"
              threshold={0.2}
              rootMargin="-60px"
              delay={70}
              duration={0.7}
              ease="power3.out"
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#F0E4EB",
              }}
            />
          </blockquote>

          {/* Body paragraphs */}
          <div
            className={`reveal-up delay-2 ${contentVisible ? "visible" : ""}`}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "0.92rem",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "#7B6B77",
              }}
            >
              NAINI is an artist who lives in the quiet tension between genre
              and feeling. Raised on everything from jazz-soaked Sunday mornings
              to the fluorescent hum of late-night studio sessions, her sound
              refuses easy categorization.
            </p>
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "0.92rem",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "#7B6B77",
              }}
            >
              Each track is a developed photograph — pulled from darkness into
              something luminous and precise. The debut EP arrived without
              fanfare and landed everywhere at once.
            </p>
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "0.92rem",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "#7B6B77",
              }}
            >
              She writes from the inside out. Performs like no one is watching.
              Records like everything depends on it.
            </p>
          </div>

          {/* Divider */}
          <div
            className={`reveal-up delay-2 ${contentVisible ? "visible" : ""}`}
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(240,228,235,0.08)",
            }}
          />

          {/* Stats */}
          <div
            className={`reveal-up delay-3 ${contentVisible ? "visible" : ""}`}
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    color: "#FF1B6D",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "0.72rem",
                    fontWeight: 400,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#7B6B77",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
