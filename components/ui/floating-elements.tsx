"use client";

import { cn } from "@/lib/utils";

interface FloatingShape {
  type: "ring" | "sphere" | "blob" | "cross";
  size: number;
  className?: string;
}

function MetallicRing({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="url(#ringGrad)"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

function GlowSphere({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
    >
      <defs>
        <radialGradient id="sphereGrad" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#sphereGrad)" />
    </svg>
  );
}

function AbstractBlob({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,72.7,41.3C64,53.6,52.2,63.8,38.8,71.1C25.5,78.4,10.7,82.8,-3.4,82.1C-17.5,81.4,-30.9,75.5,-43.2,67.5C-55.5,59.5,-66.7,49.4,-74.3,36.8C-81.9,24.2,-85.9,9.1,-84.2,-5.1C-82.5,-19.3,-75.2,-32.6,-65.3,-43.1C-55.4,-53.6,-42.9,-61.3,-30,-65.5C-17.1,-69.7,-3.8,-70.4,10.3,-72.9C24.4,-75.4,30.6,-83.6,44.7,-76.4Z"
        transform="translate(100 100)"
        fill="url(#blobGrad)"
      />
    </svg>
  );
}

function CrossShape({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#64748b" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect x="42" y="10" width="16" height="80" rx="4" fill="url(#crossGrad)" />
      <rect x="10" y="42" width="80" height="16" rx="4" fill="url(#crossGrad)" />
    </svg>
  );
}

const shapeComponents = {
  ring: MetallicRing,
  sphere: GlowSphere,
  blob: AbstractBlob,
  cross: CrossShape,
};

interface FloatingElementsProps {
  shapes: Array<{
    type: keyof typeof shapeComponents;
    size: number;
    position: string;
    animation: string;
    delay?: string;
  }>;
}

export function FloatingElements({ shapes }: FloatingElementsProps) {
  return (
    <>
      {shapes.map((shape, i) => {
        const ShapeComponent = shapeComponents[shape.type];
        return (
          <div
            key={i}
            className={cn(
              "absolute pointer-events-none motion-reduce:animate-none",
              shape.position,
              shape.animation
            )}
            style={shape.delay ? { animationDelay: shape.delay } : undefined}
          >
            <ShapeComponent size={shape.size} />
          </div>
        );
      })}
    </>
  );
}
