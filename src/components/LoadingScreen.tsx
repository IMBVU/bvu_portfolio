import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [playSound] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', {
    volume: 0.5
  });

  return (
    <AnimatePresence
      onEnter={() => {
        playSound();
      }}
    >
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              className="text-6xl md:text-8xl font-bold text-center"
            >
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-gray-900 dark:text-white"
              >
                B
              </motion.span>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block text-gray-900 dark:text-white"
              >
                V
              </motion.span>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-block text-gray-900 dark:text-white"
              >
                U
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-4 left-0 right-0 h-1 bg-black dark:bg-white origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}