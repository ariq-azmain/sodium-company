"use client";

import { Tilt } from "react-tilt";
import Card from "@/components/Card";
import { cardsData } from "@/constant";

/**
 * ROOT CAUSE of the overflow/shadow clipping bug:
 * globals.css has `* { overflow-x: hidden; }` which applies to EVERY element,
 * including Tilt's internally generated wrapper divs.
 * This clips the hover box-shadow on the card.
 *
 * FIX: We force `overflow: visible !important` via inline style on:
 *   1. The Tilt component wrapper itself
 *   2. The inner div we control
 *
 * Tilt renders: <div [our className]> → <div [tilt inner]> → {children}
 * We can only control the outer div, but passing style directly to Tilt
 * also sets it on its internal wrapper.
 *
 * We also use `isolation: isolate` + `z-index` on the grid cell so the
 * hovered card's glow renders above sibling cards without stacking issues.
 * cubic-bezier(.03,.98,.52,.99)
 */

const TILT_OPTIONS = {
  reverse: false,
  max: 50,
  perspective: 540,
  scale: 1.09,        // NO scale — prevents layout shift
  speed: 250,
  transition: true,
  axis: null,
  reset: true,
  easing: "linear",
};

// Force overflow visible — overrides `* { overflow-x: hidden }` in globals.css
const OVERFLOW_VISIBLE: React.CSSProperties = {
  overflow: "visible",
  overflowX: "visible",
  overflowY: "visible",
};

const Cards = () => {
  return (
    <section className="">
      <div className="container !px-[55px] !w-[100vw]">
        {cardsData.map((section) => (
          <div key={section.id} className="!mb-16 w-[100% !overflow-visible"
          id={section.id}>

            {/* Section heading */}
            <h2 className="text-4xl font-bold text-center !mb-8 text-[var(--purple)]">
              {section.title}
            </h2>

            {/*
             * Grid wrapper:
             * - `overflow-visible` forced via style to bypass the `*` selector
             * - Each cell gets `hover:z-10` so the glowing card lifts above siblings
             */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              style={OVERFLOW_VISIBLE}
            >
              {section.cards.map((card, index) => (
                <div
                  key={index}
                  className="relative hover:z-10"
                  style={OVERFLOW_VISIBLE}
                >
                  {/*
                   * Tilt wrapper:
                   * - `style` is applied to Tilt's outer div AND forwarded to its
                   *   internal perspective wrapper, overriding the `*` rule.
                   * - `className` controls sizing: w-full so the grid governs width.
                   */}
                  <Tilt
                    options={TILT_OPTIONS}
                    className="w-full"
                    style={{
                      ...OVERFLOW_VISIBLE,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Inner wrapper — also forced visible */}
                    <div style={OVERFLOW_VISIBLE} className="h-full">
                      <Card title={card.title} description={card.description} />
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
