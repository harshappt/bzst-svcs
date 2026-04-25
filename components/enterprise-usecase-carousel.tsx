"use client";

import { useRef } from "react";

type EnterpriseUseCase = {
  title: string;
  body: string;
};

export function EnterpriseUseCaseCarousel({ items }: { items: EnterpriseUseCase[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByPage = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const distance = Math.max(track.clientWidth * 0.82, 280);
    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="usecase-carousel">
      <div className="usecase-carousel-head">
        <p className="usecase-carousel-kicker">Representative workflows</p>
        <div className="usecase-carousel-controls">
          <button
            type="button"
            className="usecase-carousel-button"
            aria-label="Previous enterprise use cases"
            onClick={() => scrollByPage("prev")}
          >
            ←
          </button>
          <button
            type="button"
            className="usecase-carousel-button"
            aria-label="Next enterprise use cases"
            onClick={() => scrollByPage("next")}
          >
            →
          </button>
        </div>
      </div>

      <div className="usecase-carousel-track" ref={trackRef}>
        {items.map((item, index) => (
          <article key={item.title} className="usecase-carousel-card help-card">
            <span className="usecase-carousel-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
