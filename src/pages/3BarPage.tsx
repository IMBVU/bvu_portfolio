import { motion } from 'framer-motion';
import { ArrowLeft, Code, Database, Globe, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Business Intelligence",
    description: "Advanced analytics and reporting for data-driven decisions",
    icon: Database,
    color: "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10"
  },
  {
    title: "Workflow Automation",
    description: "Streamlined processes and automated task management",
    icon: Server,
    color: "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10"
  },
  {
    title: "Integration Solutions",
    description: "Seamless connectivity with existing business systems",
    icon: Globe,
    color: "from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10"
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions for specific business needs",
    icon: Code,
    color: "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10"
  }
];

export function ThreeBarPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            3Bar LLC Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Comprehensive business solutions designed to streamline operations, enhance productivity, 
            and drive growth through innovative technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative h-[280px] rounded-3xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-50`} />
              <div className="absolute inset-0 backdrop-blur-[2px]" />
              
              <div className="relative h-full p-8 flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="h-1 w-12 bg-gray-900 dark:bg-white transform origin-left transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
