import Link from "next/link";

export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title section-centered">
      <h2>{title}</h2>
      <div className="section-rule" />
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function CtaPanel({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
    return (
      <section className="cta-panel">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="button-row" style={{ marginTop: 24 }}>
            <Link href={primaryHref} className="button button-primary">
              <span>{primaryLabel}</span>
              <span className="arrow">↗</span>
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref} className="button-link">
                <span>{secondaryLabel}</span>
                <span className="arrow">→</span>
              </Link>
            ) : null}
          </div>
        </div>
        <div className="cta-visual" aria-hidden="true">
          <div className="cta-stone" />
          <div className="cta-bowl" />
          <div className="cta-plant-stem" />
          <div className="cta-leaf leaf-a" />
          <div className="cta-leaf leaf-b" />
          <div className="cta-leaf leaf-c" />
        </div>
      </section>
    );
}
