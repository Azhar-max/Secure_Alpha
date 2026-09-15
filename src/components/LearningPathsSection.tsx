import { useState } from 'react';
import { LEARNING_PATHS_DATA } from '../data/content';
import { LearningPath, LearningPathStep } from '../types';
import { Compass, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function LearningPathsSection() {
  const [selectedStep, setSelectedStep] = useState<{ pathId: string; step: LearningPathStep } | null>(null);

  return (
    <section id="learning-paths" className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#04132a] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-label-code text-xs text-[#b6c7ec]">
            <Compass className="w-4 h-4 text-[#42dec3]" />
            <span className="tracking-wider">STRUCTURED ROADMAPS</span>
          </div>
          <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
            Career-Oriented Learning Paths
          </h2>
          <p className="text-body-md text-sm sm:text-base text-[#bbcac4] max-w-2xl leading-relaxed">
            Clear, step-by-step technical trajectories that take students from fundamentals to production competence with no guesswork.
          </p>
        </div>

        {/* 3 Paths Stack */}
        <div className="flex flex-col gap-6">
          {LEARNING_PATHS_DATA.map((path) => {
            const isPathA = path.id === 'path-a';
            const isPathB = path.id === 'path-b';
            const accentColor = isPathB ? '#7fd1ff' : '#42dec3';

            return (
              <div
                key={path.id}
                className="bg-[#0d1b33] p-6 rounded-xl border border-[#3c4a46]/40 flex flex-col gap-4 shadow-xl"
              >
                {/* Path Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#3c4a46]/30">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-0.5 rounded font-label-badge text-xs font-bold ${
                      isPathB 
                        ? 'bg-[#1c2a42] text-[#7fd1ff] border border-[#7fd1ff]/40' 
                        : 'bg-[#00c2a8]/20 text-[#42dec3] border border-[#42dec3]/40'
                    }`}>
                      {path.code}
                    </span>
                    <h3 className="font-headline-sm text-lg sm:text-xl text-[#d7e3ff] font-bold">
                      {path.title}
                    </h3>
                  </div>

                  <span className={`font-label-code text-xs font-semibold ${isPathB ? 'text-[#7fd1ff]' : 'text-[#42dec3]'}`}>
                    {path.timeline}
                  </span>
                </div>

                {/* 6 Stages Horizontal Pipeline */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  {path.steps.map((s, idx) => {
                    const isCapstone = idx === path.steps.length - 1;
                    const isSelected = selectedStep?.pathId === path.id && selectedStep?.step.step === s.step;

                    return (
                      <div
                        key={s.step}
                        onClick={() => setSelectedStep({ pathId: path.id, step: s })}
                        className={`p-3.5 rounded-lg flex flex-col justify-between transition-all cursor-pointer border ${
                          isCapstone
                            ? 'bg-[#1c2a42] border-[#42dec3]/60 shadow-[0_0_12px_rgba(66,222,195,0.15)]'
                            : isSelected
                            ? 'bg-[#112037] border-[#42dec3]'
                            : 'bg-[#112037] border-[#3c4a46]/30 hover:border-[#42dec3]/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`font-label-code text-[11px] font-bold ${isCapstone ? 'text-[#42dec3]' : 'text-[#85948f]'}`}>
                              {s.step}. {s.phase}
                            </span>
                            {isCapstone && <Sparkles className="w-3.5 h-3.5 text-[#42dec3]" />}
                          </div>
                          <strong className={`font-body-md text-xs block leading-snug ${isCapstone ? 'text-[#42dec3] font-bold' : 'text-[#d7e3ff]'}`}>
                            {s.title}
                          </strong>
                        </div>

                        <span className="text-[10px] text-[#bbcac4] mt-2 block font-label-code line-clamp-2">
                          {s.description}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Stage Detail Drawer if clicked */}
                {selectedStep?.pathId === path.id && (
                  <div className="mt-2 p-3.5 bg-[#010e25] rounded-lg border border-[#42dec3]/40 flex items-start justify-between gap-4 font-label-code text-xs text-[#bbcac4] animate-fadeIn">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#42dec3] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#42dec3] font-bold">
                          STAGE {selectedStep.step.step} • {selectedStep.step.phase}: {selectedStep.step.title}
                        </span>
                        <p className="text-xs text-[#d7e3ff] mt-0.5">{selectedStep.step.description}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedStep(null)}
                      className="text-[#85948f] hover:text-[#d7e3ff] shrink-0"
                    >
                      [close]
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
