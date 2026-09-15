import { useState } from 'react';
import { AssessmentProfile } from '../types';
import { Gauge, CheckCircle2, ArrowRight, Sparkles, Sliders } from 'lucide-react';

interface SkillsAssessmentSectionProps {
  onApplyForRecommended: (pathTitle: string) => void;
}

export default function SkillsAssessmentSection({ onApplyForRecommended }: SkillsAssessmentSectionProps) {
  const [profile, setProfile] = useState<AssessmentProfile>({
    experience: 'intermediate',
    interest: 'web',
    hours: '15'
  });

  const [hasCalculated, setHasCalculated] = useState(true);

  // Radar points and recommendations based on interest and experience
  const getRadarData = () => {
    switch (profile.interest) {
      case 'web':
        return {
          title: 'Full-Stack MERN Architecture',
          desc: 'Your profile indicates strong analytical foundation with high growth potential in asynchronous web services, modern React 18 state management, and real-time MongoDB aggregations.',
          points: '100,25 170,80 130,150 70,140 40,80',
          matchScore: '96% Match',
          timeToHire: '4-6 Months'
        };
      case 'sqa':
        return {
          title: 'SQA & Test Automation Masterclass',
          desc: 'Your profile highlights meticulous attention to detail and regression verification. Ideal trajectory into Cypress, Playwright, CI/CD automated gates, and synthetic load testing.',
          points: '100,60 140,80 170,160 50,150 40,90',
          matchScore: '98% Match',
          timeToHire: '3-4.5 Months'
        };
      case 'python':
        return {
          title: 'Python Backend & Applied AI Engineering',
          desc: 'Focus on FastAPI, PostgreSQL relational modeling, background task queues, and vector RAG pipelines with PyTorch and LangChain.',
          points: '100,30 180,80 120,130 80,130 20,80',
          matchScore: '95% Match',
          timeToHire: '5-6 Months'
        };
      case 'sec':
        return {
          title: 'Defensive Cybersecurity & AppSec',
          desc: 'Focus on OWASP Top 10 mitigation, container auditing, network packet analysis with Wireshark, mutual TLS, and zero-trust perimeter enforcement.',
          points: '100,20 150,70 140,150 25,160 50,75',
          matchScore: '94% Match',
          timeToHire: '4-6 Months'
        };
      default:
        return {
          title: 'Full-Stack MERN Architecture',
          desc: 'Focus on React 18, high-concurrency Node.js, and real-time MongoDB aggregations.',
          points: '100,25 170,80 130,150 70,140 40,80',
          matchScore: '96% Match',
          timeToHire: '4-6 Months'
        };
    }
  };

  const radarData = getRadarData();

  const handleInterestChange = (interest: AssessmentProfile['interest']) => {
    setProfile(prev => ({ ...prev, interest }));
    setHasCalculated(true);
  };

  const handleExperienceChange = (experience: AssessmentProfile['experience']) => {
    setProfile(prev => ({ ...prev, experience }));
    setHasCalculated(true);
  };

  const handleHoursChange = (hours: AssessmentProfile['hours']) => {
    setProfile(prev => ({ ...prev, hours }));
    setHasCalculated(true);
  };

  return (
    <section id="assessment" className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#010e25] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3 text-center items-center">
          <span className="font-label-code text-xs text-[#42dec3] tracking-widest uppercase">
            DIAGNOSTIC PLACEMENT
          </span>
          <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
            Free Technology Skills Assessment
          </h2>
          <p className="text-body-md text-sm sm:text-base text-[#bbcac4] max-w-xl leading-relaxed">
            Not sure where to start? Take our rapid diagnostic to analyze your technical baseline and map your exact path forward.
          </p>
        </div>

        {/* Assessment Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0d1b33] p-6 sm:p-8 rounded-xl border border-[#3c4a46]/50 shadow-2xl">
          {/* Interactive Form Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#3c4a46]/30">
              <span className="font-label-code text-xs text-[#42dec3] font-semibold flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                STEP 01/03 • REAL-TIME SKILL PROFILING
              </span>
              <span className="font-label-code text-xs text-[#85948f]">EST: 2 MINS</span>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setHasCalculated(true); }}>
              {/* Question 1: Experience Level */}
              <div className="flex flex-col gap-2">
                <label className="font-headline-sm text-sm sm:text-base text-[#d7e3ff] font-semibold">
                  1. Current Software Development Experience
                </label>
                <select
                  value={profile.experience}
                  onChange={(e) => handleExperienceChange(e.target.value as AssessmentProfile['experience'])}
                  className="bg-[#112037] px-4 py-2.5 rounded-lg border border-[#3c4a46]/40 text-[#d7e3ff] text-xs sm:text-sm focus:outline-none focus:border-[#42dec3] transition-colors cursor-pointer"
                >
                  <option value="none">Total Beginner (No prior coding experience)</option>
                  <option value="basic">Academic / Self-Taught (Know basic HTML/Python syntax)</option>
                  <option value="intermediate">Junior Developer / CS Student (1-2 years exposure)</option>
                  <option value="pro">Experienced Non-Web Engineer (Switching into modern stack)</option>
                </select>
              </div>

              {/* Question 2: Primary Tech Interest */}
              <div className="flex flex-col gap-2">
                <label className="font-headline-sm text-sm sm:text-base text-[#d7e3ff] font-semibold">
                  2. Primary Technical Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'web', label: 'Full-Stack Web (MERN)' },
                    { id: 'sqa', label: 'SQA & Automation' },
                    { id: 'python', label: 'Python & AI Engineering' },
                    { id: 'sec', label: 'Cybersecurity Defense' }
                  ].map((item) => (
                    <label
                      key={item.id}
                      onClick={() => handleInterestChange(item.id as AssessmentProfile['interest'])}
                      className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                        profile.interest === item.id
                          ? 'bg-[#1c2a42] border-[#42dec3] text-[#42dec3] shadow-[0_0_10px_rgba(66,222,195,0.15)]'
                          : 'bg-[#112037] border-[#3c4a46]/30 text-[#bbcac4] hover:bg-[#112037]/80 hover:text-[#d7e3ff]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="interest"
                        checked={profile.interest === item.id}
                        onChange={() => handleInterestChange(item.id as AssessmentProfile['interest'])}
                        className="accent-[#42dec3]"
                      />
                      <span className="text-xs font-medium">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 3: Weekly Commitment */}
              <div className="flex flex-col gap-2">
                <label className="font-headline-sm text-sm sm:text-base text-[#d7e3ff] font-semibold">
                  3. Dedicated Weekly Learning Hours
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '8', label: '8-10 Hours/Wk' },
                    { id: '15', label: '15-20 Hours/Wk' },
                    { id: '30', label: '30+ Hours/Wk' }
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => handleHoursChange(item.id as AssessmentProfile['hours'])}
                      className={`p-2.5 rounded-lg border font-label-code text-xs transition-all text-center cursor-pointer ${
                        profile.hours === item.id
                          ? 'bg-[#1c2a42] border-[#42dec3] text-[#42dec3] font-bold shadow-[0_0_10px_rgba(66,222,195,0.15)]'
                          : 'bg-[#112037] border-[#3c4a46]/30 text-[#bbcac4] hover:text-[#d7e3ff]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#42dec3] text-[#00382f] hover:bg-[#00c2a8] font-bold text-sm transition-all shadow-[0_0_16px_rgba(66,222,195,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Calculate Skill Radar & Recommended Track</span>
                </button>
              </div>
            </form>
          </div>

          {/* Dynamic Results & Skill Radar Preview Column */}
          <div className="lg:col-span-5 bg-[#112037] p-5 sm:p-6 rounded-xl border border-[#3c4a46]/50 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#3c4a46]/30">
                <span className="font-label-code text-xs text-[#7fd1ff] font-semibold tracking-wider">
                  RADAR ASSESSMENT RESULTS
                </span>
                <span className="px-2 py-0.5 bg-[#1c2a42] text-[#42dec3] font-label-badge text-[10px] rounded border border-[#42dec3]/30">
                  {radarData.matchScore}
                </span>
              </div>

              {/* Visual SVG Radar Representation */}
              <div className="flex items-center justify-center py-2 relative">
                <svg className="w-52 h-52 text-[#42dec3]" viewBox="0 0 200 200">
                  {/* Background Polygons / Axes */}
                  <polygon
                    points="100,20 180,75 160,165 40,165 20,75"
                    fill="none"
                    stroke="#85948f"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                  />
                  <polygon
                    points="100,50 150,85 135,140 65,140 50,85"
                    fill="none"
                    stroke="#85948f"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                  <polygon
                    points="100,75 125,92 117,120 83,120 75,92"
                    fill="none"
                    stroke="#85948f"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                  />

                  {/* Radiating Axis Lines */}
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#85948f" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="100" y1="100" x2="180" y2="75" stroke="#85948f" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="100" y1="100" x2="160" y2="165" stroke="#85948f" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="100" y1="100" x2="40" y2="165" stroke="#85948f" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="100" y1="100" x2="20" y2="75" stroke="#85948f" strokeOpacity="0.2" strokeWidth="1" />

                  {/* Active Dynamic Skill Shape */}
                  <polygon
                    points={radarData.points}
                    fill="#42dec3"
                    fillOpacity="0.25"
                    stroke="#42dec3"
                    strokeWidth="2"
                    className="transition-all duration-500 ease-in-out"
                  />

                  {/* Axes Labels */}
                  <text x="100" y="14" textAnchor="middle" fill="#42dec3" className="font-label-code text-[10px] font-bold">LOGIC</text>
                  <text x="185" y="78" textAnchor="start" fill="#7fd1ff" className="font-label-code text-[10px] font-bold">ARCH</text>
                  <text x="165" y="180" textAnchor="end" fill="#42dec3" className="font-label-code text-[10px] font-bold">QA</text>
                  <text x="35" y="180" textAnchor="start" fill="#7fd1ff" className="font-label-code text-[10px] font-bold">DEV-OPS</text>
                  <text x="12" y="78" textAnchor="end" fill="#42dec3" className="font-label-code text-[10px] font-bold">DATA</text>
                </svg>
              </div>

              {/* Recommended Track Output */}
              <div className="p-3.5 bg-[#1c2a42] rounded-lg border border-[#42dec3]/30 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-[11px] text-[#7fd1ff] font-semibold">OPTIMAL MATCH:</span>
                  <span className="font-label-code text-[11px] text-[#42dec3]">{radarData.timeToHire}</span>
                </div>
                <div className="font-headline-sm text-base text-[#42dec3] font-bold">
                  {radarData.title}
                </div>
                <p className="text-body-sm text-xs text-[#bbcac4] leading-relaxed">
                  {radarData.desc}
                </p>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-2 flex items-center justify-between font-label-code text-xs">
              <span className="text-[#85948f]">READY TO ENROLL?</span>
              <button
                onClick={() => onApplyForRecommended(radarData.title)}
                className="text-[#42dec3] hover:text-[#65fade] hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>&gt; Apply for this Cohort</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
