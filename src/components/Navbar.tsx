import { motion } from 'framer-motion';
import { Menu, X, FileText, Award } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useActiveSection } from '../hooks/useActiveSection';
import { cn } from '../utils/cn';

interface NavbarProps {
  onOpenCertifications: () => void;
}

export function Navbar({ onOpenCertifications }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#works' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-[90] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            B.VU
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const href = item.label === 'Projects' ? '#works' : item.href;
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <motion.a
                  key={item.label}
                  href={href}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={cn(
                    "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
                    isActive && "text-gray-900 dark:text-white"
                  )}>
                    {item.label}
                  </span>
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 dark:bg-white transform origin-left transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </motion.a>
              );
            })}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-4 h-4" />
              Resume
            </motion.a>
            <motion.button
              onClick={onOpenCertifications}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award className="w-4 h-4" />
              Certifications
            </motion.button>
            <Link
              to="/contact"
              className={cn(
                "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
                location.pathname === '/contact' && "text-gray-900 dark:text-white"
              )}
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => {
              const href = item.label === 'Projects' ? '#works' : item.href;
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={href}
                  className={cn(
                    "block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
                    isActive && "text-gray-900 dark:text-white font-medium"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <Link
              to="/contact"
              className={cn(
                "block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
                location.pathname === '/contact' && "text-gray-900 dark:text-white font-medium"
              )}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
            <button
              onClick={() => {
                onOpenCertifications();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Award className="w-4 h-4" />
              Certifications
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}