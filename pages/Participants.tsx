
import React, { useState } from 'react';
import { useApp } from '../App';
import { Participant } from '../types';

const Participants: React.FC = () => {
  const { participants, t } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = participants.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-2xl">
          <span className="text-orange-primary font-bold tracking-widest uppercase text-xs">Vetted Network</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mt-4 mb-4 font-heading tracking-tighter">{t.nav.participants}</h1>
          <p className="text-gray-500 text-xl font-light">Browse candidates processed through the KCB AI-evaluation stack.</p>
        </div>
        <div className="w-full md:w-96 relative">
          <input 
            type="text" 
            placeholder="Search skills or names..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-primary focus:bg-white transition-all text-sm font-medium outline-none"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-32 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">No results found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map(p => (
            <ParticipantCard key={p.id} participant={p} />
          ))}
        </div>
      )}
    </div>
  );
};

const ParticipantCard: React.FC<{ participant: Participant }> = ({ participant }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-[3rem] p-10 hover:shadow-2xl hover:shadow-orange-100/50 transition-all group flex flex-col h-full relative overflow-hidden">
      <div className="flex items-center gap-5 mb-8">
        <div className="relative">
          <img 
            src={participant.profileImage} 
            alt={participant.name} 
            className="w-20 h-20 rounded-3xl object-cover ring-4 ring-gray-50 group-hover:ring-orange-50 transition-all"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full" title="AI Verified"></div>
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-900 font-heading">{participant.name}</h3>
          <p className="text-[10px] font-black text-orange-primary uppercase tracking-[0.2em] mb-1">Elite Candidate</p>
        </div>
      </div>
      
      <p className="text-base text-gray-500 mb-8 leading-relaxed font-light line-clamp-3">
        {participant.background}
      </p>

      <div className="flex flex-wrap gap-2 mb-10 mt-auto">
        {participant.skills.map(s => (
          <span key={s} className="px-3 py-1 bg-gray-50 text-gray-400 rounded-lg text-[9px] font-black uppercase tracking-widest border border-gray-100 group-hover:bg-orange-50 group-hover:text-orange-primary transition-colors">
            {s}
          </span>
        ))}
      </div>

      <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
        <button 
          onClick={() => alert("Resume access is restricted to authorized partners.")}
          className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all"
        >
          View Full Report
          <svg className="w-4 h-4 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Participants;
