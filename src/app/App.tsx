import { useState, useEffect } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { AppsShowcase } from '@/app/components/AppsShowcase';
import { Features } from '@/app/components/Features';
import { Footer } from '@/app/components/Footer';
import { PrivacyPolicy } from '@/app/components/PrivacyPolicy';
import { TermsOfService } from '@/app/components/TermsOfService';

type Page = 'home' | 'privacy' | 'terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle navigation
  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set up link click handlers
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link) {
        const href = link.getAttribute('href');
        if (href === '/privacy') {
          e.preventDefault();
          handleNavigation('privacy');
        } else if (href === '/terms') {
          e.preventDefault();
          handleNavigation('terms');
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => handleNavigation('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => handleNavigation('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AppsShowcase />
        <Features />
      </main>
      <Footer />
    </div>
  );
}