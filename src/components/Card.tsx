"use client";

export interface CardProps {
  title: string;
  description: string;
}

/**
 * Card component
 *
 * Shadow/glow is handled by the `.card` class in globals.css:
 *   .card:hover { box-shadow: 0 0 35px var(--purple), 0 0 60px var(--blue); }
 *
 * The glow will be visible because Cards.tsx forces overflow:visible
 * on all Tilt ancestor wrappers using an inline style override.
 * We do NOT add overflow:hidden anywhere inside the card itself.
 */
const Card = ({ title, description }: CardProps) => {
  return (
    <div
      className="
        relative flex flex-col gap-3
        rounded-2xl !p-6
        border border-[var(--glass-border)]
        bg-[var(--glass)]
        backdrop-blur-[15px]
        w-full h-full
        card
      "
    >
      <h3 className="text-white font-semibold text-lg leading-snug tracking-tight">
        {title}
      </h3>

      <p className="text-[#ddd] text-sm font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
