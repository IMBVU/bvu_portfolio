import { motion } from 'framer-motion';
import { Globe, Palette, Camera, Film } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Creating responsive and modern websites with cutting-edge technologies",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10"
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces that delight users",
    icon: Palette,
    color: "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10"
  },
  {
    title: "Photography",
    description: "Professional photo shoots and post-processing for stunning visuals",
    icon: Camera,
    color: "from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10"
  },
  {
    title: "Videography",
    description: "High-quality video production and cinematic post-processing",
    icon: Film,
    color: "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10"
  }
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive creative solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[280px] rounded-3xl overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50`} />
              
              {/* Glass Effect */}
              <div className="absolute inset-0 backdrop-blur-[2px]" />
              
              {/* Content */}
              <div className="relative h-full p-8 flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                </div>
                
                {/* Hover Effect */}
                <div className="mt-auto">
                  <div className="h-1 w-12 bg-gray-900 dark:bg-white transform origin-left transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}