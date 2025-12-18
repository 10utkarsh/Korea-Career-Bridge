
import React, { useState } from 'react';
import { useApp } from '../App';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useApp();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      login();
      navigate('/admin');
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 bg-gray-50/50">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-12 shadow-2xl shadow-orange-100/30">
        <div className="text-center mb-10">
          <div className="px-4 py-2 bg-orange-primary rounded-2xl flex items-center justify-center text-white font-black text-3xl tracking-tighter mx-auto mb-6 w-max">KCB</div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Admin Console</h1>
          <p className="text-gray-400 text-sm mt-2 font-medium">Please sign in to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Admin Email</label>
            <input 
              defaultValue="admin@koreacareerbridge.org"
              type="email" 
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-orange-primary transition-all font-medium text-gray-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Secure Password</label>
            <input 
              defaultValue="password123"
              type="password" 
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-orange-primary transition-all font-medium text-gray-900"
            />
          </div>

          <button 
            disabled={loading}
            type="submit" 
            className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-black transition-all shadow-xl shadow-gray-200 active:scale-95"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Sign In'}
          </button>
        </form>

        <p className="mt-8 text-center text-xs font-medium text-gray-400">
          Internal access only. Unauthorized attempts <br/>
          are logged and monitored.
        </p>
      </div>
    </div>
  );
};

export default Login;
