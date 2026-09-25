import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { AuditBookingModal } from './components/AuditBookingModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditContext, setAuditContext] = useState<string>('');

  const handleOpenAudit = (context: string = '') => {
    setAuditContext(context);
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
    setAuditContext('');
  };

  const renderActivePage = () => {
    switch (currentPath) {
      case '/services':
        return <ServicesPage onOpenAudit={(service) => handleOpenAudit(`Service: ${service}`)} />;
      case '/case-studies':
        return <CaseStudiesPage onOpenAudit={(ctx) => handleOpenAudit(ctx)} />;
      case '/calculator':
        return <CalculatorPage onOpenAudit={(summary) => handleOpenAudit(summary)} />;
      case '/about':
        return <AboutPage onOpenAudit={() => handleOpenAudit('About Page Strategy Session')} />;
      case '/contact':
        return <ContactPage />;
      case '/admin':
        return <AdminPage />;
      case '/':
      default:
        return <HomePage onOpenAudit={(ctx) => handleOpenAudit(ctx)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink relative">
      {/* Top Multi-Page Navigation */}
      <Navbar onOpenAudit={() => handleOpenAudit('Global Nav Free 48h Audit')} />

      {/* Dynamic Route View */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Multi-Page Footer */}
      <Footer onOpenAudit={() => handleOpenAudit('Global Footer Free 48h Audit')} />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloat />

      {/* Interactive Growth Audit Modal (Triggerable anywhere) */}
      <AuditBookingModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAudit}
        initialContext={auditContext}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
};

export default App;
