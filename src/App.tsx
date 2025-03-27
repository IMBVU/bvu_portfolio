import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { ThemeToggle } from './components/ThemeToggle';
import { BackToTop } from './components/BackToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { CertificationsTab } from './components/CertificationsTab';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { SoftwareDevelopmentPage } from './pages/SoftwareDevelopmentPage';
import { ContentCreationPage } from './pages/ContentCreationPage';
import { ThreeBarPage } from './pages/3BarPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <LoadingScreen isLoading={isLoading} />
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
          <CustomCursor />
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenCertifications={() => setIsCertificationsOpen(true)} 
                />
              } 
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
            <Route path="/content-creation" element={<ContentCreationPage />} />
            <Route path="/3bar" element={<ThreeBarPage />} />
          </Routes>
          <ThemeToggle />
          <BackToTop />
          <CertificationsTab 
            isOpen={isCertificationsOpen} 
            onClose={() => setIsCertificationsOpen(false)} 
          />
        </div>
      </ThemeProvider>
    </Router>
  );
}
