
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Language, Participant, Inquiry } from './types';
import { LANGUAGES, TRANSLATIONS, MOCK_PARTICIPANTS, MOCK_INQUIRIES } from './constants';
import Home from './pages/Home';
import Participants from './pages/Participants';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import AITools from './pages/AITools';

// --- Contexts ---
interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
  participants: Participant[];
  inquiries: Inquiry[];
  addInquiry: (i: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  updateInquiry: (id: string, updates: Partial<Inquiry>) => void;
  updateParticipant: (p: Participant) => void;
  deleteParticipant: (id: string) => void;
  addParticipant: (p: Omit<Participant, 'id'>) => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

// --- Main App Component ---
const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [participants, setParticipants] = useState<Participant[]>(MOCK_PARTICIPANTS);
  const [inquiries, setInquiries] = useState<Inquiry[]>(MOCK_INQUIRIES);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const t = TRANSLATIONS[lang];

  const addInquiry = (inq: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const newInq: Inquiry = {
      ...inq,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
      status: 'new'
    };
    setInquiries(prev => [newInq, ...prev]);
  };

  const updateInquiry = (id: string, updates: Partial<Inquiry>) => {
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, ...updates } : i));
  };

  const addParticipant = (p: Omit<Participant, 'id'>) => {
    const newP = { ...p, id: Math.random().toString(36).substr(2, 9) };
    setParticipants(prev => [...prev, newP]);
  };

  const updateParticipant = (p: Participant) => {
    setParticipants(prev => prev.map(item => item.id === p.id ? p : item));
  };

  const deleteParticipant = (id: string) => {
    setParticipants(prev => prev.filter(p => p.id !== id));
  };

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AppContext.Provider value={{
      lang, setLang, t, participants, inquiries, addInquiry, 
      updateInquiry, updateParticipant, deleteParticipant, 
      addParticipant, isLoggedIn, login, logout
    }}>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/participants" element={<Participants />} />
              <Route path="/tools" element={<AITools />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={isLoggedIn ? <Admin /> : <Login />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppContext.Provider>
  );
};

// --- Internal Components ---

const Navbar: React.FC = () => {
  const { lang, setLang, t, isLoggedIn, logout } = useApp();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-orange-primary font-semibold' : 'text-gray-600 font-medium';

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="px-2.5 py-1 bg-orange-primary rounded-lg flex items-center justify-center text-white font-black text-lg tracking-tighter">KCB</div>
        <span className="text-xl font-black tracking-tight text-gray-900 font-heading">Korea Career Bridge</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className={`transition-all hover:text-orange-primary ${isActive('/')}`}>{t.nav.home}</Link>
        <Link to="/participants" className={`transition-all hover:text-orange-primary ${isActive('/participants')}`}>{t.nav.participants}</Link>
        <Link to="/tools" className={`transition-all hover:text-orange-primary ${isActive('/tools')}`}>{t.nav.aiTools}</Link>
        <Link to="/contact" className={`transition-all hover:text-orange-primary ${isActive('/contact')}`}>{t.nav.contact}</Link>
        <Link to="/admin" className={`transition-all hover:text-orange-primary ${isActive('/admin')}`}>{t.nav.admin}</Link>
      </div>

      <div className="flex items-center gap-4">
        <select 
          value={lang} 
          onChange={(e) => setLang(e.target.value as Language)}
          className="bg-gray-50 text-[10px] font-bold border-none rounded-lg px-3 py-1.5 outline-none appearance-none cursor-pointer uppercase tracking-widest"
        >
          {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
        {isLoggedIn && (
          <button onClick={logout} className="text-sm font-bold text-red-500 hover:text-red-600">
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-gray-50 border-t border-gray-100 py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="px-2 py-0.5 bg-orange-primary rounded-lg flex items-center justify-center text-white font-black text-sm tracking-tighter">KCB</div>
          <span className="font-black text-gray-900 text-lg font-heading">Korea Career Bridge</span>
        </div>
        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
          Bridging the gap between global talent and industry excellence through innovative placement strategies and proprietary AI ecosystems.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-widest font-heading">Platforms</h4>
        <ul className="space-y-4 text-sm font-medium text-gray-500">
          <li><Link to="/" className="hover:text-orange-primary transition-colors">Home</Link></li>
          <li><Link to="/tools" className="hover:text-orange-primary transition-colors">AI Platforms</Link></li>
          <li><Link to="/participants" className="hover:text-orange-primary transition-colors">Talent Database</Link></li>
          <li><Link to="/contact" className="hover:text-orange-primary transition-colors">Partner with Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-widest font-heading">Connect</h4>
        <ul className="space-y-4 text-sm font-medium text-gray-500">
          <li>info@koreacareerbridge.org</li>
          <li>+82 (02) 1234-5678</li>
          <li>Gangnam, Seoul, ROK</li>
        </ul>
      </div>
    </div>
    <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-xs font-medium text-gray-400">
        &copy; 2024 KCB (Korea Career Bridge). All rights reserved.
      </div>
      <div className="flex gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
        <a href="#" className="hover:text-gray-600">Privacy Policy</a>
        <a href="#" className="hover:text-gray-600">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default App;
