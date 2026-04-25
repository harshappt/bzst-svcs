import Link from "next/link";

import { EnterpriseUseCaseCarousel } from "@/components/enterprise-usecase-carousel";
import { Glyph, type GlyphKind } from "@/components/glyph";
import { CtaPanel, SectionHeader } from "@/components/sections";
import { SiteShell } from "@/components/site-shell";

const helpCards: Array<{ icon: GlyphKind; title: string; body: string }> = [
  {
    icon: "search",
    title: "Workflow assessment",
    body: "Analyze a high-friction area across operations, support, internal tooling, delivery, or back-office workflows and identify the right intervention.",
  },
  {
    icon: "document",
    title: "Implementation inside your current stack",
    body: "Improve workflows, review steps, approvals, QA, and handoffs without replacing the systems your teams already use.",
  },
  {
    icon: "layers",
    title: "Workflow redesign and orchestration",
    body: "Rework routing, handoffs, approvals, exception handling, and coordination across the tools your teams already rely on.",
  },
  {
    icon: "chart",
    title: "Measurement and optimization",
    body: "Track whether the solution improves speed, consistency, throughput, and business outcomes.",
  },
];

const outcomes: Array<{ icon: GlyphKind; title: string; body: string }> = [
  {
    icon: "admin",
    title: "Reduce manual work",
    body: "Cut repetitive effort across intake, handoffs, approvals, QA, and reporting workflows.",
  },
  {
    icon: "shield",
    title: "Improve operational consistency",
    body: "Make execution more repeatable with clearer review, control, and governance.",
  },
  {
    icon: "chart",
    title: "Deliver measurable business impact",
    body: "Increase execution velocity and make operational performance easier to measure and improve.",
  },
];

const steps: Array<{ number: string; icon: GlyphKind; title: string; body: string }> = [
  {
    number: "01",
    icon: "search",
    title: "Assess",
    body: "We align on goals, review the current workflow, and identify the highest-value problem to solve.",
  },
  {
    number: "02",
    icon: "rocket",
    title: "Implement",
    body: "We design and implement the solution using your current stack, operating model, and team constraints.",
  },
  {
    number: "03",
    icon: "chart",
    title: "Optimize",
    body: "We refine the workflow, measure results, and support handoff or continued improvement.",
  },
];

const useCases = [
  {
    title: "Request intake and triage",
    body: "Reduce back-and-forth in intake, routing, prioritization, and ownership across busy teams.",
  },
  {
    title: "Review and approval workflows",
    body: "Improve quality, compliance, and approval steps before work moves forward.",
  },
  {
    title: "Knowledge and documentation workflows",
    body: "Organize, extract, and reuse internal knowledge so teams can act faster with less manual searching.",
  },
  {
    title: "Operational data cleanup and normalization",
    body: "Map, normalize, and restructure operational data so teams can work with more consistency and less manual effort.",
  },
  {
    title: "QA and exception handling",
    body: "Identify errors, edge cases, and operational exceptions earlier so teams spend less time on cleanup.",
  },
  {
    title: "Reporting and operational summaries",
    body: "Summarize activity across systems so teams can act faster without manual reporting churn.",
  },
];

export default function EnterprisePage() {
  return (
    <SiteShell activeHref="/services/enterprise">
      <section className="hero hero-enterprise">
        <div className="hero-copy">
          <div className="eyebrow">Enterprise implementation services</div>
          <h1>
            AI execution for
            <br />
            modern software
            <br />
            <span className="accent-text">and operations teams.</span>
          </h1>
          <p>
            We assess one high-friction workflow, implement the right solution in your
            existing stack, and make the result measurable.
          </p>
          <div className="button-row">
            <Link href="mailto:hello@bzst.tech" className="button button-primary">
              <span>Talk to an expert</span>
              <span className="arrow">↗</span>
            </Link>
            <Link href="#enterprise-use-cases" className="button button-secondary">
              <span>See example use cases</span>
              <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
        <div className="enterprise-hero-scene" aria-hidden="true">
          <div className="enterprise-hero-orbit enterprise-hero-orbit-1" />
          <div className="enterprise-hero-orbit enterprise-hero-orbit-2" />
          <div className="enterprise-hero-column enterprise-hero-column-left">
            <div className="enterprise-node">
              <div className="enterprise-node-icon"><Glyph kind="layers" /></div>
              <span>Core systems</span>
            </div>
            <div className="enterprise-node">
              <div className="enterprise-node-icon"><Glyph kind="document" /></div>
              <span>Team workflows</span>
            </div>
            <div className="enterprise-node">
              <div className="enterprise-node-icon"><Glyph kind="chart" /></div>
              <span>Operational signals</span>
            </div>
          </div>
          <div className="enterprise-hero-core">
            <div className="enterprise-hero-core-badge">
              <Glyph kind="spark" />
              <span>Workflow implementation</span>
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
            <div className="enterprise-hero-core-title">Operational clarity</div>
            <div className="enterprise-hero-core-steps">
              <span>Assess the workflow</span>
              <span>Implement the solution</span>
              <span>Track outcomes</span>
            </div>
          </div>
          <div className="enterprise-hero-column enterprise-hero-column-right">
            <div className="enterprise-outcome-chip">
              <Glyph kind="rocket" />
              <span>Faster execution</span>
            </div>
            <div className="enterprise-outcome-chip">
              <Glyph kind="shield" />
              <span>Better governance</span>
            </div>
            <div className="enterprise-outcome-chip">
              <Glyph kind="target" />
              <span>Measurable impact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-enterprise-help">
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

      <section className="section section-enterprise-outcomes">
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

      <section className="section section-enterprise-steps">
        <SectionHeader title="How we engage" />
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

      <section className="section section-enterprise-models" id="enterprise-use-cases">
        <SectionHeader title="Example enterprise use cases" />
        <EnterpriseUseCaseCarousel items={useCases} />
      </section>

      <CtaPanel
        title="Start with one workflow that is slowing execution down."
        description="We can assess the area, implement the solution, and make sure the result is measurable."
        primaryLabel="Book a discovery call"
        primaryHref="mailto:hello@bzst.tech"
      />
    </SiteShell>
  );
}
