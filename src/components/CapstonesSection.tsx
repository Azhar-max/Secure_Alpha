import { useState } from 'react';
import { CAPSTONES_DATA } from '../data/content';
import { StudentCapstone } from '../types';
import { Code, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

interface CapstonesSectionProps {
  onOpenCapstoneModal: (capstone: StudentCapstone) => void;
}

export default function CapstonesSection({ onOpenCapstoneModal }: CapstonesSectionProps) {
  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#04132a] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-label-code text-xs text-[#42dec3]">
            <Code className="w-4 h-4 text-[#42dec3]" />
            <span className="tracking-wider">ACADEMY GRADUATE REPOSITORIES</span>
          </div>
          <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
            Production Capstone Projects
          </h2>
          <p className="text-body-md text-sm sm:text-base text-[#bbcac4] max-w-2xl leading-relaxed">
            Real software applications engineered, containerized, and deployed by Alpha Academy alumni during their final graduation defense.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CAPSTONES_DATA.map((project) => (
            <div
              key={project.id}
              className="bg-[#0d1b33] p-6 rounded-xl border border-[#3c4a46]/40 hover:border-[#42dec3]/60 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div className="flex flex-col gap-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-[#112037] text-[#42dec3] font-label-badge text-[10px] rounded border border-[#42dec3]/30 font-semibold">
                    {project.badge}
                  </span>
                  <span className="font-label-code text-xs text-[#85948f]">
                    {project.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-sm text-lg sm:text-xl text-[#d7e3ff] font-bold group-hover:text-[#42dec3] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-xs sm:text-sm text-[#42dec3] font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-body-sm text-xs sm:text-sm text-[#bbcac4] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 font-label-code text-[11px] text-[#b6c7ec]">
                  {project.techTags.map((tag) => (
                    <span key={tag} className="bg-[#112037] px-2 py-0.5 rounded border border-[#3c4a46]/30">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author attribution */}
                <div className="bg-[#112037] p-3 rounded-lg border border-[#3c4a46]/30 font-label-code text-xs text-[#b6c7ec]">
                  <div className="text-[#d7e3ff] font-semibold">Author: {project.author}</div>
                  <div className="text-[#85948f] text-[11px] mt-0.5">{project.authorOutcome}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-[#3c4a46]/30 flex items-center justify-between font-label-code text-xs">
                <button
                  onClick={() => onOpenCapstoneModal(project)}
                  className="text-[#b6c7ec] hover:text-[#d7e3ff] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>[ Architecture Review ]</span>
                </button>

                <button
                  onClick={() => onOpenCapstoneModal(project)}
                  className="text-[#42dec3] hover:text-[#65fade] flex items-center gap-1 cursor-pointer transition-colors font-semibold"
                >
                  <span>Live Sandbox</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
