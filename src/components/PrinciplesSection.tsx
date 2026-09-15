import { RotateCcw, CheckSquare, Lock, BookOpen } from 'lucide-react';

export default function PrinciplesSection() {
  const principles = [
    {
      title: 'Zero-Technical Debt Policy',
      description: 'Every module must satisfy automated static analysis thresholds before merge. No skipped tests, no deprecated dependencies, no temporary shortcuts.',
      icon: <RotateCcw className="w-5 h-5 text-[#42dec3]" />
    },
    {
      title: 'Test-Driven Deployment',
      description: 'TDD is mandatory across our engineering teams. Unit, integration, and end-to-end assertions run automatically on every single PR branch.',
      icon: <CheckSquare className="w-5 h-5 text-[#42dec3]" />
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Never trust, always verify. Every internal gRPC endpoint and database query requires cryptographically signed JWT or mutual TLS tokens.',
      icon: <Lock className="w-5 h-5 text-[#42dec3]" />
    },
    {
      title: 'ISO-Aligned Documentation',
      description: 'Comprehensive OpenAPI schemas, system architecture diagrams, and disaster recovery runbooks generated alongside running codebases.',
      icon: <BookOpen className="w-5 h-5 text-[#42dec3]" />
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#010e25] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3 text-center items-center">
          <span className="font-label-code text-xs text-[#42dec3] tracking-widest uppercase">
            RIGID CORE PRINCIPLES
          </span>
          <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
            Why Secure Alpha
          </h2>
          <p className="text-body-md text-sm sm:text-base text-[#bbcac4] max-w-xl leading-relaxed">
            We operate under uncompromising engineering protocols designed to protect software integrity across multi-year lifecycles.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {principles.map((item) => (
            <div
              key={item.title}
              className="bg-[#0d1b33] p-6 rounded-xl border border-[#3c4a46]/40 hover:border-[#42dec3]/50 transition-colors flex flex-col gap-3 shadow-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1c2a42] flex items-center justify-center border border-[#42dec3]/20">
                {item.icon}
              </div>
              <h3 className="font-headline-sm text-base sm:text-lg text-[#d7e3ff] font-semibold">
                {item.title}
              </h3>
              <p className="text-body-sm text-xs sm:text-sm text-[#bbcac4] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
