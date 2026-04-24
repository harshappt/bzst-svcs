import { Glyph, type GlyphKind } from "@/components/glyph";

type WorkflowVisualProps = {
  variant?: "home" | "small-business" | "enterprise";
  animated?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  inputs: Array<{ title: string; detail?: string; icon?: GlyphKind }>;
  outcomes: Array<{ title: string; detail?: string; icon?: GlyphKind }>;
  centerTitle: string;
  centerLabel?: string;
  centerSubLabel?: string;
  showFoundation?: string[];
};

export function WorkflowVisual({
  variant = "home",
  animated = false,
  leftLabel = "Inputs",
  rightLabel = "Outcomes",
  inputs,
  outcomes,
  centerTitle,
  centerLabel,
  centerSubLabel,
  showFoundation,
}: WorkflowVisualProps) {
  const useCenterCard = variant !== "home";
  const useCompactNodes = variant === "home";

  return (
    <div className="hero-stage" aria-hidden="true">
      <div className={`workflow-visual workflow-visual-${variant} ${animated ? "workflow-animated" : ""}`}>
        <div className="workflow-heading">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
        <div className="workflow-grid">
          <div className={`workflow-stack ${useCompactNodes ? "workflow-stack-compact" : ""}`}>
            {inputs.map((item, index) => (
              useCompactNodes ? (
                <div
                  key={item.title}
                  className="workflow-chip"
                  style={animated ? { animationDelay: `${index * 120}ms` } : undefined}
                >
                  <span className="workflow-chip-icon">
                    <Glyph kind={item.icon ?? "spark"} />
                  </span>
                  <strong>{item.title}</strong>
                </div>
              ) : (
                <div
                  key={item.title}
                  className="workflow-card"
                  style={animated ? { animationDelay: `${index * 120}ms` } : undefined}
                >
                  <strong>{item.title}</strong>
                  {item.detail ? <span>{item.detail}</span> : null}
                </div>
              )
            ))}
          </div>
          <div className="workflow-center">
            {useCenterCard ? (
              <div className="workflow-center-card">
                <div className="dot-grid">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
                <div className="orb-brand">{centerTitle}</div>
                {centerLabel ? <div className="center-card-label">{centerLabel}</div> : null}
                {centerSubLabel ? <div className="center-card-sub">{centerSubLabel}</div> : null}
              </div>
            ) : (
              <div className="bzst-orb">
                <div className="dot-grid">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
                <div className="orb-brand">{centerTitle}</div>
              </div>
            )}
            {!useCenterCard && centerLabel ? <div className="orb-caption">{centerLabel}</div> : null}
            {!useCenterCard && centerSubLabel ? <div className="orb-subcaption">{centerSubLabel}</div> : null}
          </div>
          <div className={`workflow-stack outcomes ${useCompactNodes ? "workflow-stack-compact" : ""}`}>
            {outcomes.map((item, index) => (
              useCompactNodes ? (
                <div
                  key={item.title}
                  className="workflow-chip"
                  style={animated ? { animationDelay: `${index * 140 + 120}ms` } : undefined}
                >
                  <span className="workflow-chip-icon">
                    <Glyph kind={item.icon ?? "spark"} />
                  </span>
                  <strong>{item.title}</strong>
                </div>
              ) : (
                <div
                  key={item.title}
                  className="workflow-card"
                  style={animated ? { animationDelay: `${index * 140 + 120}ms` } : undefined}
                >
                  <strong>{item.title}</strong>
                  {item.detail ? <span>{item.detail}</span> : null}
                </div>
              )
            ))}
          </div>
        </div>
        {showFoundation ? (
          <div className="model-grid" style={{ marginTop: 20 }}>
            {showFoundation.map((item) => (
              <div key={item} className="model-card" style={{ padding: "14px 18px" }}>
                <p style={{ margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="stone-plinth" />
      <div className="decor-vase" />
      <div className="leaf leaf-1" />
      <div className="leaf leaf-2" />
      <div className="leaf leaf-3" />
    </div>
  );
}
