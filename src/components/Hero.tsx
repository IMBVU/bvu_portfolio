import { motion } from 'framer-motion';
import { ArrowRight, Camera, Film } from 'lucide-react';
import { HeroFeature } from './HeroFeature';
import { ParallaxSection } from './ParallaxSection';
import { useState } from 'react';
import { HobbiesOverlay } from './HobbiesOverlay';

export function Hero() {
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        <ParallaxSection
          speed={0.3}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 dark:to-black/20" />
        </ParallaxSection>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-500 dark:text-gray-400 mb-4"
              >
                • Data Analytics & Software Development
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[clamp(3rem,14vw,8rem)] font-bold text-gray-900 dark:text-white leading-none tracking-tight mb-8"
              >
                BRYAN
                <br />
                VU
                <span className="text-2xl align-top">®</span>
              </motion.h1>

              <ParallaxSection speed={0.2}>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-4xl font-medium text-gray-800 dark:text-gray-200 mb-8 max-w-md"
                >
                  Creating digital experiences through code and design
                </motion.h2>
              </ParallaxSection>

              <ParallaxSection speed={0.1}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-4 mb-12"
                >
                  <HeroFeature
                    icon={<Film className="w-5 h-5" />}
                    text="Videography"
                  />
                  <HeroFeature
                    icon={<Camera className="w-5 h-5" />}
                    text="Photography"
                  />
                  <HeroFeature icon="✨" text="My Business" />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="group flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsHobbiesOpen(true)}
                >
                  My Hobbies
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </ParallaxSection>
            </div>

            {/* Character Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full aspect-square">
                <img
                  src={"/src/bvu_offical PI.png"}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-full border-4 border-black/10 dark:border-white/10 animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full border border-black/5 dark:border-white/5"></div>
                <div className="absolute -inset-8 rounded-full border border-black/5 dark:border-white/5"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -top-8 right-12 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">⌨️</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -bottom-4 right-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center"
              >
                <span className="text-xl">🖥️</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 text-sm"
          >
            SCROLL DOWN
          </motion.div>
        </div>
      </section>

      <HobbiesOverlay
        isOpen={isHobbiesOpen}
        onClose={() => setIsHobbiesOpen(false)}
      />
    </>
  );
}
