
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] as const }
};

export const staggerContainer = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }
};

export const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { type: "spring", damping: 25, stiffness: 120 }
};

export const textReveal = {
  initial: { y: "100%" },
  animate: { y: 0 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
};
