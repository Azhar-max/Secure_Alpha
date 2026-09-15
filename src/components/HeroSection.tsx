import { useState, useEffect } from 'react';
import { Terminal, GraduationCap, Gauge, Cpu, RefreshCw, Layers, ShieldCheck, Activity } from 'lucide-react';

interface HeroSectionProps {
  onExploreServices: () => void;
  onExploreAcademy: () => void;
  onTakeAssessment: () => void;
}

export default function HeroSection({
  onExploreServices,
  onExploreAcademy,
  onTakeAssessment
}: HeroSectionProps) {
  const [ping, setPing] = useState(14);
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'both' | 'prod' | 'labs'>('both');
  const [packetsCount, setPacketsCount] = useState(128420);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(12 + Math.random() * 6));
      setPacketsCount(prev => prev + Math.floor(Math.random() * 5 + 1));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full px-4 sm:px-6 py-12 sm:py-20 overflow-hidden bg-[#04132a]">
      {/* Subtle Background Circuit Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#112037_1px,transparent_1px),linear-gradient(to_bottom,#112037_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Upper Hero Row: Dual Identity & Headlines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Headline Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2 font-label-code text-xs text-[#b6c7ec]">
              <span className="px-2 py-0.5 bg-[#1c2a42] rounded text-[#42dec3] border border-[#42dec3]/30">
                STATUS: ALL SYSTEMS NOMINAL
              </span>
              <span className="text-[#3c4a46]">::</span>
              <span className="text-[#bbcac4]">DUAL-CORE ARCHITECTURE</span>
              <span className="text-[#3c4a46]">::</span>
              <span className="text-[#7fd1ff]">VERSION 4.8.2</span>
            </div>

            <h1 className="text-display-hero text-[#d7e3ff] tracking-tight leading-[1.05]">
              We build software.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42dec3] via-[#65fade] to-[#7fd1ff]">
                We build engineers.
              </span>
            </h1>

            <p className="text-body-lg text-[#bbcac4] max-w-2xl leading-relaxed">
              Secure Alpha engineers reliable digital products, while Alpha Academy develops practical technology skills for the next generation of software professionals.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1c2a42] text-[#42dec3] hover:bg-[#27354d] border border-[#42dec3]/40 shadow-[0_0_16px_rgba(66,222,195,0.2)] font-semibold text-sm transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4" />
                <span>Explore Our Services</span>
              </button>

              <button
                onClick={onExploreAcademy}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#42dec3] text-[#00382f] hover:bg-[#00c2a8] shadow-[0_0_16px_rgba(66,222,195,0.35)] font-semibold text-sm transition-all cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Explore Alpha Academy</span>
              </button>

              <button
                onClick={onTakeAssessment}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#112037] text-[#7fd1ff] hover:bg-[#1c2a42] hover:text-[#c4e7ff] border border-[#7fd1ff]/30 font-label-code text-xs transition-all cursor-pointer"
              >
                <Gauge className="w-4 h-4" />
                <span>Take Free Skills Assessment</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="bg-[#112037]/80 p-3.5 rounded-lg border border-[#3c4a46]/40 hover:border-[#42dec3]/40 transition-colors">
                <div className="font-headline-lg text-2xl sm:text-3xl text-[#42dec3] font-bold">48+</div>
                <div className="font-label-code text-xs text-[#bbcac4] mt-0.5">Enterprise Deliveries</div>
              </div>

              <div className="bg-[#112037]/80 p-3.5 rounded-lg border border-[#3c4a46]/40 hover:border-[#7fd1ff]/40 transition-colors">
                <div className="font-headline-lg text-2xl sm:text-3xl text-[#7fd1ff] font-bold">1,420+</div>
                <div className="font-label-code text-xs text-[#bbcac4] mt-0.5">Certified Engineers</div>
              </div>

              <div className="bg-[#112037]/80 p-3.5 rounded-lg border border-[#3c4a46]/40 hover:border-[#d7e3ff]/40 transition-colors">
                <div className="font-headline-lg text-2xl sm:text-3xl text-[#d7e3ff] font-bold">0.00%</div>
                <div className="font-label-code text-xs text-[#bbcac4] mt-0.5">Vulnerability Tol.</div>
              </div>

              <div className="bg-[#112037]/80 p-3.5 rounded-lg border border-[#3c4a46]/40 hover:border-[#b6c7ec]/40 transition-colors">
                <div className="font-headline-lg text-2xl sm:text-3xl text-[#b6c7ec] font-bold">100%</div>
                <div className="font-label-code text-xs text-[#bbcac4] mt-0.5">Project-Based Labs</div>
              </div>
            </div>
          </div>

          {/* Interactive Architecture Diagram Node */}
          <div className="lg:col-span-5 bg-[#0d1b33] p-5 sm:p-6 rounded-xl border border-[#3c4a46]/60 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col gap-4 relative">
            <div className="flex items-center justify-between font-label-code text-xs border-b border-[#3c4a46]/30 pb-3">
              <div className="flex items-center gap-2 text-[#42dec3]">
                <span className="w-2 h-2 rounded-full bg-[#42dec3] animate-pulse"></span>
                <span className="font-semibold tracking-wider">LIVE ECOSYSTEM TELEMETRY</span>
              </div>
              <div className="flex items-center gap-2 text-[#bbcac4]">
                <span>PING: <strong className="text-[#42dec3]">{ping}ms</strong></span>
              </div>
            </div>

            {/* Sub-node selector pills */}
            <div className="flex items-center gap-1 bg-[#010e25] p-1 rounded-md font-label-code text-[11px]">
              <button 
                onClick={() => setActiveTelemetryTab('both')}
                className={`flex-1 py-1 rounded transition-colors ${activeTelemetryTab === 'both' ? 'bg-[#1c2a42] text-[#42dec3] font-bold' : 'text-[#85948f] hover:text-[#d7e3ff]'}`}
              >
                ALL NODES
              </button>
              <button 
                onClick={() => setActiveTelemetryTab('prod')}
                className={`flex-1 py-1 rounded transition-colors ${activeTelemetryTab === 'prod' ? 'bg-[#1c2a42] text-[#42dec3] font-bold' : 'text-[#85948f] hover:text-[#d7e3ff]'}`}
              >
                [ENG] PROD
              </button>
              <button 
                onClick={() => setActiveTelemetryTab('labs')}
                className={`flex-1 py-1 rounded transition-colors ${activeTelemetryTab === 'labs' ? 'bg-[#1c2a42] text-[#7fd1ff] font-bold' : 'text-[#85948f] hover:text-[#d7e3ff]'}`}
              >
                [LRN] LABS
              </button>
            </div>

            {/* Core Dual Visualization */}
            <div className="flex flex-col gap-3">
              {/* Node A: Engineering */}
              {(activeTelemetryTab === 'both' || activeTelemetryTab === 'prod') && (
                <div className="bg-[#112037] p-4 rounded-lg border border-[#42dec3]/30 relative overflow-hidden transition-all hover:border-[#42dec3]/70">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-[#42dec3] font-semibold text-sm">
                      <Cpu className="w-4 h-4" />
                      <span>Secure Alpha Core Engine</span>
                    </div>
                    <span className="px-1.5 py-0.5 bg-[#1c2a42] text-[#42dec3] font-label-badge text-[10px] rounded border border-[#42dec3]/30">
                      NODE: ALPHA-PROD
                    </span>
                  </div>
                  <p className="text-body-sm text-xs text-[#bbcac4] mb-3">
                    Microservices, Cryptographic Auditing, Distributed Scalability & Continuous Deployment.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-label-code text-[11px]">
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#b6c7ec] rounded border border-[#3c4a46]/40">gRPC</span>
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#b6c7ec] rounded border border-[#3c4a46]/40">Kubernetes</span>
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#b6c7ec] rounded border border-[#3c4a46]/40">Kafka</span>
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#b6c7ec] rounded border border-[#3c4a46]/40">Zero-Trust</span>
                  </div>
                </div>
              )}

              {/* Flow Indicator Cable */}
              {activeTelemetryTab === 'both' && (
                <div className="flex items-center justify-center py-1">
                  <div className="flex items-center gap-2 font-label-code text-xs text-[#7fd1ff] bg-[#1c2a42] px-4 py-1 rounded-full border border-[#7fd1ff]/30 shadow-[0_0_10px_rgba(127,209,255,0.15)]">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span className="text-[11px] font-semibold tracking-wider">BI-DIRECTIONAL KNOWLEDGE & CODE SYNC</span>
                  </div>
                </div>
              )}

              {/* Node B: Academy */}
              {(activeTelemetryTab === 'both' || activeTelemetryTab === 'labs') && (
                <div className="bg-[#112037] p-4 rounded-lg border border-[#7fd1ff]/30 relative overflow-hidden transition-all hover:border-[#7fd1ff]/70">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-[#7fd1ff] font-semibold text-sm">
                      <Layers className="w-4 h-4" />
                      <span>Alpha Academy Skill Incubator</span>
                    </div>
                    <span className="px-1.5 py-0.5 bg-[#1c2a42] text-[#7fd1ff] font-label-badge text-[10px] rounded border border-[#7fd1ff]/30">
                      NODE: ACADEMY-LABS
                    </span>
                  </div>
                  <p className="text-body-sm text-xs text-[#bbcac4] mb-3">
                    Hands-on Production Codebases, Real-World SQA Pipelines & Verified Engineering Mentorship.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-label-code text-[11px]">
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#b6c7ec] rounded border border-[#3c4a46]/40">MERN Stack</span>
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#b6c7ec] rounded border border-[#3c4a46]/40">FastAPI</span>
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#b6c7ec] rounded border border-[#3c4a46]/40">Playwright</span>
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#b6c7ec] rounded border border-[#3c4a46]/40">Live Projects</span>
                  </div>
                </div>
              )}
            </div>

            {/* Realtime Telemetry Bottom Bar */}
            <div className="bg-[#27354d]/60 p-2.5 rounded-lg font-label-code text-xs flex justify-between items-center text-[#bbcac4] border border-[#3c4a46]/40">
              <span className="text-[#42dec3] font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#42dec3]" />
                &gt;_ TELEMETRY PIPELINE
              </span>
              <span>SYNCED: {packetsCount.toLocaleString()} EVTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
