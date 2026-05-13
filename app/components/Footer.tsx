"use client";

import Image from "next/image";
import { Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Music", href: "#music" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  function handleNavClick(href: string) {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      style={{
        backgroundColor: "#9A0D4D",
        borderTop: "1px solid #FF1B6D",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large background text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(8rem, 22vw, 20rem)",
            fontWeight: 700,
            color: "#F0E4EB",
            opacity: 0.07,
            letterSpacing: "-0.02em",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          NAINI
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem clamp(1.5rem, 5vw, 5rem) 3rem",
        }}
      >
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Left: Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Image
              src="/photos/nainilogowhite.png"
              alt="NAINI"
              width={100}
              height={38}
              style={{ objectFit: "contain", display: "block" }}
            />
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "rgba(240,228,235,0.45)",
                lineHeight: 1.5,
              }}
            >
              Raw emotion.
              <br />
              Refined sound.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.25rem" }}>
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
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(240,228,235,0.1)",
                    borderRadius: "2px",
                    color: "rgba(255,220,240,0.6)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#FF1B6D";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#FF1B6D";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 12px rgba(255,27,109,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(240,228,235,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#7B6B77";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "none";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Nav links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,220,240,0.6)",
                marginBottom: "1.25rem",
              }}
            >
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "0.88rem",
                        fontWeight: 300,
                        color: "rgba(240,228,235,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#FF1B6D";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(240,228,235,0.5)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,220,240,0.6)",
                marginBottom: "1.25rem",
              }}
            >
              Get in Touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href="mailto:hello@naini.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(240,228,235,0.5)",
                  textDecoration: "none",
                  fontFamily: "var(--font-outfit)",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FF1B6D";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(240,228,235,0.5)";
                }}
              >
                <Mail size={14} style={{ flexShrink: 0, color: "#FF1B6D" }} />
                hello@naini.com
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(240,228,235,0.35)",
                  fontFamily: "var(--font-outfit)",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                }}
              >
                <MapPin size={14} style={{ flexShrink: 0, color: "#FF1B6D" }} />
                New York, NY
              </div>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                  padding: "0.6rem 1.2rem",
                  border: "1px solid rgba(255,27,109,0.35)",
                  borderRadius: "2px",
                  color: "#FF1B6D",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(255,27,109,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 20px rgba(255,27,109,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "none";
                }}
              >
                Booking Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(240,228,235,0.06)",
            marginBottom: "2rem",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: "rgba(255,220,240,0.6)",
            }}
          >
            &copy; {new Date().getFullYear()} NAINI. All rights reserved.
          </p>
          <a
            href="https://www.rovstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              textDecoration: "none",
              opacity: 0.55,
              transition: "opacity 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.55";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,220,240,0.6)",
                whiteSpace: "nowrap",
              }}
            >
              Curated with intention by
            </span>
            <Image
              src="/photos/WHITEnoBG.png"
              alt="Range Of View Studios"
              width={72}
              height={28}
              style={{ objectFit: "contain", display: "block" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
