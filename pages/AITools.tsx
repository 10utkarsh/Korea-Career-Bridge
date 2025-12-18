
import React, { useState } from 'react';
import { useApp } from '../App';
import { GoogleGenAI } from "@google/genai";

const AITools: React.FC = () => {
  const { t } = useApp();
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const analyzeResume = async () => {
    if (!resumeText.trim()) return;
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze the following resume text based on Korean corporate standards (chaebol/large enterprises) and ATS compatibility. Provide specific suggestions for improvement in professional tone and structure: \n\n ${resumeText}`,
      });
      setAnalysis(response.text || 'No analysis generated.');
    } catch (error) {
      console.error('AI Analysis failed:', error);
      setAnalysis('Analysis failed. Please ensure your API_KEY is correctly configured in the environment variables.');
    } finally {
      setIsLoading(false);
    }
  };

  const toolData = [
    {
      id: 'resume-editor',
      title: "AI Resume & Document Editor",
      subtitle: "Corporate & ATS Standards",
      description: "Our engine optimizes documents specifically for Korean corporate hierarchies and major Applicant Tracking Systems (ATS). It ensures that non-native applications align perfectly with local professional expectations.",
      features: ["Korean Standard Formatting", "ATS Keyword Optimization", "Grammar & Professional Tone Tuning"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
      color: "bg-orange-50"
    },
    {
      id: 'interview-sim',
      title: "AI Mock Interview Simulator",
      subtitle: "Human Behavior Evaluation",
      description: "Using advanced visual and audio processing, KCB evaluates not just what you say, but how you say it. Our system analyzes body language, delivery rhythm, and communication nuances required for high-stakes interviews.",
      features: ["Eye Contact & Gesture Tracking", "Sentiment Analysis", "Korean Business Etiquette Check"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-50"
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
        {/* Functional Tool: Resume Editor */}
        <div className="flex flex-col lg:flex-row items-start gap-20">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <h3 className="text-xs font-black text-orange-primary uppercase tracking-[0.2em]">{toolData[0].subtitle}</h3>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-tight">{toolData[0].title}</h2>
            </div>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              {toolData[0].description}
            </p>
            
            {/* Interactive Demo Section */}
            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-inner">
              <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Try the Live MVP Editor</h4>
              <textarea 
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume content here to analyze..."
                className="w-full h-40 p-5 rounded-2xl border-none focus:ring-2 focus:ring-orange-primary bg-white text-sm font-medium transition-all outline-none resize-none mb-4"
              />
              <button 
                onClick={analyzeResume}
                disabled={isLoading || !resumeText}
                className="w-full py-4 bg-orange-primary text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</>
                ) : 'Analyze for Korean Standards'}
              </button>
              
              {analysis && (
                <div className="mt-6 p-6 bg-white rounded-2xl border border-orange-100 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h5 className="text-xs font-black text-orange-primary uppercase tracking-widest mb-3">AI Feedback Report</h5>
                  <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap font-medium italic">
                    {analysis}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 w-full aspect-square rounded-[3rem] overflow-hidden bg-orange-50 p-4 shadow-inner sticky top-24">
            <img 
              src={toolData[0].image} 
              alt={toolData[0].title} 
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
            />
          </div>
        </div>

        {/* Static Tool: Interview Simulator */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <h3 className="text-xs font-black text-orange-primary uppercase tracking-[0.2em]">{toolData[1].subtitle}</h3>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-tight">{toolData[1].title}</h2>
            </div>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              {toolData[1].description}
            </p>
            <ul className="space-y-4">
              {toolData[1].features.map((f, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800 text-sm font-bold flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Module locked. Partner access required for video evaluation.
            </div>
          </div>
          <div className="flex-1 w-full aspect-square rounded-[3rem] overflow-hidden bg-blue-50 p-4 shadow-inner">
            <img 
              src={toolData[1].image} 
              alt={toolData[1].title} 
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-40 p-16 bg-gray-50 rounded-[3rem] text-center border border-gray-100">
        <h2 className="text-3xl font-black font-heading text-gray-900 mb-6 tracking-tight">Access the Full Enterprise API</h2>
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
