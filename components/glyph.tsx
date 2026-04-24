export type GlyphKind =
  | "store"
  | "building"
  | "lead"
  | "edit"
  | "chat"
  | "layers"
  | "target"
  | "chart"
  | "shield"
  | "admin"
  | "followup"
  | "refresh"
  | "whatsapp"
  | "globe"
  | "calendar"
  | "inbox"
  | "search"
  | "rocket"
  | "support"
  | "document"
  | "spark";

export function Glyph({ kind }: { kind: GlyphKind }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {kind === "store" ? (
        <>
          <path {...common} d="M4 10h16v9H4z" />
          <path {...common} d="M6 10l1.2-4h9.6L18 10" />
          <path {...common} d="M9 19v-4h6v4" />
        </>
      ) : null}
      {kind === "building" ? (
        <>
          <path {...common} d="M6 20V7l6-3 6 3v13" />
          <path {...common} d="M10 20v-4h4v4" />
          <path {...common} d="M9 10h.01M15 10h.01M9 13h.01M15 13h.01" />
        </>
      ) : null}
      {kind === "lead" ? (
        <>
          <circle {...common} cx="11" cy="10" r="4" />
          <path {...common} d="M4 20c1.5-3 4.1-4.5 7-4.5S16.5 17 18 20" />
          <path {...common} d="m17 7 2 2 4-4" />
        </>
      ) : null}
      {kind === "edit" ? (
        <>
          <path {...common} d="M4 20h4l10-10-4-4L4 16v4Z" />
          <path {...common} d="m12 6 4 4" />
        </>
      ) : null}
      {kind === "chat" ? (
        <>
          <path {...common} d="M5 6h14v9H9l-4 3V6Z" />
          <path {...common} d="M9 10h6" />
        </>
      ) : null}
      {kind === "layers" ? (
        <>
          <path {...common} d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path {...common} d="m4 12 8 4 8-4" />
          <path {...common} d="m4 16 8 4 8-4" />
        </>
      ) : null}
      {kind === "target" ? (
        <>
          <circle {...common} cx="12" cy="12" r="7" />
          <circle {...common} cx="12" cy="12" r="3" />
          <path {...common} d="m16 8 4-4" />
        </>
      ) : null}
      {kind === "chart" ? (
        <>
          <path {...common} d="M5 19V9" />
          <path {...common} d="M12 19V5" />
          <path {...common} d="M19 19v-7" />
        </>
      ) : null}
      {kind === "shield" ? (
        <>
          <path {...common} d="M12 4 6 6.5v5.6c0 3.6 2.3 6.8 6 7.9 3.7-1.1 6-4.3 6-7.9V6.5L12 4Z" />
        </>
      ) : null}
      {kind === "admin" ? (
        <>
          <path {...common} d="M7 7h10v10H7z" />
          <path {...common} d="M9 11h6M9 14h4" />
        </>
      ) : null}
      {kind === "followup" ? (
        <>
          <path {...common} d="M12 7a5 5 0 1 0 5 5" />
          <path {...common} d="M17 5v5h-5" />
        </>
      ) : null}
      {kind === "refresh" ? (
        <>
          <path {...common} d="M7 7h4V3" />
          <path {...common} d="M17 17h-4v4" />
          <path {...common} d="M7 7a7 7 0 0 1 10 2" />
          <path {...common} d="M17 17a7 7 0 0 1-10-2" />
        </>
      ) : null}
      {kind === "whatsapp" ? (
        <>
          <circle {...common} cx="12" cy="12" r="8" />
          <path {...common} d="M9.5 16c3.5 0 6-2.2 6.5-5.7-.4-.8-1-1.2-1.7-1.2-.4 0-.7.2-.9.5l-.6 1c-.3.1-1.2-.5-2-1.3-.8-.8-1.4-1.7-1.3-2l1-.6c.3-.2.5-.5.5-.9 0-.7-.4-1.3-1.2-1.7C6.2 6 4 8.5 4 12c0 1.2.3 2.2.9 3.2L4 20l4.8-.9c.2 0 .4-.1.7-.1Z" />
        </>
      ) : null}
      {kind === "globe" ? (
        <>
          <circle {...common} cx="12" cy="12" r="8" />
          <path {...common} d="M4 12h16" />
          <path {...common} d="M12 4a12 12 0 0 1 0 16" />
          <path {...common} d="M12 4a12 12 0 0 0 0 16" />
        </>
      ) : null}
      {kind === "calendar" ? (
        <>
          <rect {...common} x="4" y="6" width="16" height="14" rx="2" />
          <path {...common} d="M8 4v4M16 4v4M4 10h16" />
        </>
      ) : null}
      {kind === "inbox" ? (
        <>
          <path {...common} d="M4 7h16v10H4z" />
          <path {...common} d="M4 14h5l2 3h2l2-3h5" />
        </>
      ) : null}
      {kind === "search" ? (
        <>
          <circle {...common} cx="11" cy="11" r="5" />
          <path {...common} d="m16 16 4 4" />
        </>
      ) : null}
      {kind === "rocket" ? (
        <>
          <path {...common} d="M14 5c3 0 5 2 5 5-2.5 2.5-6.5 5-11 7 2-4.5 4.5-8.5 7-11Z" />
          <path {...common} d="m10 14-3 3M9 8 6 11" />
        </>
      ) : null}
      {kind === "support" ? (
        <>
          <path {...common} d="M6 12a6 6 0 1 1 12 0" />
          <path {...common} d="M6 12v4M18 12v4" />
          <path {...common} d="M8 18h8" />
        </>
      ) : null}
      {kind === "document" ? (
        <>
          <path {...common} d="M7 4h7l3 3v13H7z" />
          <path {...common} d="M14 4v4h4M9 12h6M9 15h6" />
        </>
      ) : null}
      {kind === "spark" ? (
        <>
          <path {...common} d="m12 4 1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5L12 4Z" />
        </>
      ) : null}
    </svg>
  );
}
