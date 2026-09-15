/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import PrinciplesSection from './components/PrinciplesSection';
import AcademySection from './components/AcademySection';
import CoursesSection from './components/CoursesSection';
import LearningPathsSection from './components/LearningPathsSection';
import SkillsAssessmentSection from './components/SkillsAssessmentSection';
import CapstonesSection from './components/CapstonesSection';
import MentorsSection from './components/MentorsSection';
import VerificationSection from './components/VerificationSection';
import Footer from './components/Footer';
import Modals from './components/Modals';

import { Course, ServiceItem, StudentCapstone, CaseStudy } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Modal State Management
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isResourcesModalOpen, setIsResourcesModalOpen] = useState(false);
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState<Course | null>(null);
  const [selectedCourseForApplication, setSelectedCourseForApplication] = useState<Course | null>(null);
  const [prefilledTrackTitle, setPrefilledTrackTitle] = useState<string>('');
  const [isCohortModalOpen, setIsCohortModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCapstone, setSelectedCapstone] = useState<StudentCapstone | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'engineering', 'portfolio', 'academy', 'courses', 'learning-paths', 'assessment', 'verification'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenAssessment = () => {
    scrollToSection('assessment');
  };

  const handlePreviewSyllabus = (course: Course) => {
    setSelectedCourseForSyllabus(course);
  };

  const handleApplyCourse = (course: Course) => {
    setSelectedCourseForApplication(course);
    setPrefilledTrackTitle(course.title);
    setIsCohortModalOpen(true);
  };

  const handleApplyForRecommended = (pathTitle: string) => {
    setPrefilledTrackTitle(pathTitle);
    setIsCohortModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#04132a] text-[#d7e3ff] flex flex-col selection:bg-[#42dec3]/30 selection:text-[#65fade]">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
        onOpenAssessment={handleOpenAssessment}
        onOpenResources={() => setIsResourcesModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main className="w-full pt-16 sm:pt-20 flex-1 flex flex-col">
        {/* SECTION 1: HERO SECTION */}
        <HeroSection
          onExploreServices={() => scrollToSection('engineering')}
          onExploreAcademy={() => scrollToSection('academy')}
          onTakeAssessment={handleOpenAssessment}
        />

        {/* SECTION 2: SECURE ALPHA ENGINEERING DIVISION */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* SECTION 3: PORTFOLIO & CASE STUDIES */}
        <PortfolioSection
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* SECTION 4: WHY SECURE ALPHA (Engineering Principles) */}
        <PrinciplesSection />

        {/* SECTION 5: ALPHA ACADEMY DIVISION */}
        <AcademySection />

        {/* SECTION 6: POPULAR COURSES & SYSTEM */}
        <CoursesSection
          onPreviewSyllabus={handlePreviewSyllabus}
          onApplyCourse={handleApplyCourse}
        />

        {/* SECTION 7: CAREER-ORIENTED LEARNING PATHS */}
        <LearningPathsSection />

        {/* SECTION 8: FREE SKILLS ASSESSMENT (High-Conversion Interactive Feature) */}
        <SkillsAssessmentSection
          onApplyForRecommended={handleApplyForRecommended}
        />

        {/* SECTION 9: STUDENT PRODUCTION PROJECTS SHOWCASE */}
        <CapstonesSection
          onOpenCapstoneModal={(capstone) => setSelectedCapstone(capstone)}
        />

        {/* SECTION 10: VERIFIED INSTRUCTORS */}
        <MentorsSection />

        {/* SECTION 11: CERTIFICATE VERIFICATION BANNER & FINAL CTA */}
        <VerificationSection
          onScheduleBriefing={() => setIsProjectModalOpen(true)}
          onApplyCohort={() => {
            setPrefilledTrackTitle('Alpha Academy Next Cohort');
            setIsCohortModalOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
        onOpenResources={() => setIsResourcesModalOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Interactive Modals & Consoles */}
      <Modals
        isProjectModalOpen={isProjectModalOpen}
        onCloseProjectModal={() => setIsProjectModalOpen(false)}
        selectedCourseForSyllabus={selectedCourseForSyllabus}
        onCloseSyllabusModal={() => setSelectedCourseForSyllabus(null)}
        onEnrollFromSyllabus={(course) => {
          setSelectedCourseForSyllabus(null);
          handleApplyCourse(course);
        }}
        selectedCourseForApplication={selectedCourseForApplication}
        prefilledTrackTitle={prefilledTrackTitle}
        isCohortModalOpen={isCohortModalOpen}
        onCloseCohortModal={() => {
          setIsCohortModalOpen(false);
          setSelectedCourseForApplication(null);
        }}
        selectedService={selectedService}
        onCloseServiceModal={() => setSelectedService(null)}
        selectedCapstone={selectedCapstone}
        onCloseCapstoneModal={() => setSelectedCapstone(null)}
        selectedCaseStudy={selectedCaseStudy}
        onCloseCaseStudyModal={() => setSelectedCaseStudy(null)}
        isResourcesModalOpen={isResourcesModalOpen}
        onCloseResourcesModal={() => setIsResourcesModalOpen(false)}
      />
    </div>
  );
}
