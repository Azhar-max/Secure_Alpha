import { useState } from 'react';
import { CERTIFICATES_DATABASE } from '../data/content';
import { VerifiedCertificate } from '../types';
import { 
  CheckCircle2, 
  Search, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight, 
  GraduationCap, 
  Cpu, 
  Hash, 
  Calendar 
} from 'lucide-react';

interface VerificationSectionProps {
  onScheduleBriefing: () => void;
  onApplyCohort: () => void;
}

export default function VerificationSection({
  onScheduleBriefing,
  onApplyCohort
}: VerificationSectionProps) {
  const [certId, setCertId] = useState('SA-2024-8841');
  const [searchedId, setSearchedId] = useState<string | null>('SA-2024-8841');
  const [verificationResult, setVerificationResult] = useState<VerifiedCertificate | null>(
    CERTIFICATES_DATABASE['SA-2024-8841']
  );
  const [hasSearched, setHasSearched] = useState(true);

  const handleVerify = (idToVerify?: string) => {
    const id = (idToVerify || certId).trim();
    setSearchedId(id);
    setHasSearched(true);

    if (CERTIFICATES_DATABASE[id]) {
      setVerificationResult(CERTIFICATES_DATABASE[id]);
    } else {
      setVerificationResult(null);
    }
  };

  const sampleIds = ['SA-2024-8841', 'SA-2024-1092', 'SA-2024-4419', 'SA-2024-9901'];

  return (
    <section id="verification" className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#04132a] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Certificate Verification Interactive Banner */}
        <div className="bg-[#1c2a42] p-6 sm:p-10 rounded-xl border border-[#7fd1ff]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-2 font-label-code text-xs text-[#42dec3]">
              <ShieldCheck className="w-4 h-4 text-[#42dec3]" />
              <span className="tracking-wider">PUBLIC CREDENTIAL REGISTRY</span>
            </div>
            <h2 className="font-headline-md text-xl sm:text-2xl text-[#d7e3ff] font-bold">
              Verify an Alpha Certified Engineer
            </h2>
            <p className="text-body-md text-sm sm:text-base text-[#bbcac4] leading-relaxed">
              Every diploma emitted by Alpha Academy is permanently signed with a unique cryptographic hash and verified against our ledger. Employers can confirm candidate credentials instantly.
            </p>

            {/* Quick sample chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-label-code text-[#85948f]">
              <span>Sample IDs:</span>
              {sampleIds.map((id) => (
                <button
                  key={id}
                  onClick={() => {
                    setCertId(id);
                    handleVerify(id);
                  }}
                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                    certId === id
                      ? 'bg-[#42dec3]/20 text-[#42dec3] border-[#42dec3]'
                      : 'bg-[#112037] text-[#bbcac4] border-[#3c4a46]/40 hover:text-[#d7e3ff]'
                  }`}
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2 bg-[#112037] p-2 rounded-lg border border-[#3c4a46]/50">
            <div className="flex items-center gap-2 px-3 py-1.5 w-full sm:w-80">
              <Search className="w-4 h-4 text-[#85948f] shrink-0" />
              <input
                type="text"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleVerify(); }}
                placeholder="Enter Certificate ID"
                className="bg-transparent text-[#42dec3] font-label-code text-xs sm:text-sm w-full focus:outline-none placeholder-[#85948f]"
              />
            </div>
            <button
              onClick={() => handleVerify()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-[#42dec3] text-[#00382f] font-label-code text-xs font-bold hover:bg-[#00c2a8] transition-colors cursor-pointer shrink-0"
            >
              Verify Now
            </button>
          </div>
        </div>

        {/* Verification Result Box */}
        {hasSearched && (
          <div>
            {verificationResult ? (
              <div className="p-5 sm:p-6 bg-[#0d1b33] rounded-xl border border-[#42dec3]/60 shadow-[0_0_20px_rgba(66,222,195,0.1)] flex flex-col md:flex-row md:items-center justify-between gap-4 font-label-code text-xs text-[#d7e3ff]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#42dec3] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[#42dec3] font-bold text-sm">
                        CERTIFICATE VERIFIED: "{verificationResult.id}"
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#112037] text-[#7fd1ff] border border-[#7fd1ff]/30 text-[10px] font-bold">
                        {verificationResult.grade}
                      </span>
                    </div>

                    <div className="text-sm text-[#d7e3ff] font-sans font-medium">
                      Recipient: <strong className="text-[#42dec3]">{verificationResult.recipient}</strong> • Course: <strong className="text-[#7fd1ff]">{verificationResult.course}</strong>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#85948f] pt-1">
                      <Hash className="w-3.5 h-3.5 text-[#85948f]" />
                      <span className="truncate max-w-xs sm:max-w-md">LEDGER HASH: {verificationResult.hash}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#bbcac4] shrink-0 self-end md:self-auto bg-[#112037] px-3 py-1.5 rounded-md border border-[#3c4a46]/40">
                  <Calendar className="w-3.5 h-3.5 text-[#42dec3]" />
                  <span>ISSUED: {verificationResult.date}</span>
                </div>
              </div>
            ) : (
              <div className="p-5 bg-[#0d1b33] rounded-xl border border-[#ffb4ab]/40 flex items-start gap-3 text-xs font-label-code text-[#ffdad6]">
                <AlertCircle className="w-5 h-5 text-[#ffb4ab] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#ffb4ab]">NO RECORD FOUND FOR CERTIFICATE ID: "{searchedId}"</span>
                  <p className="text-[#bbcac4] mt-1 font-sans">
                    Please ensure the ID matches the format printed on the bottom right corner of the Alpha Academy diploma (e.g. SA-2024-8841).
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Dual Call to Action Terminal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Terminal Left: Hire Software House */}
          <div className="bg-[#0d1b33] p-8 rounded-xl border border-[#3c4a46]/50 hover:border-[#42dec3]/60 transition-all flex flex-col justify-between gap-6 shadow-xl">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-label-code text-xs text-[#42dec3]">
                <span className="w-2 h-2 rounded bg-[#42dec3]"></span>
                <span className="tracking-wider">SECURE ALPHA SOFTWARE HOUSE</span>
              </div>
              <h3 className="font-headline-lg text-xl sm:text-2xl text-[#d7e3ff] font-bold">
                Engineer a Software Project
              </h3>
              <p className="text-body-md text-sm sm:text-base text-[#bbcac4] leading-relaxed">
                Need mission-critical cloud software, an enterprise web application, or a complete DevSecOps overhaul? Partner with our senior engineering teams.
              </p>
            </div>

            <button
              onClick={onScheduleBriefing}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#42dec3] text-[#00382f] hover:bg-[#00c2a8] font-headline-sm text-sm font-bold transition-all shadow-[0_0_16px_rgba(66,222,195,0.3)] cursor-pointer"
            >
              <span>Schedule Architectural Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Right: Enroll Academy */}
          <div className="bg-[#0d1b33] p-8 rounded-xl border border-[#3c4a46]/50 hover:border-[#7fd1ff]/60 transition-all flex flex-col justify-between gap-6 shadow-xl">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-label-code text-xs text-[#7fd1ff]">
                <span className="w-2 h-2 rounded bg-[#7fd1ff]"></span>
                <span className="tracking-wider">ALPHA ACADEMY</span>
              </div>
              <h3 className="font-headline-lg text-xl sm:text-2xl text-[#d7e3ff] font-bold">
                Enroll in Alpha Academy
              </h3>
              <p className="text-body-md text-sm sm:text-base text-[#bbcac4] leading-relaxed">
                Ready to learn how software is genuinely designed, tested, and shipped in enterprise production environments? Claim your seat in our upcoming cohort.
              </p>
            </div>

            <button
              onClick={onApplyCohort}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#7fd1ff] text-[#00354a] font-headline-sm text-sm font-bold hover:bg-[#30b8f3] transition-all shadow-[0_0_16px_rgba(127,209,255,0.3)] cursor-pointer"
            >
              <span>Apply for Next Cohort</span>
              <GraduationCap className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
