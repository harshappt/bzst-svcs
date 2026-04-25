import Link from "next/link";

import { Glyph } from "@/components/glyph";

const leftSignals = [
  { icon: "chat" as const, label: "Messages" },
  { icon: "document" as const, label: "Docs" },
  { icon: "admin" as const, label: "Forms" },
  { icon: "globe" as const, label: "Web" },
];

const rightSignals = [
  { icon: "lead" as const, label: "Qualified leads" },
  { icon: "followup" as const, label: "Faster follow-up" },
  { icon: "spark" as const, label: "Better experiences" },
  { icon: "chart" as const, label: "Efficiency gains" },
];

export function HomeHeroVisual() {
  return (
    <div className="home-hero-scene">
      <div className="home-hero-noise" />
      <div className="home-hero-glow home-hero-glow-a" />
      <div className="home-hero-glow home-hero-glow-b" />
      <div className="home-hero-layout">
        <div className="home-hero-copy">
          <div className="home-hero-kicker">AI implementation services</div>
          <h1>Practical AI Services that remove operational drag</h1>
          <div className="home-hero-actions">
            <Link href="mailto:hello@bzst.tech" className="button button-primary">
              <span>Book a discovery call</span>
              <span className="arrow">↗</span>
            </Link>
            <Link href="/services/small-business" className="button-link">
              <span>See small business solutions</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="home-hero-visual-wrap">
          <div className="home-hero-orbit home-hero-orbit-a" />
          <div className="home-hero-orbit home-hero-orbit-b" />
          <div className="home-hero-orbit home-hero-orbit-c" />
          <div className="home-hero-beam home-hero-beam-left" />
          <div className="home-hero-beam home-hero-beam-right" />
          <div className="home-hero-beam home-hero-beam-left home-hero-beam-lower" />
          <div className="home-hero-beam home-hero-beam-right home-hero-beam-lower" />

          <div className="home-hero-column home-hero-column-left">
            {leftSignals.map((item, index) => (
              <div key={item.label} className={`home-hero-signal home-hero-signal-${index + 1}`}>
                <span className="home-hero-signal-icon">
                  <Glyph kind={item.icon} />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="home-hero-core">
            <div className="home-hero-badge">
              <Glyph kind="spark" />
              <span>Operational AI</span>
            </div>
            <div className="home-hero-engine">
              <div className="home-hero-engine-ring home-hero-engine-ring-a" />
              <div className="home-hero-engine-ring home-hero-engine-ring-b" />
              <div className="home-hero-engine-ring home-hero-engine-ring-c" />
              <div className="home-hero-engine-disc home-hero-engine-disc-a" />
              <div className="home-hero-engine-disc home-hero-engine-disc-b" />
              <div className="home-hero-engine-core">
                <div className="home-hero-engine-grid">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
                <div className="home-hero-engine-mark">
                  <Glyph kind="spark" />
                </div>
              </div>
              <div className="home-hero-pulse home-hero-pulse-a" />
              <div className="home-hero-pulse home-hero-pulse-b" />
            </div>
            <div className="home-hero-core-copy">
              <strong>Assess. Build. Improve.</strong>
              <span>Automation that fits the way your team already works.</span>
            </div>
          </div>

          <div className="home-hero-column home-hero-column-right">
            {rightSignals.map((item, index) => (
              <div key={item.label} className={`home-hero-signal home-hero-signal-${index + 1}`}>
                <span className="home-hero-signal-icon">
                  <Glyph kind={item.icon} />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
