'use client';

// Import specific motion components you need
import { 
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m 
} from 'framer-motion';

// Export them individually
export {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m
};

// Or create specific component exports
export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionP = motion.p;
export const MotionButton = motion.button;