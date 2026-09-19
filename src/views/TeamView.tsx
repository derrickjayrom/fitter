import React from 'react';
import { TEAM_DATA } from '../data/initialData';
import { TeamMember } from '../components/TeamMember';
import { ContactCTA } from '../components/ContactCTA';
import { Users, Award, ShieldCheck } from 'lucide-react';

export const TeamView: React.FC = () => {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded">
          <Users className="w-4 h-4" />
          <span>Workshop Technicians & Leadership</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Experienced Technicians. Modern Equipment.
        </h1>
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
          Our workshop is staffed by certified professionals with specialized training across Japanese, European, and American automotive engineering systems. We invest continuously in technician skills and diagnostic tooling.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_DATA.map(member => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>

      {/* Quality Standards Callout */}
      <div className="bg-workshop-900 border border-workshop-800 p-10 rounded grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300">
        <div className="flex items-start space-x-4">
          <Award className="w-6 h-6 text-crimson-500 shrink-0 mt-1" />
          <div className="space-y-1.5">
            <h4 className="text-lg font-bold text-white">Continuous Skill Training</h4>
            <p className="text-sm sm:text-base leading-relaxed">Our technicians participate in regular electronic diagnostic and powertrain training modules.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <ShieldCheck className="w-6 h-6 text-crimson-500 shrink-0 mt-1" />
          <div className="space-y-1.5">
            <h4 className="text-lg font-bold text-white">Quality Control Sign-Off</h4>
            <p className="text-sm sm:text-base leading-relaxed">Every vehicle undergoes a secondary supervisor road test before customer handover.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Users className="w-6 h-6 text-crimson-500 shrink-0 mt-1" />
          <div className="space-y-1.5">
            <h4 className="text-lg font-bold text-white">Direct Advisor Access</h4>
            <p className="text-sm sm:text-base leading-relaxed">You can speak directly with the technician or service advisor managing your vehicle repair.</p>
          </div>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
};
