
import React from 'react';
import { useApp } from '../App';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-white px-6 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-orange-50 rounded-full blur-[120px] -z-10 opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-gray-50 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-5xl text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Empowering Global Excellence
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8 font-heading">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/participants" className="w-full sm:w-auto px-10 py-5 bg-orange-primary text-white rounded-full font-bold shadow-2xl shadow-orange-100 hover:scale-105 transition-transform">
              {t.hero.cta}
            </Link>
            <Link to="/tools" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-100 text-gray-900 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm">
              Discover AI Platforms
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features Highlight Section */}
      <section className="py-32 bg-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 leading-tight">
                AI Driven. <br/>
                <span className="text-orange-primary italic">Human Centered.</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                KCB integrates four core AI engines to prepare participants for the rigorous standards of Korean corporate culture and the fast-paced global market.
              </p>
            </div>
            <Link to="/tools" className="group flex items-center gap-3 text-orange-primary font-bold tracking-widest uppercase text-sm border-b-2 border-orange-primary pb-2 hover:gap-5 transition-all">
              Learn about our stack
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Resume Architect", 
                desc: "AI-powered editor matching Korean corporate and ATS standards.",
                num: "01"
              },
              { 
                title: "Interview Simulator", 
                desc: "Mock evaluations for communication, body language, and delivery.",
                num: "02"
              },
              { 
                title: "Learning Paths", 
                desc: "Personalized progression backed by 100,000+ coaching data points.",
                num: "03"
              },
              { 
                title: "Culture Engine", 
                desc: "Fit analysis identifying workplace style gaps and adaptation strategies.",
                num: "04"
              }
            ].map((f, i) => (
              <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-orange-primary transition-all duration-500 hover:scale-105">
                <div className="text-3xl font-black mb-8 text-white/20 group-hover:text-white/40 font-heading tracking-tighter">
                  {f.num}
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-white">{f.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-6xl font-black text-gray-900 mb-2 font-heading tracking-tighter">500+</div>
            <div className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">Candidates Evaluated</div>
          </div>
          <div>
            <div className="text-6xl font-black text-gray-900 mb-2 font-heading tracking-tighter">100k+</div>
            <div className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">Coaching Data Points</div>
          </div>
          <div>
            <div className="text-6xl font-black text-gray-900 mb-2 font-heading tracking-tighter">95%</div>
            <div className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">Placement Success</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-5xl font-black text-gray-900 mb-6 font-heading">{t.features.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">{t.features.subtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: "Verified Talent", 
              desc: "Every participant undergoes a multi-stage AI and human screening process to ensure technical proficiency.",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            },
            { 
              title: "Global Reach", 
              desc: "Access a diverse pool of international candidates from top-tier universities and global research hubs.",
              icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9" 
            },
            { 
              title: "Cultural Synergy", 
              desc: "Our proprietary Cultural Fit Engine ensures that international hires thrive in the local ecosystem.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z" 
            }
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-orange-primary mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-sm px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section with new styling */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-orange-primary rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl shadow-orange-200">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
           <div className="relative z-10">
             <h2 className="text-5xl md:text-7xl font-black mb-8 font-heading tracking-tighter">Revolutionize Your Workforce</h2>
             <p className="text-xl md:text-2xl mb-12 font-light text-orange-50 max-w-2xl mx-auto">
               Join 40+ leading institutions utilizing the KCB platform for high-impact placements.
             </p>
             <Link to="/contact" className="inline-block px-12 py-6 bg-white text-orange-primary rounded-full font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all shadow-xl">
               Request Partnership Access
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
