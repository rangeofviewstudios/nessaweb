"use client";

import Image from "next/image";
import { useReveal } from "@/app/hooks/useReveal";
import SplitText from "@/app/components/SplitText";

interface GalleryImage {
  src: string;
  alt: string;
  spanRows?: boolean;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/photos/flashpic2.JPG",
    alt: "NAINI — flash performance",
    spanRows: true,
  },
  {
    src: "/photos/treepic1.jpg",
    alt: "NAINI — nature editorial",
  },
  {
    src: "/photos/treepic2.JPG",
    alt: "NAINI — tree portrait",
    spanRows: true,
  },
  {
    src: "/photos/flashcalm.JPG",
    alt: "NAINI — calm artistic shot",
  },
  {
    src: "/photos/bluefitpic.JPG",
    alt: "NAINI — blue outfit editorial",
  },
  {
    src: "/photos/flashpic1.jpg",
    alt: "NAINI — flash performance 2",
  },
];

export default function Gallery() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal(0.1);
  const { ref: gridRef, isVisible: gridVisible } = useReveal(0.05);

  return (
    <div
      style={{
        backgroundColor: "#B5105A",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: "20%",
          width: "40%",
          height: "50%",
          background:
            "radial-gradient(ellipse 70% 70% at 80% 40%, rgba(255,27,109,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal-up ${headerVisible ? "visible" : ""}`}
          style={{ marginBottom: "3rem" }}
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
            02 / Gallery
          </p>
          <SplitText
            tag="h2"
            text="GALLERY"
            splitType="chars"
            threshold={0.1}
            rootMargin="-80px"
            delay={45}
            duration={0.7}
            ease="power4.out"
            from={{ opacity: 0, y: 60, rotateX: -20 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            textAlign="left"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              color: "#F0E4EB",
              letterSpacing: "-0.02em",
              perspective: "500px",
            }}
          />
        </div>

        {/* Masonry grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "280px",
            gap: "0.75rem",
          }}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`reveal-up ${gridVisible ? "visible" : ""}`}
              style={{
                gridRow: image.spanRows ? "span 2" : "span 1",
                position: "relative",
                overflow: "hidden",
                borderRadius: "2px",
                border: "1px solid rgba(240,228,235,0.06)",
                cursor: "pointer",
                transitionDelay: `${index * 0.07}s`,
              }}
              onMouseEnter={(e) => {
                const img = (e.currentTarget as HTMLDivElement).querySelector(
                  "img"
                ) as HTMLImageElement | null;
                const overlay = (
                  e.currentTarget as HTMLDivElement
                ).querySelector(".gallery-overlay") as HTMLDivElement | null;
                if (img) {
                  img.style.filter = "grayscale(0%)";
                  img.style.transform = "scale(1.04)";
                }
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const img = (e.currentTarget as HTMLDivElement).querySelector(
                  "img"
                ) as HTMLImageElement | null;
                const overlay = (
                  e.currentTarget as HTMLDivElement
                ).querySelector(".gallery-overlay") as HTMLDivElement | null;
                if (img) {
                  img.style.filter = "grayscale(30%)";
                  img.style.transform = "scale(1)";
                }
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "grayscale(30%)",
                  transform: "scale(1)",
                  transition: "filter 0.5s ease, transform 0.5s ease",
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover glow overlay */}
              <div
                className="gallery-overlay"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,27,109,0.15) 0%, transparent 70%)",
                  opacity: 0,
                  transition: "opacity 0.5s ease",
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive grid */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 220px !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 300px !important;
          }
          div[style*="grid-row: span 2"] {
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
