import { useState } from 'react';
import { MENTORS_DATA } from '../data/content';
import { Mentor } from '../types';
import { Award, Github, User, BookOpen } from 'lucide-react';

export default function MentorsSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-[#010e25] border-t border-[#3c4a46]/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-label-code text-xs text-[#7fd1ff]">
            <Award className="w-4 h-4 text-[#7fd1ff]" />
            <span className="tracking-wider">ENGINEERS WHO TEACH</span>
          </div>
          <h2 className="text-headline-lg text-[#d7e3ff] font-semibold tracking-tight">
            Active Tech Leads & Mentors
          </h2>
          <p className="text-body-md text-sm sm:text-base text-[#bbcac4] max-w-2xl leading-relaxed">
            At Alpha Academy, you are mentored by practicing senior engineers and security leads from Secure Alpha, not career lecturers.
          </p>
        </div>

        {/* 3 Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MENTORS_DATA.map((mentor) => {
            const hasError = imageErrors[mentor.id];

            return (
              <div
                key={mentor.id}
                className="bg-[#0d1b33] p-6 rounded-xl border border-[#3c4a46]/40 hover:border-[#42dec3]/50 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div className="flex flex-col gap-4">
                  {/* Avatar & Basic Info */}
                  <div className="flex items-center gap-4">
                    {hasError ? (
                      <div className="w-16 h-16 rounded-xl bg-[#112037] border border-[#42dec3]/30 flex items-center justify-center text-[#42dec3] shrink-0 font-bold text-lg font-label-code">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    ) : (
                      <img
                        src={mentor.avatarUrl}
                        alt={mentor.name}
                        onError={() => handleImageError(mentor.id)}
                        className="w-16 h-16 rounded-xl object-cover border border-[#3c4a46]/50 shrink-0 group-hover:border-[#42dec3] transition-colors"
                      />
                    )}

                    <div className="flex flex-col">
                      <h3 className="font-headline-sm text-base sm:text-lg text-[#d7e3ff] font-bold group-hover:text-[#42dec3] transition-colors">
                        {mentor.name}
                      </h3>
                      <span className="font-label-code text-xs text-[#42dec3]">
                        {mentor.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-body-sm text-xs sm:text-sm text-[#bbcac4] leading-relaxed">
                    {mentor.bio}
                  </p>

                  {/* Teaches section */}
                  <div className="flex flex-col gap-1 font-label-code text-xs text-[#b6c7ec] bg-[#112037] p-3 rounded-lg border border-[#3c4a46]/30">
                    <span className="text-[#d7e3ff] font-semibold mb-0.5 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#42dec3]" />
                      Teaches:
                    </span>
                    {mentor.teaches.map((topic) => (
                      <span key={topic} className="text-[#bbcac4]">
                        • {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer credentials and handle */}
                <div className="pt-6 mt-4 border-t border-[#3c4a46]/30 flex items-center justify-between font-label-code text-xs">
                  <span className="text-[#42dec3] font-bold tracking-wider">
                    {mentor.credential}
                  </span>
                  <span className="text-[#85948f] hover:text-[#d7e3ff] transition-colors">
                    [ {mentor.handle} ]
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
