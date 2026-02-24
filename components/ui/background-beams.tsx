"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full bg-background animate-breathing-gradient bg-[length:400%_400%] bg-gradient-to-br from-background via-steel-900/20 to-background",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-[40rem] bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </div>
  );
};
