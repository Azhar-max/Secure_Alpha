import { useState, useEffect, MouseEvent } from 'react';
import { BRAND_LOGO_URL } from '../data/content';
import { Menu, X, Terminal, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenProjectModal: () => void;
  onOpenAssessment: () => void;
  onOpenResources: () => void;
  activeSection: string;
}

export default function Navbar({
  onOpenProjectModal,
  onOpenAssessment,
  onOpenResources,
  activeSection
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'engineering', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'academy', label: 'Alpha Academy' },
    { id: 'courses', label: 'Courses' },
    { id: 'learning-paths', label: 'Learning Paths' },
    { id: 'assessment', label: 'Skills Assessment' },
    { id: 'resources', label: 'Resources', isModal: true },
    { id: 'verification', label: 'Verification' },
    { id: 'contact', label: 'Contact', isModal: true }
  ];

  const handleNavClick = (link: { id: string; label: string; isModal?: boolean }, e: MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.id === 'resources') {
      onOpenResources();
      return;
    }
    if (link.id === 'contact') {
      onOpenProjectModal();
      return;
    }
    if (link.id === 'assessment') {
      onOpenAssessment();
    }

    const element = document.getElementById(link.id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#0d1b33]/95 backdrop-blur-xl border-b border-[#3c4a46]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
        : 'bg-[#0d1b33]/90 backdrop-blur-md border-b border-[#3c4a46]/20'
    }`}>
      {/* Topmost Telemetry Stream Bar */}
      <div className="w-full bg-[#010e25] px-4 sm:px-6 py-1 border-b border-[#3c4a46]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-label-code text-xs text-[#85948f]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 cursor-pointer relative" onClick={() => setShowStatusTooltip(!showStatusTooltip)}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#42dec3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#42dec3]"></span>
              </span>
              <span className="text-[#42dec3] font-semibold tracking-wider">SYSTEM: OPERATIONAL</span>
              <span className="text-[#3c4a46]">|</span>
              <span className="text-[#bbcac4] hidden sm:inline">99.99% UPTIME</span>
            </div>
            <span className="hidden lg:inline-flex text-[#3c4a46]">/</span>
            <div className="hidden lg:flex items-center gap-1 text-[#b6c7ec]">
              <span className="text-[#85948f]">REGION:</span>
              <span className="text-[#42dec3]">US-EAST-01 [ACTIVE]</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1 text-[#bbcac4]">
              <span className="text-[#7fd1ff]">ECOSYSTEM:</span>
              <span className="text-[#d7e3ff]">SECURE_ALPHA_v4.8.2</span>
            </div>
            <div className="flex items-center gap-1 bg-[#112037] px-2 py-0.5 rounded border border-[#3c4a46]/40">
              <span className="text-[#42dec3]">SOC-2 TYPE II</span>
              <span className="text-[#3c4a46]">::</span>
              <span className="text-[#bbcac4]">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Group */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center">
              <img 
                src={BRAND_LOGO_URL} 
                alt="Secure Alpha Logo" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback geometric logo if remote image is blocked
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = document.getElementById('brand-logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="brand-logo-fallback" style={{ display: 'none' }} className="w-9 h-9 rounded-lg bg-[#112037] border border-[#42dec3]/50 items-center justify-center text-[#42dec3]">
                <Shield className="w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-headline-sm text-base sm:text-lg text-[#d7e3ff] tracking-tight font-bold leading-tight group-hover:text-[#42dec3] transition-colors">
                SECURE ALPHA
              </span>
              <span className="font-label-code text-[10px] sm:text-xs text-[#42dec3] tracking-widest leading-none">
                ENGINEERING & ACADEMY
              </span>
            </div>
          </a>

          {/* Dual Identity Badge */}
          <div className="hidden xl:flex items-center gap-1.5 bg-[#27354d]/50 px-2.5 py-1 rounded-md border border-[#3c4a46]/40 text-[11px] font-label-code">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#0d1b33] text-[#42dec3] font-bold">
              <span>SECURE ALPHA</span>
              <span className="text-[#85948f]">[ENG]</span>
            </div>
            <span className="text-[#3c4a46]">::</span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#0d1b33] text-[#7fd1ff] font-bold">
              <span>ALPHA ACADEMY</span>
              <span className="text-[#85948f]">[LRN]</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(link, e)}
                className={`px-2.5 py-1.5 rounded text-sm transition-all duration-150 ${
                  isActive 
                    ? 'bg-[#1c2a42] text-[#42dec3] font-semibold border border-[#42dec3]/30 shadow-[0_0_12px_rgba(66,222,195,0.15)]' 
                    : 'text-[#bbcac4] hover:text-[#d7e3ff] hover:bg-[#112037]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Header Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenAssessment}
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-md bg-[#112037] text-[#42dec3] hover:bg-[#1c2a42] hover:text-[#65fade] font-label-code text-xs border border-[#42dec3]/30 transition-all cursor-pointer"
          >
            &lt;Take Assessment /&gt;
          </button>

          <button
            onClick={onOpenProjectModal}
            className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-md bg-[#00c2a8] text-[#00382f] hover:bg-[#42dec3] font-semibold text-xs sm:text-sm transition-all shadow-[0_0_14px_rgba(0,194,168,0.3)] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* User / Telemetry Node status avatar */}
          <button 
            onClick={() => onOpenResources()}
            title="Session Telemetry & Documents"
            className="w-8 h-8 rounded-full bg-[#112037] border border-[#42dec3]/40 flex items-center justify-center text-[#42dec3] hover:border-[#42dec3] transition-colors cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-[#112037] text-[#d7e3ff] hover:text-[#42dec3] border border-[#3c4a46]/50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1b33] border-b border-[#3c4a46]/50 px-4 py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-[#3c4a46]/30 text-xs font-label-code text-[#42dec3]">
            <span>NAVIGATION MATRIX</span>
            <span className="text-[#85948f]">PORTAL v4.8.2</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(link, e)}
                className="px-3 py-2 rounded text-sm text-[#bbcac4] hover:text-[#42dec3] hover:bg-[#112037] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-label-code text-xs text-[#85948f]">&gt;</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#3c4a46]/30 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAssessment(); }}
              className="w-full py-2 rounded bg-[#112037] text-[#42dec3] border border-[#42dec3]/30 font-label-code text-xs text-center font-semibold"
            >
              &lt;Take Assessment /&gt;
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenProjectModal(); }}
              className="w-full py-2 rounded bg-[#00c2a8] text-[#00382f] font-semibold text-sm text-center"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
