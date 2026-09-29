import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, MessageCircle, Maximize2, Minimize2 } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 30);
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
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF8FE]/95 backdrop-blur-xl shadow-sm border-b border-purple-100/70 py-2.5' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between">
          
          {/* Logo Brand: Obsidian Glowing Pill Badge */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center group focus:outline-none text-left"
            aria-label="CloutCraft Media Home"
          >
            <div className="bg-[#120826] px-4 py-2 rounded-2xl border border-purple-500/40 shadow-[0_4px_16px_rgba(124,58,237,0.3)] flex items-center group-hover:border-purple-400 group-hover:shadow-[0_4px_22px_rgba(124,58,237,0.45)] transition-all">
              <img 
                src={logoImg} 
                alt="CloutCraft Media" 
                className="h-6 sm:h-7 w-auto object-contain" 
              />
            </div>
          </button>

          {/* Desktop Nav Links: Elegant White Capsule Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/95 border border-purple-100/80 px-2 py-1.5 rounded-full shadow-[0_4px_20px_-2px_rgba(124,58,237,0.08)]">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-[#1E0B3C] text-white shadow-sm font-bold' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-purple-50/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-black ${
                      isActive ? 'bg-[#6320EE] text-white' : 'bg-[#6320EE] text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs Matching Mockup */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-sm flex items-center justify-center transition-all"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Mode"}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Mode"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4 text-purple-700" /> : <Maximize2 className="w-4 h-4 text-slate-700" />}
            </button>

            {/* WhatsApp Pill Button */}
            <a 
              href="https://wa.me/917276998119" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-bold text-slate-800 flex items-center gap-2 border border-slate-200/90 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Audit CTA Button */}
            <button 
              onClick={onOpenAudit}
              className="bg-[#17082E] hover:bg-[#240B48] text-white text-xs font-bold py-2.5 px-4 rounded-2xl border border-purple-500/40 shadow-[0_4px_16px_rgba(124,58,237,0.3)] flex items-center gap-2 transition-all hover:shadow-[0_6px_22px_rgba(124,58,237,0.45)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>Free 48h Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-xl px-4 py-6 mt-3 animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between ${
                    currentPath === item.path
                      ? 'bg-[#1E0B3C] text-white'
                      : 'text-slate-800 hover:bg-purple-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-[#6320EE] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 mt-2">
                <a 
                  href="https://wa.me/917276998119" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 rounded-xl border border-slate-200 bg-white text-slate-800 font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="w-full bg-[#17082E] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span>Claim Free 48h Audit</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-300" />
                </button>
              </div>
            </div>
          </div>
        )}

      </header>
    </>
  );
};
