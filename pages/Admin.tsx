
import React, { useState } from 'react';
import { useApp } from '../App';
import { Inquiry, Participant } from '../types';

const Admin: React.FC = () => {
  const { inquiries, participants, updateInquiry, deleteParticipant, addParticipant, t } = useApp();
  const [activeTab, setActiveTab] = useState<'inquiries' | 'participants'>('inquiries');
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">{t.admin.title}</h1>
          <p className="text-gray-500">Internal management portal.</p>
        </div>
        <div className="flex p-1 bg-gray-100 rounded-2xl">
          <button 
            onClick={() => setActiveTab('inquiries')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'inquiries' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {t.admin.inquiries}
          </button>
          <button 
            onClick={() => setActiveTab('participants')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'participants' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {t.admin.manageParticipants}
          </button>
        </div>
      </div>

      {activeTab === 'inquiries' ? (
        <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Client</th>
                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Message</th>
                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {inquiries.map(inq => (
                <tr key={inq.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="font-bold text-gray-900">{inq.name}</div>
                    <div className="text-xs text-gray-500">{inq.company}</div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">{inq.message}</p>
                  </td>
                  <td className="px-8 py-6 text-sm text-gray-500">{inq.date}</td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      inq.status === 'new' ? 'bg-orange-50 text-orange-500' : 
                      inq.status === 'read' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'
                    }`}>
                      {inq.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button 
                      onClick={() => updateInquiry(inq.id, { status: 'read' })}
                      className="text-gray-400 hover:text-orange-primary transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button 
              onClick={() => setIsAdding(true)}
              className="px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-gray-800 transition-colors"
            >
              Add Participant
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participants.map(p => (
              <div key={p.id} className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <img src={p.profileImage} className="w-12 h-12 rounded-xl object-cover" />
                  <button 
                    onClick={() => deleteParticipant(p.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{p.name}</h4>
                <p className="text-xs text-gray-500 mb-4 truncate">{p.background}</p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex gap-2">
                  <button className="text-[10px] font-bold text-orange-primary uppercase tracking-widest">Edit Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isAdding && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[2rem] p-10 max-w-lg w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">New Participant</h3>
            <div className="space-y-4">
              <input placeholder="Full Name" className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-orange-primary" />
              <textarea placeholder="Background & Experience" rows={3} className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-orange-primary" />
              <input placeholder="Skills (comma separated)" className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-orange-primary" />
              <div className="flex gap-4 pt-4">
                <button onClick={() => setIsAdding(false)} className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-2xl font-bold">Cancel</button>
                <button onClick={() => { setIsAdding(false); alert("Success (Demo)"); }} className="flex-1 py-3 bg-orange-primary text-white rounded-2xl font-bold shadow-lg shadow-orange-100">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
