import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { ScrollProvider } from '../components/ScrollProvider';

interface HomePageProps {
  onOpenCertifications: () => void;
}

export function HomePage({ onOpenCertifications }: HomePageProps) {
  return (
    <ScrollProvider>
      <Navbar onOpenCertifications={onOpenCertifications} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </ScrollProvider>
  );
}