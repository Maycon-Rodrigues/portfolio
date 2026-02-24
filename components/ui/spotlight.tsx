import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter0_f_29_29)">
        <path
          fill={fill || "white"}
          fillOpacity="0.21"
          d="M3089 1230.13L1539.12 2841.83C1539.12 2841.83 1761.64 2697.55 1863.63 2603.56C1986.6 2490.23 2342.34 1860.29 2383.95 1746.46L3174.45 801.378C3205.15 729.8 3231.85 640.73 3192.11 582.43C3152.34 524.12 3060.05 528.94 3004.85 558.17C2949.66 587.39 2831.63 762.66 2831.63 762.66L1767.14 1876.2L1279.79 380.12C1279.79 380.12 1228.31 161.94 1046.85 159.26C865.38 156.58 759.54 361.34 759.54 361.34L981.67 1109.95L825.8 1785.49L72.2 2489.8L3089 1230.13Z"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_29_29"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.99"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_29_29"
          />
        </filter>
      </defs>
    </svg>
  );
};
