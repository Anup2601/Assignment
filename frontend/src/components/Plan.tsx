const Plan = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-auto flex items-center justify-center p-2 mx-16 rounded-lg" >
      <div className="flex items-center justify-between max-w-7xl w-full">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-8 mt-6">
            Your Plan is About to Expire!
          </h1>
          <p className="text-4xl mb-8 text-blue-50 leading-relaxed">
            Renew now to keep listing and boosting your<br />
            products without interruption
          </p>
          <button className="inline-flex items-center gap-3 bg-transparent text-white-600  px-4 py-3 rounded-lg shadow-md transition-colors duration-200 text-4xl  border-white-600 border-3">
            Renew Plan
            <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </button>
        </div>
        
        {/* Right Hourglass Icon */}
        <div >
          <div className="relative">
            {/* Hourglass SVG */}
            <svg className="size-132" viewBox="0 0 100 100" fill="none">
              {/* Top cap */}
              <rect x="20" y="15" width="60" height="8" rx="4" fill="#D4A574"/>
              {/* Bottom cap */}
              <rect x="20" y="77" width="60" height="8" rx="4" fill="#D4A574"/>
              
              {/* Top glass */}
              <path d="M25 23 L75 23 L60 45 L40 45 Z" fill="rgba(255,255,255,0.9)"/>
              {/* Bottom glass */}
              <path d="M40 55 L60 55 L75 77 L25 77 Z" fill="rgba(255,255,255,0.9)"/>
              
              {/* Sand in top */}
              <path d="M30 28 L70 28 L58 42 L42 42 Z" fill="#F59E0B"/>
              {/* Sand in bottom */}
              <path d="M42 58 L58 58 L70 72 L30 72 Z" fill="#F59E0B"/>
              
              {/* Falling sand stream */}
              <rect x="48" y="45" width="4" height="10" fill="#F59E0B" opacity="0.7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;