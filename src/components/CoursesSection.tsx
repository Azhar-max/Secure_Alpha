import { useState } from 'react';
import { COURSES_DATA } from '../data/content';
import { Course, TrackCategory } from '../types';
import { Star, Clock, Beaker, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface CoursesSectionProps {
  onPreviewSyllabus: (course: Course) => void;
  onApplyCourse: (course: Course) => void;
}

export default function CoursesSection({ onPreviewSyllabus, onApplyCourse }: CoursesSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<TrackCategory>('all');

  const filterTabs: { id: TrackCategory; label: string }[] = [
    { id: 'all', label: 'All Tracks' },
    { id: 'web', label: 'Web & MERN' },
    { id: 'python', label: 'Python & AI' },
    { id: 'sqa', label: 'SQA Automation' },
    { id: 'security', label: 'Cybersecurity' }
  ];

  const filteredCourses = selectedFilter === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((course) => course.category === selectedFilter);

  return (
    <section id="courses" className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#010e25] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-2">
            <span className="font-label-code text-xs text-[#7fd1ff] tracking-wider uppercase">
              PRODUCTION-GRADE CURRICULUMS
            </span>
            <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
              Popular Technical Courses
            </h2>
            <p className="text-body-md text-sm sm:text-base text-[#bbcac4] max-w-xl leading-relaxed">
              Each course is paired with live instructor sessions, rigorous weekly assignments, and verified cryptographic certification upon capstone defense.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 bg-[#112037] p-1.5 rounded-lg border border-[#3c4a46]/40 font-label-code text-xs self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#42dec3] text-[#00382f] font-semibold shadow-md'
                    : 'text-[#bbcac4] hover:text-[#d7e3ff] hover:bg-[#1c2a42]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isTeal = course.category === 'web' || course.category === 'sqa' || course.category === 'security';
            const accentColor = isTeal ? '#42dec3' : '#7fd1ff';

            return (
              <div
                key={course.id}
                className="bg-[#0d1b33] p-6 rounded-xl border border-[#3c4a46]/40 hover:border-[#42dec3]/60 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div className="flex flex-col gap-3">
                  {/* Meta badge & rating */}
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-[#1c2a42] text-[#42dec3] font-label-badge text-[10px] rounded border border-[#42dec3]/20">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-[#7fd1ff] font-label-code text-xs">
                      <Star className="w-3.5 h-3.5 fill-[#7fd1ff]" />
                      <span>{course.rating.toFixed(1)} / 5.0 ({course.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-headline-sm text-lg sm:text-xl text-[#d7e3ff] font-bold group-hover:text-[#42dec3] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-body-sm text-xs sm:text-sm text-[#bbcac4] leading-relaxed">
                    {course.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2.5 font-label-code text-xs pt-2">
                    <div className="flex items-center gap-1.5 text-[#bbcac4]">
                      <Clock className="w-4 h-4 text-[#42dec3] shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#bbcac4]">
                      <Beaker className="w-4 h-4 text-[#42dec3] shrink-0" />
                      <span>{course.deliverables}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#bbcac4]">
                      <Users className="w-4 h-4 text-[#42dec3] shrink-0" />
                      <span>{course.format}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#bbcac4]">
                      <CheckCircle className="w-4 h-4 text-[#42dec3] shrink-0" />
                      <span>{course.certification}</span>
                    </div>
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="pt-6 mt-4 border-t border-[#3c4a46]/30 flex items-center justify-between">
                  <div>
                    <span className="font-headline-md text-2xl text-[#d7e3ff] font-bold">
                      ${course.price}
                    </span>
                    <span className="font-label-code text-[11px] text-[#85948f] block">
                      Full Tuition
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onPreviewSyllabus(course)}
                      className="px-3 py-1.5 rounded-md bg-[#1c2a42] text-[#42dec3] hover:bg-[#27354d] font-semibold text-xs transition-colors border border-[#42dec3]/30 cursor-pointer"
                    >
                      Curriculum Preview
                    </button>
                    <button
                      onClick={() => onApplyCourse(course)}
                      className="px-3 py-1.5 rounded-md bg-[#00c2a8] text-[#00382f] hover:bg-[#42dec3] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
