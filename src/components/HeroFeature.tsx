import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroFeatureProps {
  icon: ReactNode;
  text: string;
}

export function HeroFeature({ icon, text }: HeroFeatureProps) {
  return (
    <motion.div 
      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-xl">{typeof icon === 'string' ? icon : icon}</span>
      <span className="text-sm">{text}</span>
    </motion.div>
  );
}