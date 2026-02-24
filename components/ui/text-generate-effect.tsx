"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const controls = useAnimation();
  const wordsArray = words.split(" ");

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }));
  }, [controls]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                initial={{ opacity: 0, y: 10 }}
                animate={controls}
                custom={idx}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
