import React, { useEffect, useState } from 'react';
import { getPortfolioData } from './api/client';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getPortfolioData();
      setPortfolioData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkBg text-primary text-xl font-bold">
        Loading Data...
      </div>
    );
  }

  return (
    <main className="bg-darkBg text-white font-sans antialiased selection:bg-primary selection:text-black">
      {/* Tomar Navbar ekhane add korbe (Static) */}
      <Hero data={portfolioData.personalInfo} />
      
      {/* Experience, About section ekhane add korte parbe same vabe */}
      
      <Portfolio projects={portfolioData.projects} />

      {/* Footer / Contact (Static HTML ke React e convert kore nibo ekhane) */}
    </main>
  );
}

export default App;