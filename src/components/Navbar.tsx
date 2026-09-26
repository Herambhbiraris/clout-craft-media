import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Phone, MessageCircle, Maximize2, Minimize2 } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies', badge: 'Vault' },
    { label: 'ROI Calculator', path: '/calculator' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-panel-dark z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b-2 border-line ${
          isScrolled 
            ? 'bg-bg/95 backdrop-blur-md shadow-brutal-sm py-3' 
            : 'bg-bg py-4'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 group focus:outline-none text-left"
            aria-label="CloutCraft Media Home"
          >
            <div className="bg-panel-dark px-3 py-1.5 rounded-lg border-2 border-line shadow-brutal-sm group-hover:-rotate-2 transition-transform duration-150">
              <img 
                src={logoImg} 
                alt="CloutCraft Media" 
                className="h-6 sm:h-7 w-auto object-contain filter brightness-110" 
              />
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-paper/90 border-2 border-line px-2.5 py-1.5 rounded-full shadow-brutal-sm">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-panel-dark text-paper shadow-brutal-sm font-black' 
                      : 'text-ink hover:text-brand hover:bg-panel-1'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-accent-emerald text-ink' : 'bg-brand text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg border-2 border-line bg-paper shadow-brutal-sm text-ink hover:text-brand hover:bg-panel-1 transition-all"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Mode"}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Mode"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4 text-brand" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <a 
              href="https://wa.me/917276998119" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-mono font-bold text-ink hover:text-brand flex items-center gap-1.5 border-2 border-line px-3 py-2 rounded-lg bg-paper shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
            >
              <MessageCircle className="w-3.5 h-3.5 text-accent-emerald" />
              <span>WhatsApp</span>
            </a>

            <button 
              onClick={onOpenAudit}
              className="brutal-btn-primary text-xs py-2 px-4 shadow-brutal-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Free 48h Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Fullscreen */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg border-2 border-line bg-paper shadow-brutal-sm text-ink"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5 text-brand" /> : <Maximize2 className="w-5 h-5" />}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border-2 border-line bg-paper shadow-brutal-sm text-ink focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 mx-4 p-4 rounded-xl border-2 border-line bg-paper shadow-brutal space-y-3">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`text-left font-bold px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-panel-dark text-paper font-black' 
                        : 'text-ink hover:bg-panel-1'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="bg-brand text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t-2 border-line/30 flex flex-col gap-2">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="brutal-btn-primary w-full text-center text-sm py-3 justify-center"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Claim Free 48h Growth Audit</span>
              </button>
              
              <a 
                href="https://wa.me/917276998119" 
                target="_blank" 
                rel="noopener noreferrer"
                className="brutal-btn-secondary w-full text-center text-sm py-2.5 justify-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp (+91 72769 98119)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
