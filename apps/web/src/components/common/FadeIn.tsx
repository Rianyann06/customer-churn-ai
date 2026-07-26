import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right" | "up";
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const variants = {
    left: {
      opacity: 0,
      x: -40,
    },
    right: {
      opacity: 0,
      x: 40,
    },
    up: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}