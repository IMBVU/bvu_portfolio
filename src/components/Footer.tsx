import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { KaggleIcon } from './KaggleIcon';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: KaggleIcon, href: "https://kaggle.com", label: "Kaggle" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 block">
              B.VU
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Creating digital experiences through code and design. Let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-col items-end justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} B.VU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}