import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8
      }}
    >
      {children}
    </motion.div>
  );
}