import { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/content';
import { CaseStudy } from '../types';
import { CheckCircle2, Shield, Activity, ArrowRight, ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export default function PortfolioSection({ onSelectCaseStudy }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#04132a] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-label-code text-xs text-[#b6c7ec]">
            <Shield className="w-4 h-4 text-[#42dec3]" />
            <span className="tracking-wider">PRODUCTION-PROVEN ARCHITECTURES</span>
          </div>
          <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
            Engineering Case Studies
          </h2>
          <p className="text-body-md text-sm sm:text-base text-[#bbcac4] max-w-2xl leading-relaxed">
            We don't publish static mockup showcases. These are production telemetry reviews of distributed platforms running under rigorous real-world loads.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES_DATA.map((study) => (
            <div
              key={study.id}
              className="bg-[#0d1b33] p-6 rounded-xl border border-[#3c4a46]/40 hover:border-[#42dec3]/60 transition-all flex flex-col justify-between shadow-xl group cursor-pointer"
              onClick={() => onSelectCaseStudy(study)}
            >
              <div className="flex flex-col gap-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-label-badge font-semibold ${
                    study.domain.includes('MEDTECH')
                      ? 'bg-[#112037] text-[#7fd1ff] border border-[#7fd1ff]/30'
                      : 'bg-[#112037] text-[#42dec3] border border-[#42dec3]/30'
                  }`}>
                    {study.domain}
                  </span>
                  <span className="font-label-code text-xs text-[#85948f]">
                    {study.code}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <div>
                  <h3 className="font-headline-sm text-lg sm:text-xl text-[#d7e3ff] font-bold group-hover:text-[#42dec3] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-body-sm text-xs sm:text-sm text-[#42dec3] font-medium mt-1">
                    {study.subtitle}
                  </p>
                </div>

                {/* Challenge */}
                <div className="bg-[#112037] p-3 rounded-lg border border-[#3c4a46]/30 text-xs text-[#bbcac4]">
                  <strong className="text-[#d7e3ff] block mb-1 font-semibold">Challenge:</strong>
                  {study.challenge}
                </div>

                {/* Solution */}
                <div className="bg-[#112037] p-3 rounded-lg border border-[#3c4a46]/30 text-xs text-[#bbcac4]">
                  <strong className="text-[#d7e3ff] block mb-1 font-semibold">Architectural Solution:</strong>
                  {study.solution}
                </div>

                {/* Diagram Micro-Viz */}
                <div className="bg-[#010e25] p-2.5 rounded-lg border border-[#3c4a46]/40 font-label-code text-xs text-[#7fd1ff] flex items-center justify-between">
                  <span className="truncate pr-2">{study.flowDiagram}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#42dec3] shrink-0" />
                </div>
              </div>

              {/* Metrics & Footer */}
              <div className="mt-6 pt-4 border-t border-[#3c4a46]/30 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-[#112037] p-2 rounded-lg border border-[#3c4a46]/30">
                    <div className="font-headline-sm text-base sm:text-lg text-[#42dec3] font-bold">
                      {study.metrics.primaryValue}
                    </div>
                    <div className="font-label-code text-[11px] text-[#85948f]">
                      {study.metrics.primaryLabel}
                    </div>
                  </div>

                  <div className="bg-[#112037] p-2 rounded-lg border border-[#3c4a46]/30">
                    <div className="font-headline-sm text-base sm:text-lg text-[#7fd1ff] font-bold">
                      {study.metrics.secondaryValue}
                    </div>
                    <div className="font-label-code text-[11px] text-[#85948f]">
                      {study.metrics.secondaryLabel}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1 font-label-code text-[11px] text-[#b6c7ec]">
                  {study.stack.map((tech, i) => (
                    <span key={tech}>
                      {tech}{i < study.stack.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end text-xs font-label-code text-[#42dec3] group-hover:translate-x-1 transition-transform pt-1">
                  <span className="flex items-center gap-1">Deep Dive Specs <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
