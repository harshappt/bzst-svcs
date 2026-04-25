import Link from "next/link";

import { Glyph, type GlyphKind } from "@/components/glyph";
import { CtaPanel, SectionHeader } from "@/components/sections";
import { SiteShell } from "@/components/site-shell";

const helpCards: Array<{ icon: GlyphKind; title: string; body: string }> = [
  {
    icon: "admin",
    title: "Back-office automation",
    body: "Automate routine admin and keep your business moving.",
  },
  {
    icon: "followup",
    title: "Customer follow-up",
    body: "Respond faster, follow up consistently, and close more.",
  },
  {
    icon: "edit",
    title: "Content and website updates",
    body: "Keep your website and content fresh without the manual work.",
  },
  {
    icon: "refresh",
    title: "Repetitive digital workflows",
    body: "Eliminate copy-paste tasks and streamline everyday processes.",
  },
];

const examples: Array<{ left: GlyphKind; right: GlyphKind; title: string; body: string }> = [
  {
    left: "whatsapp",
    right: "lead",
    title: "Organize leads and conversations from WhatsApp",
    body: "Capture, qualify, tag, and assign leads automatically.",
  },
  {
    left: "document",
    right: "globe",
    title: "Update website content from a doc or message",
    body: "Turn notes and docs into live website updates in minutes.",
  },
  {
    left: "calendar",
    right: "spark",
    title: "Send reminders and confirmations automatically",
    body: "Reduce no-shows with smart reminders across channels.",
  },
  {
    left: "inbox",
    right: "admin",
    title: "Route requests and reduce copy-paste admin",
    body: "Auto-route, reply, and update records with the right information.",
  },
];

const outcomes: Array<{ icon: GlyphKind; title: string; body: string }> = [
  {
    icon: "chart",
    title: "Save staff time",
    body: "Automate repetitive work and get hours back every week.",
  },
  {
    icon: "lead",
    title: "Reduce missed opportunities",
    body: "Follow up faster and never let a customer slip through the cracks.",
  },
  {
    icon: "layers",
    title: "Create more consistent operations",
    body: "Standardize processes and deliver a better experience every time.",
  },
];

const steps: Array<{ number: string; icon: GlyphKind; title: string; body: string }> = [
  {
    number: "01",
    icon: "search",
    title: "Audit",
    body: "We review your workflows and identify the highest-impact opportunities.",
  },
  {
    number: "02",
    icon: "rocket",
    title: "Pilot",
    body: "We build and test the solution with clear goals and quick wins.",
  },
  {
    number: "03",
    icon: "support",
    title: "Ongoing support",
    body: "We refine, expand, and support your team as you scale.",
  },
];

export default function SmallBusinessPage() {
  return (
    <SiteShell activeHref="/services/small-business">
      <section className="hero hero-smb">
        <div className="hero-copy">
          <div className="eyebrow">Small business solutions</div>
          <h1>
            Automate routine
            <br />
            work and
            <br />
            <span className="accent-text">free up hours.</span>
          </h1>
          <p>
            We help small businesses streamline follow-up, reduce repetitive admin,
            keep digital work moving, and make day-to-day operations easier to run.
          </p>
          <div className="button-row">
            <Link href="mailto:hello@bzst.tech" className="button button-primary">
              <span>Book a discovery call</span>
              <span className="arrow">↗</span>
            </Link>
            <Link href="#how-we-work" className="button button-secondary">
              <span>See how it works</span>
              <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
        <div className="smb-hero-scene" aria-hidden="true">
          <div className="smb-hero-orbit smb-hero-orbit-1" />
          <div className="smb-hero-orbit smb-hero-orbit-2" />
          <div className="smb-hero-column smb-hero-column-left">
            <div className="smb-node">
              <div className="smb-node-icon"><Glyph kind="whatsapp" /></div>
              <span>Messages</span>
            </div>
            <div className="smb-node">
              <div className="smb-node-icon"><Glyph kind="inbox" /></div>
              <span>Forms & requests</span>
            </div>
            <div className="smb-node">
              <div className="smb-node-icon"><Glyph kind="document" /></div>
              <span>Docs & updates</span>
            </div>
          </div>
          <div className="smb-hero-core">
            <div className="smb-hero-core-badge">
              <Glyph kind="spark" />
              <span>AI-powered operations</span>
            </div>
            <div className="hero-ai-emblem">
              <div className="hero-ai-ring hero-ai-ring-1" />
              <div className="hero-ai-ring hero-ai-ring-2" />
              <div className="hero-ai-core">
                <div className="hero-ai-core-glow" />
                <div className="hero-ai-core-star">
                  <Glyph kind="spark" />
                </div>
              </div>
              <div className="hero-ai-node hero-ai-node-top" />
              <div className="hero-ai-node hero-ai-node-right" />
              <div className="hero-ai-node hero-ai-node-bottom" />
              <div className="hero-ai-node hero-ai-node-left" />
            </div>
            <div className="smb-hero-core-title">AI handling the routine</div>
            <div className="smb-hero-core-steps">
              <span>Capture and qualify</span>
              <span>Route automatically</span>
              <span>Keep work moving</span>
            </div>
          </div>
          <div className="smb-hero-column smb-hero-column-right">
            <div className="smb-outcome-chip">
              <Glyph kind="lead" />
              <span>More leads handled</span>
            </div>
            <div className="smb-outcome-chip">
              <Glyph kind="followup" />
              <span>Faster response</span>
            </div>
            <div className="smb-outcome-chip">
              <Glyph kind="chart" />
              <span>More time back</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-smb-help">
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

      <section className="section section-smb-examples">
        <SectionHeader title="Example workflows" />
        <div className="example-grid">
          {examples.map((example) => (
            <div key={example.title} className="example-card">
              <div className="example-card-top" aria-hidden="true">
                <div className="mini-disc">
                  <Glyph kind={example.left} />
                </div>
                <div className="example-arrow">→</div>
                <div className="mini-disc">
                  <Glyph kind={example.right} />
                </div>
              </div>
              <h3>{example.title}</h3>
              <p>{example.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-smb-outcomes">
        <SectionHeader title="Outcomes that matter" />
        <div className="outcome-band">
          {outcomes.map((item) => (
            <div key={item.title} className="pillar-block">
              <div className="pillar-row">
                <div className="icon-outline" aria-hidden="true">
                  <Glyph kind={item.icon} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-smb-steps" id="how-we-work">
        <SectionHeader title="How we work" />
        <div className="steps-band">
          {steps.map((step, index) => (
            <div key={step.title} className="step-block">
              {index < steps.length - 1 ? <div className="step-line" /> : null}
              <div>
                <span className="step-marker">{step.number}</span>
                <div className="step-disc" aria-hidden="true">
                  <Glyph kind={step.icon} />
                </div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaPanel
        title="Ready to save time and grow with AI?"
        description="Let’s find the right opportunities and build a plan tailored to your business."
        primaryLabel="Book a discovery call"
        primaryHref="mailto:hello@bzst.tech"
      />
    </SiteShell>
  );
}
