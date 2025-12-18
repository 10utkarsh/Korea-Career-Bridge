
import React from 'react';
import { useApp } from '../App';

const AITools: React.FC = () => {
  const { t } = useApp();

  const toolData = [
    {
      title: "AI Resume & Document Editor",
      subtitle: "Corporate & ATS Standards",
      description: "Our engine optimizes documents specifically for Korean corporate hierarchies and major Applicant Tracking Systems (ATS). It ensures that non-native applications align perfectly with local professional expectations.",
      features: ["Korean Standard Formatting", "ATS Keyword Optimization", "Grammar & Professional Tone Tuning"],
      image: "https://picsum.photos/seed/resume-ai/800/600",
      color: "bg-orange-50"
    },
    {
      title: "AI Mock Interview Simulator",
      subtitle: "Human Behavior Evaluation",
      description: "Using advanced visual and audio processing, KCB evaluates not just what you say, but how you say it. Our system analyzes body language, delivery rhythm, and communication nuances required for high-stakes interviews.",
      features: ["Eye Contact & Gesture Tracking", "Sentiment Analysis", "Korean Business Etiquette Check"],
      image: "https://picsum.photos/seed/interview-ai/800/600",
      color: "bg-blue-50"
    },
    {
      title: "Personalized Learning Paths",
      subtitle: "Data-Driven Progression",
      description: "Based on 100,000+ real-world coaching data points, we map an adaptive learning journey for every participant, ensuring zero waste in their preparation phase.",
      features: ["Adaptive Goal Setting", "Skill Gap Visualizer", "Progress Heatmaps"],
      image: "https://picsum.photos/seed/learning-ai/800/600",
      color: "bg-green-50"
    },
    {
      title: "Cultural Fit Analysis Engine",
      subtitle: "Strategic Adaptation",
      description: "The most innovative part of KCB. We identify potential workplace style friction before they occur, providing clear strategies for participants to adapt to specific institutional cultures.",
      features: ["Workplace Archetype Matching", "Friction Point Prediction", "Soft Skill Translation"],
      image: "https://picsum.photos/seed/culture-ai/800/600",
      color: "bg-purple-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-24">
        <span className="text-orange-primary font-bold tracking-widest uppercase text-xs">Proprietary Ecosystem</span>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mt-6 font-heading tracking-tighter">The KCB AI Stack</h1>
        <p className="text-gray-500 mt-8 max-w-3xl mx-auto text-xl font-light leading-relaxed">
          More than just a database, KCB is a technical training ground where AI prepares talent for global success.
        </p>
      </div>

      <div className="space-y-32">
        {toolData.map((tool, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}>
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xs font-black text-orange-primary uppercase tracking-[0.2em]">{tool.subtitle}</h3>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-tight">{tool.title}</h2>
              </div>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                {tool.description}
              </p>
              <ul className="space-y-4">
                {tool.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-primary">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`flex-1 w-full aspect-video rounded-[3rem] overflow-hidden ${tool.color} p-4 shadow-inner`}>
              <img 
                src={tool.image} 
                alt={tool.title} 
                className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl transform group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 p-16 bg-gray-50 rounded-[3rem] text-center">
        <h2 className="text-3xl font-black font-heading text-gray-900 mb-6 tracking-tight">Access the Full Platform</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto font-light">
          Authorized partner institutions receive full API access to our AI evaluation engines for internal HR integration.
        </p>
        <button className="px-10 py-5 bg-gray-900 text-white rounded-full font-bold shadow-xl hover:bg-black transition-all">
          Request API Documentation
        </button>
      </div>
    </div>
  );
};

export default AITools;
