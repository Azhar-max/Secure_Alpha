import { useState, FormEvent } from 'react';
import { Course, ServiceItem, StudentCapstone, CaseStudy } from '../types';
import { 
  X, 
  CheckCircle2, 
  Send, 
  BookOpen, 
  Terminal, 
  ShieldCheck, 
  FileText, 
  Code, 
  ExternalLink, 
  Download, 
  Calendar, 
  Clock, 
  Cpu, 
  Sparkles,
  Layers
} from 'lucide-react';

interface ModalsProps {
  // Project Modal
  isProjectModalOpen: boolean;
  onCloseProjectModal: () => void;

  // Syllabus Modal
  selectedCourseForSyllabus: Course | null;
  onCloseSyllabusModal: () => void;
  onEnrollFromSyllabus: (course: Course) => void;

  // Cohort Application Modal
  selectedCourseForApplication: Course | null;
  prefilledTrackTitle?: string;
  isCohortModalOpen: boolean;
  onCloseCohortModal: () => void;

  // Service Spec Modal
  selectedService: ServiceItem | null;
  onCloseServiceModal: () => void;

  // Capstone Modal
  selectedCapstone: StudentCapstone | null;
  onCloseCapstoneModal: () => void;

  // Case Study Modal
  selectedCaseStudy: CaseStudy | null;
  onCloseCaseStudyModal: () => void;

  // Resources Modal
  isResourcesModalOpen: boolean;
  onCloseResourcesModal: () => void;
}

export default function Modals({
  isProjectModalOpen,
  onCloseProjectModal,
  selectedCourseForSyllabus,
  onCloseSyllabusModal,
  onEnrollFromSyllabus,
  selectedCourseForApplication,
  prefilledTrackTitle,
  isCohortModalOpen,
  onCloseCohortModal,
  selectedService,
  onCloseServiceModal,
  selectedCapstone,
  onCloseCapstoneModal,
  selectedCaseStudy,
  onCloseCaseStudyModal,
  isResourcesModalOpen,
  onCloseResourcesModal
}: ModalsProps) {
  // Form states
  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    organization: '',
    serviceType: 'Software Engineering',
    budget: '$25,000 - $50,000',
    timeline: '3 - 6 Months',
    details: ''
  });
  const [projectSubmitted, setProjectSubmitted] = useState(false);

  const [cohortForm, setCohortForm] = useState({
    name: '',
    email: '',
    track: prefilledTrackTitle || selectedCourseForApplication?.title || 'Full-Stack MERN Architecture',
    experience: 'Academic / Self-Taught',
    goals: ''
  });
  const [cohortSubmitted, setCohortSubmitted] = useState(false);

  // Handle Project Form Submission
  const handleProjectSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProjectSubmitted(true);
    setTimeout(() => {
      // Allow user to view confirmation
    }, 500);
  };

  // Handle Cohort Form Submission
  const handleCohortSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCohortSubmitted(true);
  };

  return (
    <>
      {/* 1. START PROJECT / ARCHITECTURAL BRIEFING MODAL */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0d1b33] border border-[#42dec3]/50 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={onCloseProjectModal}
              className="absolute top-5 right-5 text-[#85948f] hover:text-[#d7e3ff] p-1 rounded-md hover:bg-[#112037] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {projectSubmitted ? (
              <div className="flex flex-col items-center text-center py-10 gap-4 font-label-code">
                <div className="w-14 h-14 rounded-full bg-[#00c2a8]/20 border border-[#42dec3] flex items-center justify-center text-[#42dec3]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-headline-md text-xl text-[#d7e3ff] font-bold">
                  Architectural Briefing Scheduled
                </h3>
                <p className="text-xs sm:text-sm text-[#bbcac4] max-w-md font-sans leading-relaxed">
                  Thank you, <strong className="text-[#42dec3]">{projectForm.name || 'Engineer'}</strong>. Our Lead Cloud Architect will review your specifications and contact <strong className="text-[#7fd1ff]">{projectForm.email}</strong> within 1 business day.
                </p>
                <div className="p-3 bg-[#010e25] rounded-lg border border-[#3c4a46]/40 text-xs text-[#85948f] text-left w-full max-w-md">
                  <div>DISPATCH TICKET: #SA-REQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div>SECURITY CLEARANCE: PUBLIC INTAKE / ENCRYPTED</div>
                  <div>SLA COMMITMENT: UNDER 24 HOURS</div>
                </div>
                <button
                  onClick={() => {
                    setProjectSubmitted(false);
                    onCloseProjectModal();
                  }}
                  className="mt-4 px-6 py-2 rounded-md bg-[#42dec3] text-[#00382f] font-bold text-xs"
                >
                  Close Console
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 border-b border-[#3c4a46]/30 pb-3">
                  <div className="flex items-center gap-2 font-label-code text-xs text-[#42dec3]">
                    <Terminal className="w-4 h-4" />
                    <span>SECURE ALPHA ARCHITECTURAL BRIEFING</span>
                  </div>
                  <h3 className="font-headline-md text-xl text-[#d7e3ff] font-bold">
                    Schedule Technical Consultation
                  </h3>
                  <p className="text-xs text-[#bbcac4]">
                    Provide high-level parameters for your software system, infrastructure, or DevSecOps audit.
                  </p>
                </div>

                <form onSubmit={handleProjectSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#bbcac4]">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={projectForm.name}
                        onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                        placeholder="David Miller"
                        className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#bbcac4]">Corporate Email *</label>
                      <input
                        required
                        type="email"
                        value={projectForm.email}
                        onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                        placeholder="dmiller@enterprise.com"
                        className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#bbcac4]">Primary Discipline</label>
                      <select
                        value={projectForm.serviceType}
                        onChange={(e) => setProjectForm({ ...projectForm, serviceType: e.target.value })}
                        className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none cursor-pointer"
                      >
                        <option>Software Engineering</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Quality Assurance & Testing</option>
                        <option>Cybersecurity & Pen Testing</option>
                        <option>Artificial Intelligence & RAG</option>
                        <option>Data Analytics & Streaming</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#bbcac4]">Budget Horizon</label>
                      <select
                        value={projectForm.budget}
                        onChange={(e) => setProjectForm({ ...projectForm, budget: e.target.value })}
                        className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none cursor-pointer"
                      >
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000 - $150,000</option>
                        <option>$150,000+ (Enterprise)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#bbcac4]">Timeline</label>
                      <select
                        value={projectForm.timeline}
                        onChange={(e) => setProjectForm({ ...projectForm, timeline: e.target.value })}
                        className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none cursor-pointer"
                      >
                        <option>&lt; 1 Month (Urgent Audit)</option>
                        <option>1 - 3 Months</option>
                        <option>3 - 6 Months</option>
                        <option>Long-Term Dedicated Pod</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#bbcac4]">Architecture & Requirements Summary</label>
                    <textarea
                      rows={3}
                      value={projectForm.details}
                      onChange={(e) => setProjectForm({ ...projectForm, details: e.target.value })}
                      placeholder="Briefly describe system load, compliance frameworks (SOC-2, HIPAA), or technical constraints..."
                      className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onCloseProjectModal}
                      className="px-4 py-2 rounded-md bg-[#112037] text-[#bbcac4] hover:text-[#d7e3ff] font-semibold text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-md bg-[#42dec3] text-[#00382f] hover:bg-[#00c2a8] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_12px_rgba(66,222,195,0.3)] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Briefing Request</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. SYLLABUS PREVIEW MODAL */}
      {selectedCourseForSyllabus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0d1b33] border border-[#7fd1ff]/50 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={onCloseSyllabusModal}
              className="absolute top-5 right-5 text-[#85948f] hover:text-[#d7e3ff] p-1 rounded-md hover:bg-[#112037] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 border-b border-[#3c4a46]/30 pb-3">
                <div className="flex items-center gap-2 font-label-code text-xs text-[#7fd1ff]">
                  <BookOpen className="w-4 h-4" />
                  <span>ALPHA ACADEMY CURRICULUM BLUEPRINT</span>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#d7e3ff] font-bold">
                  {selectedCourseForSyllabus.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 font-label-code text-xs text-[#bbcac4] pt-1">
                  <span>Level: <strong className="text-[#42dec3]">{selectedCourseForSyllabus.level}</strong></span>
                  <span>•</span>
                  <span>Duration: <strong className="text-[#7fd1ff]">{selectedCourseForSyllabus.duration}</strong></span>
                  <span>•</span>
                  <span>Format: <strong className="text-[#d7e3ff]">{selectedCourseForSyllabus.format}</strong></span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="font-label-code text-xs text-[#85948f] tracking-wider uppercase font-semibold">
                  MODULES & PRODUCTION LABS
                </span>

                <div className="flex flex-col gap-2.5">
                  {selectedCourseForSyllabus.syllabus.map((item, idx) => (
                    <div key={item.week} className="p-3 bg-[#112037] rounded-lg border border-[#3c4a46]/30 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-code text-xs text-[#42dec3] font-bold">
                          {item.week}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-[#1c2a42] text-[#7fd1ff] font-label-code text-[10px]">
                          LAB #{idx + 1}
                        </span>
                      </div>
                      <strong className="text-xs sm:text-sm text-[#d7e3ff] block">
                        {item.topic}
                      </strong>
                      <div className="text-[11px] font-label-code text-[#bbcac4] flex items-center gap-1.5 pt-0.5">
                        <span className="text-[#42dec3]">&gt;_ LAB TASK:</span>
                        <span>{item.lab}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#010e25] rounded-lg border border-[#3c4a46]/40 flex items-center justify-between">
                <div>
                  <span className="text-lg text-[#d7e3ff] font-bold block">${selectedCourseForSyllabus.price}</span>
                  <span className="text-[11px] font-label-code text-[#85948f]">Includes 1-on-1 Code Reviews</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      alert(`Downloading official Alpha Academy syllabus specification: /syllabi/${encodeURIComponent(selectedCourseForSyllabus.id)}.pdf`);
                    }}
                    className="px-3 py-2 rounded-md bg-[#112037] text-[#bbcac4] hover:text-[#d7e3ff] text-xs font-semibold flex items-center gap-1 border border-[#3c4a46]/40"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>

                  <button
                    onClick={() => onEnrollFromSyllabus(selectedCourseForSyllabus)}
                    className="px-4 py-2 rounded-md bg-[#42dec3] text-[#00382f] hover:bg-[#00c2a8] font-bold text-xs sm:text-sm cursor-pointer"
                  >
                    Enroll in Cohort
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. COHORT APPLICATION MODAL */}
      {isCohortModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0d1b33] border border-[#7fd1ff]/50 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={onCloseCohortModal}
              className="absolute top-5 right-5 text-[#85948f] hover:text-[#d7e3ff] p-1 rounded-md hover:bg-[#112037] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {cohortSubmitted ? (
              <div className="flex flex-col items-center text-center py-8 gap-4 font-label-code">
                <div className="w-14 h-14 rounded-full bg-[#7fd1ff]/20 border border-[#7fd1ff] flex items-center justify-center text-[#7fd1ff]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-headline-md text-xl text-[#d7e3ff] font-bold">
                  Cohort Application Received
                </h3>
                <p className="text-xs sm:text-sm text-[#bbcac4] font-sans leading-relaxed">
                  Welcome to Alpha Academy. We have dispatched your diagnostic onboarding packet to <strong className="text-[#42dec3]">{cohortForm.email}</strong>.
                </p>
                <div className="p-3 bg-[#010e25] rounded-lg border border-[#3c4a46]/40 text-xs text-[#85948f] text-left w-full">
                  <div>TRACK: {cohortForm.track}</div>
                  <div>COHORT START: 1ST MONDAY OF NEXT MONTH</div>
                  <div>SEATS REMAINING: 4 / 20</div>
                </div>
                <button
                  onClick={() => {
                    setCohortSubmitted(false);
                    onCloseCohortModal();
                  }}
                  className="mt-4 px-6 py-2 rounded-md bg-[#7fd1ff] text-[#00354a] font-bold text-xs"
                >
                  Return to Ecosystem
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 border-b border-[#3c4a46]/30 pb-3">
                  <div className="flex items-center gap-2 font-label-code text-xs text-[#7fd1ff]">
                    <Sparkles className="w-4 h-4" />
                    <span>ALPHA ACADEMY APPLICATION</span>
                  </div>
                  <h3 className="font-headline-md text-xl text-[#d7e3ff] font-bold">
                    Claim Your Cohort Seat
                  </h3>
                  <p className="text-xs text-[#bbcac4]">
                    Cohorts are capped at 20 engineers to maintain rigorous code review standards.
                  </p>
                </div>

                <form onSubmit={handleCohortSubmit} className="flex flex-col gap-3.5 text-xs sm:text-sm">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#bbcac4]">Selected Track *</label>
                    <input
                      required
                      type="text"
                      value={cohortForm.track}
                      onChange={(e) => setCohortForm({ ...cohortForm, track: e.target.value })}
                      className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#42dec3] font-semibold focus:border-[#42dec3] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#bbcac4]">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={cohortForm.name}
                      onChange={(e) => setCohortForm({ ...cohortForm, name: e.target.value })}
                      placeholder="Sarah Connor"
                      className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#bbcac4]">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={cohortForm.email}
                      onChange={(e) => setCohortForm({ ...cohortForm, email: e.target.value })}
                      placeholder="sarah@terminal.io"
                      className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#bbcac4]">Current Baseline Experience</label>
                    <select
                      value={cohortForm.experience}
                      onChange={(e) => setCohortForm({ ...cohortForm, experience: e.target.value })}
                      className="bg-[#112037] border border-[#3c4a46]/50 rounded-lg p-2.5 text-[#d7e3ff] focus:border-[#42dec3] focus:outline-none"
                    >
                      <option>Total Beginner</option>
                      <option>Academic / Self-Taught</option>
                      <option>Junior Developer (1-2 years)</option>
                      <option>Experienced Engineer Career Switching</option>
                    </select>
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={onCloseCohortModal}
                      className="px-4 py-2 rounded-md bg-[#112037] text-[#bbcac4] hover:text-[#d7e3ff] text-xs font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-md bg-[#7fd1ff] text-[#00354a] hover:bg-[#30b8f3] font-bold text-xs sm:text-sm cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. SERVICE SPECIFICATION MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0d1b33] border border-[#42dec3]/50 rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={onCloseServiceModal}
              className="absolute top-5 right-5 text-[#85948f] hover:text-[#d7e3ff] p-1 rounded-md hover:bg-[#112037] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 border-b border-[#3c4a46]/30 pb-3">
                <span className="font-label-code text-xs text-[#42dec3] font-semibold uppercase">
                  ENGINEERING CORE SPECIFICATION
                </span>
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#d7e3ff] font-bold">
                  {selectedService.title}
                </h3>
                <span className="font-label-code text-xs text-[#42dec3]">
                  {selectedService.sla}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-[#bbcac4] leading-relaxed">
                {selectedService.description}
              </div>

              <div className="p-4 bg-[#112037] rounded-lg border border-[#3c4a46]/40 flex flex-col gap-2">
                <span className="font-label-code text-xs text-[#7fd1ff] font-semibold">
                  PRODUCTION ARCHITECTURE TOPOLOGY
                </span>
                <p className="text-xs text-[#d7e3ff] leading-relaxed">
                  {selectedService.architectureDetails}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 font-label-code text-xs text-[#b6c7ec]">
                {selectedService.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-[#010e25] border border-[#3c4a46]/40">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onCloseServiceModal}
                  className="px-5 py-2 rounded-md bg-[#42dec3] text-[#00382f] font-bold text-xs"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. CASE STUDY DEEP DIVE MODAL */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0d1b33] border border-[#42dec3]/50 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={onCloseCaseStudyModal}
              className="absolute top-5 right-5 text-[#85948f] hover:text-[#d7e3ff] p-1 rounded-md hover:bg-[#112037] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 border-b border-[#3c4a46]/30 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#112037] text-[#42dec3] font-label-badge text-xs rounded border border-[#42dec3]/30">
                    {selectedCaseStudy.domain}
                  </span>
                  <span className="font-label-code text-xs text-[#85948f]">
                    {selectedCaseStudy.code}
                  </span>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#d7e3ff] font-bold mt-1">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#42dec3] font-medium">
                  {selectedCaseStudy.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-[#112037] p-3 rounded-lg border border-[#3c4a46]/40">
                  <div className="text-xl text-[#42dec3] font-bold">{selectedCaseStudy.metrics.primaryValue}</div>
                  <div className="text-xs text-[#85948f] font-label-code">{selectedCaseStudy.metrics.primaryLabel}</div>
                </div>
                <div className="bg-[#112037] p-3 rounded-lg border border-[#3c4a46]/40">
                  <div className="text-xl text-[#7fd1ff] font-bold">{selectedCaseStudy.metrics.secondaryValue}</div>
                  <div className="text-xs text-[#85948f] font-label-code">{selectedCaseStudy.metrics.secondaryLabel}</div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="bg-[#112037] p-3.5 rounded-lg border border-[#3c4a46]/30 text-xs sm:text-sm text-[#bbcac4]">
                  <strong className="text-[#d7e3ff] block mb-1">Production Challenge:</strong>
                  {selectedCaseStudy.challenge}
                </div>
                <div className="bg-[#112037] p-3.5 rounded-lg border border-[#3c4a46]/30 text-xs sm:text-sm text-[#bbcac4]">
                  <strong className="text-[#d7e3ff] block mb-1">Architectural Solution:</strong>
                  {selectedCaseStudy.solution}
                </div>
              </div>

              <div className="bg-[#010e25] p-3 rounded-lg border border-[#3c4a46]/40 font-label-code text-xs text-[#7fd1ff] flex items-center justify-between">
                <span>{selectedCaseStudy.flowDiagram}</span>
                <CheckCircle2 className="w-4 h-4 text-[#42dec3]" />
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-label-code text-[#b6c7ec]">
                <span>TECH STACK:</span>
                {selectedCaseStudy.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-[#112037] border border-[#3c4a46]/30">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. RESOURCES / KNOWLEDGE BASE MODAL */}
      {isResourcesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0d1b33] border border-[#7fd1ff]/50 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={onCloseResourcesModal}
              className="absolute top-5 right-5 text-[#85948f] hover:text-[#d7e3ff] p-1 rounded-md hover:bg-[#112037] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 border-b border-[#3c4a46]/30 pb-3">
                <div className="flex items-center gap-2 font-label-code text-xs text-[#7fd1ff]">
                  <FileText className="w-4 h-4" />
                  <span>SECURE ALPHA ARCHITECTURAL VAULT</span>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#d7e3ff] font-bold">
                  Technical Resources & Standards
                </h3>
                <p className="text-xs text-[#bbcac4]">
                  Whitepapers, security stances, and system architecture blueprints published by our senior research staff.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  {
                    title: 'Threat Intelligence: Zero-Trust gRPC Service Mesh Hardening',
                    format: 'PDF • Whitepaper',
                    tag: 'CYBERSECURITY',
                    desc: 'Mutual TLS certificate distribution and micro-segmentation strategies for preventing lateral movement.'
                  },
                  {
                    title: 'Production Blueprints: Distributed Raft Consensus in High-Scale Systems',
                    format: 'ARCH SPEC • 24 Pages',
                    tag: 'SYSTEMS ARCH',
                    desc: 'Formal verification and latency optimization under network partitioning scenarios.'
                  },
                  {
                    title: 'Alpha Academy Curriculum Methodology: From Syntax to Production Readiness',
                    format: 'ACADEMIC PAPER • 2024',
                    tag: 'EDUCATION',
                    desc: 'Empirical analysis on bridging computer science university gaps with project-based containerized labs.'
                  },
                  {
                    title: 'SOC-2 Type II Compliance & ISO 27001 Security Standard Overview',
                    format: 'SECURITY STANCE',
                    tag: 'COMPLIANCE',
                    desc: 'Continuous audit controls, automated SBOM scanners, and cryptographically verified release artifacts.'
                  }
                ].map((doc) => (
                  <div key={doc.title} className="p-3.5 bg-[#112037] rounded-lg border border-[#3c4a46]/30 flex flex-col gap-1.5 hover:border-[#42dec3]/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="px-1.5 py-0.5 rounded bg-[#1c2a42] text-[#42dec3] font-label-badge text-[10px]">
                        {doc.tag}
                      </span>
                      <span className="font-label-code text-[11px] text-[#85948f]">
                        {doc.format}
                      </span>
                    </div>
                    <strong className="text-xs sm:text-sm text-[#d7e3ff]">
                      {doc.title}
                    </strong>
                    <p className="text-xs text-[#bbcac4]">
                      {doc.desc}
                    </p>
                    <div className="flex items-center justify-end pt-1">
                      <button
                        onClick={() => alert(`Accessing Secure Alpha Research Document: "${doc.title}"`)}
                        className="text-xs font-label-code text-[#7fd1ff] hover:text-[#c4e7ff] flex items-center gap-1 cursor-pointer"
                      >
                        <span>[ Download Technical Brief ]</span>
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. CAPSTONE LIVE SANDBOX / REVIEW MODAL */}
      {selectedCapstone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0d1b33] border border-[#42dec3]/50 rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={onCloseCapstoneModal}
              className="absolute top-5 right-5 text-[#85948f] hover:text-[#d7e3ff] p-1 rounded-md hover:bg-[#112037] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 border-b border-[#3c4a46]/30 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#112037] text-[#42dec3] font-label-badge text-xs rounded border border-[#42dec3]/30">
                    {selectedCapstone.badge}
                  </span>
                  <span className="font-label-code text-xs text-[#85948f]">
                    {selectedCapstone.year}
                  </span>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#d7e3ff] font-bold mt-1">
                  {selectedCapstone.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#42dec3]">
                  {selectedCapstone.subtitle}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#bbcac4] leading-relaxed">
                {selectedCapstone.description}
              </div>

              <div className="bg-[#112037] p-3.5 rounded-lg border border-[#3c4a46]/40 font-label-code text-xs text-[#b6c7ec]">
                <div className="text-[#d7e3ff] font-semibold">Author: {selectedCapstone.author}</div>
                <div className="text-[#85948f] mt-0.5">{selectedCapstone.authorOutcome}</div>
              </div>

              <div className="flex flex-wrap gap-1.5 font-label-code text-xs text-[#b6c7ec]">
                {selectedCapstone.techTags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#010e25] border border-[#3c4a46]/40">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="p-3 bg-[#010e25] rounded-lg border border-[#42dec3]/30 font-label-code text-xs text-[#42dec3]">
                <div>STATUS: LIVE PRODUCTION TESTBED</div>
                <div>HEALTH: PASS (99.98% UPTIME)</div>
                <div>TEST COVERAGE: 96.4% IN CI PIPELINE</div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <a
                  href={selectedCapstone.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md bg-[#112037] text-[#d7e3ff] hover:text-[#42dec3] text-xs font-label-code border border-[#3c4a46]/40"
                >
                  View GitHub Spec
                </a>
                <button
                  onClick={() => alert(`Launching sandbox environment for ${selectedCapstone.title}... Running simulated microservices on port 8080.`)}
                  className="px-4 py-2 rounded-md bg-[#42dec3] text-[#00382f] font-bold text-xs"
                >
                  Launch Sandbox
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
