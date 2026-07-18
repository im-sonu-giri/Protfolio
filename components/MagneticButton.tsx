"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"button"> & {
  strength?: number;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
};

/**
 * Wraps its content in a magnetic hover effect: the button subtly follows
 * the cursor within its bounds, then eases back to rest on mouse leave.
 * Strength is kept low (0.3–0.4) so it reads as tactile, not gimmicky.
 *
 * `onHoverStart` / `onHoverEnd` let parent components layer additional
 * animations (glow, sweep, etc.) on top of the magnetic translate without
 * fighting it — GSAP composes separate transform properties automatically.
 */
export const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      strength = 0.35,
      onHoverStart,
      onHoverEnd,
      onMouseMove: onMouseMoveProp,
      onMouseLeave: onMouseLeaveProp,
      ...props
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => internalRef.current!);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = internalRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
      });

      onMouseMoveProp?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      gsap.to(internalRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });

      onMouseLeaveProp?.(e);
      onHoverEnd?.();
    };

    return (
      <button
        ref={internalRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={onHoverStart}
        className={cn("inline-block will-change-transform", className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

MagneticButton.displayName = "MagneticButton";
