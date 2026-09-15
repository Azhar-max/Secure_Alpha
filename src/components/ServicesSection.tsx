import { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Smartphone, 
  Palette, 
  CheckSquare, 
  Lock, 
  BrainCircuit, 
  BarChart3,
  ChevronRight,
  Info
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'software-engineering': return <Cpu className="w-5 h-5" />;
      case 'web-development': return <Globe className="w-5 h-5" />;
      case 'mobile-app-development': return <Smartphone className="w-5 h-5" />;
      case 'ui-ux-design': return <Palette className="w-5 h-5" />;
      case 'quality-assurance': return <CheckSquare className="w-5 h-5" />;
      case 'cybersecurity': return <Lock className="w-5 h-5" />;
      case 'artificial-intelligence': return <BrainCircuit className="w-5 h-5" />;
      case 'data-analytics': return <BarChart3 className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="engineering" className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#010e25] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2 font-label-code text-xs text-[#42dec3]">
              <Terminal className="w-4 h-4" />
              <span className="tracking-wider">1.0 SOFTWARE ENGINEERING CORE</span>
            </div>
            <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
              Software engineered with purpose.
            </h2>
            <p className="text-body-lg text-[#bbcac4] leading-relaxed">
              Engineering software you can trust. Build. Test. Secure. Scale. We create high-resilience systems engineered against extreme operational conditions and active threat environments.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#1c2a42] px-4 py-2 rounded-lg font-label-code text-xs text-[#42dec3] border border-[#42dec3]/30 shrink-0 self-start lg:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#42dec3]" />
            <span className="font-semibold">SLA: 99.99% GUARANTEE</span>
          </div>
        </div>

        {/* 8 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES_DATA.map((service) => {
            const isHovered = hoveredServiceId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                onClick={() => onSelectService(service)}
                className="group bg-[#0d1b33] p-5 sm:p-6 rounded-xl border border-[#3c4a46]/40 hover:border-[#42dec3]/70 hover:bg-[#112037] transition-all duration-200 flex flex-col justify-between shadow-lg cursor-pointer hover:-translate-y-0.5"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#1c2a42] flex items-center justify-center text-[#42dec3] border border-[#42dec3]/20 group-hover:bg-[#42dec3]/10 group-hover:border-[#42dec3] transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[#85948f] group-hover:text-[#42dec3] transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-base sm:text-lg text-[#d7e3ff] font-semibold group-hover:text-[#42dec3] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-body-md text-xs sm:text-sm text-[#bbcac4] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-6 pt-3 border-t border-[#3c4a46]/30">
                  <div className="flex flex-wrap gap-1 font-label-code text-[11px] text-[#b6c7ec]">
                    {service.tags.map((tag) => (
                      <span key={tag} className="bg-[#112037] px-2 py-0.5 rounded border border-[#3c4a46]/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-label-code text-xs text-[#42dec3] font-medium">
                      {service.sla}
                    </span>
                    <span className="text-[10px] font-label-code text-[#85948f] group-hover:underline">
                      View Spec
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
