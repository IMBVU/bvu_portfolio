import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Film, Gamepad, Palette, } from 'lucide-react';

interface HobbiesOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const hobbies = [
  {
    title: 'Volleyball',
    description:
      'Played volleyball for 5+ years as a Setter and Opposite Pin',
    icon: ,
    image:
      'https://i.postimg.cc/br1y16dB/beach-volleyball-6483905-1280.jpg',
  },
  {
    title: 'Videography',
    description: 'Creating cinematic experiences and dynamic visual content',
    icon: ,
    image:
      'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Pickleball',
    description: 'Facinated in learning and mastering pickleball ',
    icon: ,
    image:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Bartending/Barista',
    description:
      'Creating tasty and stunning mixed drinks and soft beverages ',
    icon: ,
    image:
      'https://images.unsplash.com/photo-1619410283995-43d9134e7656?auto=format&fit=crop&q=80&w=1000',
  },
];

export function HobbiesOverlay({ isOpen, onClose }: HobbiesOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[91]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-24 left-1/4 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[91] overflow-hidden"
          >
            <div className="relative max-h-[calc(100vh-8rem)] overflow-auto">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              <div className="p-6">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  My Hobbies
                </motion.h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                    >
                      <div className="absolute inset-0">
                        <img
                          src={hobby.image}
                          alt={hobby.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
                      </div>

                      <div className="relative p-4 h-full flex flex-col justify-end">
                        <div>
                          <hobby.icon className="w-6 h-6 text-white mb-2" />
                          <h3 className="text-lg font-bold text-white mb-1">
                            {hobby.title}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {hobby.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
