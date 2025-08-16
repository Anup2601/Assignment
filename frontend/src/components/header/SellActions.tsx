import React from "react";
import { Plus, MousePointerClick } from "lucide-react";

export const SellActions: React.FC = () => {
  const handleSellClick = () => {
    window.open('https://example.com/sell', '_blank');
  };

  const handleOneClickSellClick = () => {
    window.open('https://example.com/one-click-sell', '_blank');
  };

  return (
    <div className="flex gap-8 items-center self-stretch my-auto text-sm tracking-wide min-w-60 text-neutral-900">
      {/* Sell Button with animated border */}
      <button 
        onClick={handleSellClick}
        className="relative flex gap-2 items-center px-4 py-2 rounded-full bg-white text-neutral-900 transition-transform hover:scale-105 active:scale-95"
      >
        {/* Animated gradient border background */}
        <div 
          className="absolute inset-0 rounded-full p-1"
          style={{
            background: 'linear-gradient(45deg, #1e3a8a, #000000, #2563eb)',
            animation: 'gradientRotate 1s linear infinite'
          }}
        >
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        
        <span className="relative z-10 flex items-center gap-2">
          <Plus size={16} />
          Sell
        </span>
      </button>

      {/* One Click Sell Button with animated border */}
      <button 
        onClick={handleOneClickSellClick}
        className="relative flex gap-2 items-center px-4 py-2 rounded-full bg-white text-neutral-900 transition-transform hover:scale-105 active:scale-95"
      >
        {/* Animated gradient border background */}
        <div 
          className="absolute inset-0 rounded-full p-1"
          style={{
            background: 'linear-gradient(45deg, #2563eb, #1e3a8a, #000000)',
            animation: 'gradientRotate 1s linear infinite 1s'
          }}
        >
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        
        <span className="relative z-10 flex items-center gap-2">
          <MousePointerClick size={16} />
          One Click sell
        </span>
      </button>

      <style>{`
        @keyframes gradientRotate {
          0% {
            background: linear-gradient(0deg, #1e3a8a, #000000, #2563eb, #1e3a8a);
          }
          25% {
            background: linear-gradient(90deg, #2563eb, #1e3a8a, #000000, #2563eb);
          }
          50% {
            background: linear-gradient(180deg, #000000, #2563eb, #1e3a8a, #000000);
          }
          75% {
            background: linear-gradient(270deg, #1e3a8a, #000000, #2563eb, #1e3a8a);
          }
          100% {
            background: linear-gradient(360deg, #2563eb, #1e3a8a, #000000, #2563eb);
          }
        }
      `}</style>
    </div>
  );
};