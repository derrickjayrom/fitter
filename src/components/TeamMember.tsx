import React from 'react';
import { TeamMember as TeamMemberType } from '../types';
import { Award } from 'lucide-react';

interface TeamMemberProps {
  member: TeamMemberType;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="bg-workshop-900 border border-workshop-800 rounded overflow-hidden flex flex-col justify-between transition-all hover:border-workshop-600 shadow-sm">
      {/* Portrait Image */}
      <div className="relative h-72 w-full overflow-hidden bg-workshop-950">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-workshop-900 via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-4 left-5 right-5">
          <span className="text-xs font-bold uppercase tracking-wider text-crimson-400 block mb-1">
            {member.role}
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Bio & Credentials */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {member.bio}
        </p>

        <div className="pt-4 border-t border-workshop-800">
          <span className="text-xs font-bold uppercase tracking-wider text-workshop-400 block mb-2.5">
            Qualifications & Certifications
          </span>
          <ul className="space-y-2 text-sm text-slate-200">
            {member.qualifications.map((q, idx) => (
              <li key={idx} className="flex items-center text-xs sm:text-sm">
                <Award className="w-4 h-4 text-crimson-500 mr-2 shrink-0" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
