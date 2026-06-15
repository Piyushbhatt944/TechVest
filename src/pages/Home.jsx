import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

function Home() {
  const features = [
    {
      title: "AI Earnings Call Summarizer",
      description: "Get instant, digestible key points and sentiment analysis from quarterly earnings calls without listening to hours of audio.",
      icon: "🎙️",
      link: "/dashboard"
    },
    {
      title: "AI Competitor Comparison",
      description: "Compare financial indicators, market share, and product roadmaps of competitors dynamically side-by-side using advanced AI models.",
      icon: "📊",
      link: "/dashboard"
    },
    {
      title: "Financial Ratio Analyzer",
      description: "Automate financial analysis with AI explanations of profitability, liquidity, and leverage ratios, contextually explained.",
      icon: "📈",
      link: "/dashboard"
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      <div className="cards-container">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            link={feature.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
