import Link from "next/link";

import { Glyph, type GlyphKind } from "@/components/glyph";
import { CtaPanel, SectionHeader } from "@/components/sections";
import { SiteShell } from "@/components/site-shell";
import { WorkflowVisual } from "@/components/workflow-visual";

const pathCards: Array<{ icon: GlyphKind; title: string; body: string; href: string }> = [
  {
    icon: "store",
    title: "Small Business Solutions",
    body: "Capture more leads, respond faster, win more reviews, and save time.",
    href: "/services/small-business",
  },
  {
    icon: "building",
    title: "Enterprise Services",
    body: "Modernize content, CMS, and operations with scalable AI systems.",
    href: "/services/enterprise",
  },
];

const helpCards: Array<{ icon: GlyphKind; title: string; body: string }> = [
  {
    icon: "lead",
    title: "Lead follow-up",
    body: "Respond faster and convert more opportunities.",
  },
  {
    icon: "edit",
    title: "Website updates",
    body: "Keep your site and content fresh and accurate.",
  },
  {
    icon: "chat",
    title: "Customer communication",
    body: "Engage customers with the right message at the right time.",
  },
  {
    icon: "layers",
    title: "CMS modernization",
    body: "Streamline content operations and scale what works.",
  },
];

const pillars: Array<{ icon: GlyphKind; title: string; body: string }> = [
  {
    icon: "target",
    title: "Practical delivery",
    body: "We focus on real workflows and ship solutions you can use every day.",
  },
  {
    icon: "chart",
    title: "Measurable outcomes",
    body: "Clear metrics, continuous improvement, and results that compound.",
  },
  {
    icon: "shield",
    title: "Responsible implementation",
    body: "Secure, transparent, and built with privacy, governance, and long-term trust.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero-home-visual">
        <WorkflowVisual
          variant="home"
          animated
          inputs={[
            { title: "Messages", icon: "chat" },
            { title: "Forms", icon: "admin" },
            { title: "Documents", icon: "document" },
            { title: "CRM", icon: "lead" },
            { title: "Website", icon: "globe" },
          ]}
          outcomes={[
            { title: "More qualified leads", icon: "lead" },
            { title: "Faster response", icon: "followup" },
            { title: "Better experiences", icon: "spark" },
            { title: "Higher efficiency", icon: "chart" },
            { title: "Stronger growth", icon: "rocket" },
          ]}
          centerTitle="AI"
          centerLabel="AI workflows"
          centerSubLabel="Plan. Automate. Improve."
        />
      </section>

      <section className="hero-home-copy">
        <h1>
          Practical AI systems that remove operational drag.
        </h1>
        <div className="button-row hero-home-actions">
          <Link href="mailto:hello@bzst.tech" className="button button-primary">
            <span>Book a discovery call</span>
            <span className="arrow">↗</span>
          </Link>
          <Link href="/services/small-business" className="button-link">
            <span>See small business solutions</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <section className="section section-home-paths">
        <SectionHeader title="Choose your path" />
        <div className="path-grid">
          {pathCards.map((card) => (
            <Link key={card.title} href={card.href} className="path-card">
              <div className="icon-disc" aria-hidden="true">
                <Glyph kind={card.icon} />
              </div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <div style={{ marginTop: 18, fontSize: "1.4rem" }}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-home-help">
        <SectionHeader title="What we help with" />
        <div className="help-grid">
          {helpCards.map((card) => (
            <div key={card.title} className="help-card">
              <div className="icon-disc" aria-hidden="true">
                <Glyph kind={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-home-why">
        <SectionHeader title="Why teams choose us" />
        <div className="pillars-band">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-block">
              <div className="pillar-row">
                <div className="icon-outline" aria-hidden="true">
                  <Glyph kind={pillar.icon} />
                </div>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaPanel
        title="Ready to put AI to work in your business?"
        description="Let’s identify the right opportunities and build a plan tailored to your goals."
        primaryLabel="Book a discovery call"
        primaryHref="mailto:hello@bzst.tech"
      />
    </SiteShell>
  );
}
