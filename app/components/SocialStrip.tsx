"use client";

import { Instagram, Twitter, Youtube, ExternalLink } from "lucide-react";

const SOCIALS = [
  {
    Icon: Instagram,
    label: "Instagram",
    handle: "@nainiofficial",
    href: "#",
  },
  {
    Icon: Twitter,
    label: "Twitter / X",
    handle: "@nainimusic",
    href: "#",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    handle: "NAINI",
    href: "#",
  },
];

export default function SocialStrip() {
  return (
    <div
      style={{
        backgroundColor: "#FF8FAB",
        borderTop: "1px solid rgba(255,27,109,0.18)",
        borderBottom: "1px solid rgba(255,27,109,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(255,229,236,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 5rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "1.75rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(44,0,21,0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(44,0,21,0.45)",
              whiteSpace: "nowrap",
            }}
          >
            Follow the journey
          </p>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(44,0,21,0.1)",
            }}
          />
        </div>

        {/* Social cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "0",
          }}
        >
          {SOCIALS.map(({ Icon, label, handle, href }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow NAINI on ${label}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.5rem 1.25rem",
                textDecoration: "none",
                borderRight:
                  i < SOCIALS.length - 1
                    ? "1px solid rgba(44,0,21,0.08)"
                    : "none",
                transition: "background-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(255,27,109,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "transparent";
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(44,0,21,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} color="#FF1B6D" />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(44,0,21,0.45)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#2C0015",
                    letterSpacing: "0.01em",
                  }}
                >
                  {handle}
                </p>
              </div>

              <ExternalLink size={13} color="rgba(44,0,21,0.3)" />
            </a>
          ))}
        </div>

        {/* Bottom rule */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(44,0,21,0.08)",
          }}
        />
      </div>
    </div>
  );
}
