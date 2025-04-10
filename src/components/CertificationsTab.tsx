import { motion } from 'framer-motion';
import { Award, X } from 'lucide-react';

interface CertificationsTabProps {
  isOpen: boolean;
  onClose: () => void;
}

const certifications = [
  {
    title: "Coursera IBM Full-Stack Developer",
    issuer: "Coursera",
    date: "2024",
    credentialId: "MTMQTXZH0ERQ"
  },
  {
    title: "Data Camp Data Analyst",
    issuer: "Data Camp",
    date: "2025",
    credentialId: "DA0020503026302"
  },
];

export function CertificationsTab({ isOpen, onClose }: CertificationsTabProps) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0.5 : 0 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className={`fixed inset-0 bg-black z-40 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      />

      {/* Tab */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed right-0 top-20 h-[calc(100%-5rem)] w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl z-50"
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <Award className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {cert.date}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
