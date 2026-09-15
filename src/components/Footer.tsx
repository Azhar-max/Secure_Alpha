import { Terminal, GraduationCap, ShieldCheck, ExternalLink, Hash, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenProjectModal: () => void;
  onOpenResources: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({
  onOpenProjectModal,
  onOpenResources,
  onNavigateSection
}: FooterProps) {
  return (
    <footer className="w-full bg-[#010e25] text-[#d7e3ff] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12">
        {/* Top Dual Brand Overview Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 bg-[#0d1b33] p-6 sm:p-8 rounded-xl border border-[#3c4a46]/40 shadow-xl">
          {/* Left: Software House */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-[#42dec3]"></span>
                <span className="font-label-code text-xs text-[#42dec3] uppercase tracking-wider font-semibold">
                  Secure Alpha :: Software House
                </span>
              </div>
              <div className="font-headline-md text-lg sm:text-xl text-[#d7e3ff] font-semibold tracking-tight">
                Build. Test. Secure. Scale.
              </div>
              <p className="text-body-md text-xs sm:text-sm text-[#bbcac4] max-w-lg leading-relaxed">
                High-assurance software engineering, zero-trust cloud infrastructure, and mission-critical enterprise platforms engineered to resist active threat environments.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-label-code text-xs text-[#b6c7ec] pt-2">
              <span className="text-[#85948f]">CORE:</span>
              <span>DISTRIBUTED SYSTEMS</span>
              <span className="text-[#3c4a46]">|</span>
              <span>SEC-OPS</span>
              <span className="text-[#3c4a46]">|</span>
              <span>AUDIT</span>
            </div>
          </div>

          {/* Right: Academy */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-[#7fd1ff]"></span>
                <span className="font-label-code text-xs text-[#7fd1ff] uppercase tracking-wider font-semibold">
                  Alpha Academy :: Education Division
                </span>
              </div>
              <div className="font-headline-md text-lg sm:text-xl text-[#d7e3ff] font-semibold tracking-tight">
                Learn. Build. Master.
              </div>
              <p className="text-body-md text-xs sm:text-sm text-[#bbcac4] max-w-lg leading-relaxed">
                Enterprise workforce readiness, deep-tier cybersecurity curriculums, and validated engineering pathways forged for security architects and elite technical contributors.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-label-code text-xs text-[#b6c7ec] pt-2">
              <span className="text-[#85948f]">TRACKS:</span>
              <span>OFFENSIVE SECURITY</span>
              <span className="text-[#3c4a46]">|</span>
              <span>DEV-SECOPS</span>
              <span className="text-[#3c4a46]">|</span>
              <span>CRYPTOGRAPHY</span>
            </div>
          </div>
        </div>

        {/* Central Quote Bar */}
        <div className="py-4 px-5 bg-[#1c2a42] rounded-lg my-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#7fd1ff]/20">
          <div className="flex items-center gap-3 text-center md:text-left">
            <ShieldCheck className="w-5 h-5 text-[#42dec3] shrink-0" />
            <p className="font-label-code text-xs sm:text-sm text-[#d7e3ff] font-medium">
              “Secure Alpha builds technology. Alpha Academy builds the people who understand it.”
            </p>
          </div>
          <button
            onClick={() => onNavigateSection('verification')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#010e25] text-[#42dec3] hover:bg-[#112037] font-label-code text-xs border border-[#42dec3]/30 transition-colors shrink-0 cursor-pointer"
          >
            <span>/verify-certificate</span>
            <CheckCircle2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8 border-b border-[#3c4a46]/30">
          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 font-label-code text-xs text-[#42dec3] font-semibold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              <span>1.0 Engineering</span>
            </div>
            <div className="flex flex-col gap-2 text-xs text-[#bbcac4]">
              <a href="#engineering" onClick={(e) => { e.preventDefault(); onNavigateSection('engineering'); }} className="hover:text-[#42dec3] transition-colors">Custom Software Dev</a>
              <a href="#engineering" onClick={(e) => { e.preventDefault(); onNavigateSection('engineering'); }} className="hover:text-[#42dec3] transition-colors">Cloud Native Architecture</a>
              <a href="#engineering" onClick={(e) => { e.preventDefault(); onNavigateSection('engineering'); }} className="hover:text-[#42dec3] transition-colors">Zero-Trust Integration</a>
              <a href="#engineering" onClick={(e) => { e.preventDefault(); onNavigateSection('engineering'); }} className="hover:text-[#42dec3] transition-colors">Penetration Testing</a>
              <a href="#portfolio" onClick={(e) => { e.preventDefault(); onNavigateSection('portfolio'); }} className="hover:text-[#42dec3] transition-colors">Enterprise Case Studies</a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 font-label-code text-xs text-[#7fd1ff] font-semibold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>2.0 Academy</span>
            </div>
            <div className="flex flex-col gap-2 text-xs text-[#bbcac4]">
              <a href="#courses" onClick={(e) => { e.preventDefault(); onNavigateSection('courses'); }} className="hover:text-[#7fd1ff] transition-colors">All Technical Courses</a>
              <a href="#learning-paths" onClick={(e) => { e.preventDefault(); onNavigateSection('learning-paths'); }} className="hover:text-[#7fd1ff] transition-colors">Role Learning Paths</a>
              <a href="#assessment" onClick={(e) => { e.preventDefault(); onNavigateSection('assessment'); }} className="hover:text-[#7fd1ff] transition-colors">Diagnostic Assessment</a>
              <a href="#academy" onClick={(e) => { e.preventDefault(); onNavigateSection('academy'); }} className="hover:text-[#7fd1ff] transition-colors">Enterprise Cohorts</a>
              <a href="#verification" onClick={(e) => { e.preventDefault(); onNavigateSection('verification'); }} className="hover:text-[#7fd1ff] transition-colors">Credential Ledger</a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 font-label-code text-xs text-[#d7e3ff] font-semibold uppercase tracking-wider">
              <Hash className="w-3.5 h-3.5 text-[#42dec3]" />
              <span>3.0 Resources</span>
            </div>
            <div className="flex flex-col gap-2 text-xs text-[#bbcac4]">
              <button onClick={onOpenResources} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Threat Intelligence Docs</button>
              <button onClick={onOpenResources} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Architecture Blueprints</button>
              <button onClick={onOpenResources} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Academy Research Papers</button>
              <button onClick={onOpenResources} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Public API Reference</button>
              <button onClick={onOpenResources} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Engineering Blog</button>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 font-label-code text-xs text-[#d7e3ff] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7fd1ff]" />
              <span>4.0 Compliance</span>
            </div>
            <div className="flex flex-col gap-2 text-xs text-[#bbcac4]">
              <a href="#verification" onClick={(e) => { e.preventDefault(); onNavigateSection('verification'); }} className="hover:text-[#d7e3ff] transition-colors">Certificate Lookup</a>
              <button onClick={onOpenResources} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">SOC-2 Compliance Report</button>
              <button onClick={onOpenResources} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">ISO/IEC 27001 Stance</button>
              <button onClick={onOpenProjectModal} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Responsible Disclosure</button>
              <button onClick={onOpenResources} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Privacy & Data Ethics</button>
            </div>
          </div>

          {/* Col 5 */}
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 font-label-code text-xs text-[#d7e3ff] font-semibold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-[#42dec3]" />
              <span>5.0 Enterprise</span>
            </div>
            <div className="flex flex-col gap-2 text-xs text-[#bbcac4]">
              <button onClick={onOpenProjectModal} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Schedule Briefing</button>
              <button onClick={onOpenProjectModal} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">CISO Advisory Desk</button>
              <button onClick={onOpenProjectModal} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Custom Academy Labs</button>
              <button onClick={onOpenProjectModal} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Government Procurement</button>
              <button onClick={onOpenProjectModal} className="text-left hover:text-[#d7e3ff] transition-colors cursor-pointer">Partner Network</button>
            </div>
          </div>
        </div>

        {/* Git & Operational Build Status Row */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-[#85948f] font-label-code text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#42dec3]"></span>
              <span>GIT REPO: main@f89d41c</span>
            </div>
            <span className="text-[#3c4a46]">|</span>
            <div><span>SOC-2 TYPE II: READY</span></div>
            <span className="text-[#3c4a46]">|</span>
            <div><span>ISO 27001: COMPLIANT</span></div>
            <span className="text-[#3c4a46]">|</span>
            <div><span>BUILD: #2024.11.08</span></div>
          </div>

          <div className="flex items-center gap-4 text-[#bbcac4]">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#42dec3] transition-colors">[ GITHUB ]</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#42dec3] transition-colors">[ LINKEDIN ]</a>
            <a href="https://matrix.org" target="_blank" rel="noreferrer" className="hover:text-[#42dec3] transition-colors">[ MATRIX ]</a>
            <a href="https://rss.org" target="_blank" rel="noreferrer" className="hover:text-[#42dec3] transition-colors">[ RSS ]</a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-4 text-center lg:text-left text-[#85948f] font-label-code text-[11px]">
          © 2024 Secure Alpha Technologies LLC & Alpha Academy Education Foundation. All architectural rights reserved. Zero telemetry recorded without cryptographic consent.
        </div>
      </div>
    </footer>
  );
}
