import { GraduationCap, ShieldCheck, UserCheck, ArrowLeftRight, Award, TrendingUp } from 'lucide-react';

export default function AcademySection() {
  const audiences = [
    {
      title: 'Computer Science Students',
      description: 'Bridge the gap between theoretical academia and industry production standards.',
      icon: <UserCheck className="w-5 h-5 text-[#42dec3]" />
    },
    {
      title: 'Career Switchers',
      description: 'Transition with hands-on code reviews, real production repos, and zero fluff.',
      icon: <ArrowLeftRight className="w-5 h-5 text-[#42dec3]" />
    },
    {
      title: 'Fresh Graduates',
      description: 'Gain immediate senior-level portfolio credentials that pass harsh technical screens.',
      icon: <Award className="w-5 h-5 text-[#42dec3]" />
    },
    {
      title: 'Aspiring Engineers',
      description: 'Direct mentorship from practicing engineers actively building client systems.',
      icon: <TrendingUp className="w-5 h-5 text-[#42dec3]" />
    }
  ];

  return (
    <section id="academy" className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#04132a] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Ecosystem Banner Quote */}
        <div className="p-6 sm:p-8 bg-[#1c2a42] rounded-xl border border-[#7fd1ff]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-4">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-[#112037] border border-[#7fd1ff]/40 flex items-center justify-center text-[#7fd1ff] shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-label-code text-xs text-[#7fd1ff] uppercase tracking-wider">
                Alpha Academy :: Educational Division
              </span>
              <p className="font-headline-md text-base sm:text-xl text-[#d7e3ff] font-bold tracking-tight mt-1">
                “Secure Alpha builds technology. Alpha Academy builds the people who understand it.”
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 bg-[#010e25] px-4 py-2 rounded-lg font-label-code text-xs text-[#42dec3] border border-[#42dec3]/30">
            <ShieldCheck className="w-4 h-4 text-[#42dec3]" />
            <span className="font-semibold">ENTERPRISE ACCREDITED</span>
          </div>
        </div>

        {/* Brand Promise & Strict Audience Identification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 font-label-code text-xs text-[#7fd1ff]">
              <GraduationCap className="w-4 h-4" />
              <span className="tracking-wider">2.0 THE ENGINEERING NURSERY</span>
            </div>

            <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
              Learn. Build. Master.
            </h2>

            <p className="text-body-lg text-[#bbcac4] leading-relaxed">
              Unlike generic bootcamps that teach surface-level syntax, Alpha Academy immerses you in the exact tools, architectures, and automated testing rigor used by Secure Alpha's senior software architects.
            </p>

            <div className="bg-[#0d1b33] p-4 rounded-lg border border-[#3c4a46]/40 text-xs sm:text-sm text-[#b6c7ec] leading-relaxed">
              <strong className="text-[#42dec3] block mb-1 font-semibold">Our Educational Charter:</strong>
              We train individuals to think like senior systems engineers from day one. You will write unit tests, debug CI/CD pipelines, and deploy live production containers.
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0d1b33] p-6 rounded-xl border border-[#3c4a46]/40 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-[#3c4a46]/30">
              <span className="font-label-code text-xs text-[#d7e3ff] font-semibold tracking-wider">
                EXPLICIT COHORT AUDIENCE
              </span>
              <span className="px-2 py-0.5 bg-[#93000a]/50 text-[#ffdad6] font-label-badge text-[10px] rounded border border-[#ffb4ab]/40 font-bold">
                NO CORPORATE B2B TRAINING
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audiences.map((aud) => (
                <div key={aud.title} className="p-3.5 bg-[#112037] rounded-lg border border-[#3c4a46]/30 flex items-start gap-2.5">
                  <div className="shrink-0 mt-0.5">{aud.icon}</div>
                  <div>
                    <strong className="font-headline-sm text-xs sm:text-sm text-[#d7e3ff] block font-semibold">
                      {aud.title}
                    </strong>
                    <p className="text-body-sm text-[11px] sm:text-xs text-[#bbcac4] mt-0.5 leading-relaxed">
                      {aud.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
