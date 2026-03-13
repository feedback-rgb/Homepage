import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { AppsShowcase } from '@/app/components/AppsShowcase';
import { Features } from '@/app/components/Features';
import { Footer } from '@/app/components/Footer';
import { PrivacyPolicy } from '@/app/components/PrivacyPolicy';
import { TermsOfService } from '@/app/components/TermsOfService';

function HomePage() {
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

function PrivacyPage() {
  const navigate = useNavigate();
  return <PrivacyPolicy onBack={() => navigate('/')} />;
}

function TermsPage() {
  const navigate = useNavigate();
  return <TermsOfService onBack={() => navigate('/')} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}