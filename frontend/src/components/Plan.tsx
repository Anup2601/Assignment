import hourglassImage from "../assets/time.jpg";

const Plan = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-auto flex items-center justify-center mx-16 rounded-2xl">
      <div className="flex items-center justify-between max-w-8xl w-full">
        {/* Left Content */}
        <div className="pl-8">
          <h1 className="text-6xl font-bold mb-8 mt-6">
            Your Plan is About to Expire!
          </h1>
          <p className="text-4xl mb-8 text-blue-50 leading-relaxed">
            Renew now to keep listing and boosting your<br />
            products without interruption
          </p>
          <button className="inline-flex items-center gap-3 bg-transparent text-white px-4 py-3 rounded-lg shadow-md transition-colors duration-200 text-4xl border border-white">
            Renew Plan
            <svg
              className="size-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </button>
        </div>

        {/* Right Hourglass Image */}
        <div>
          <div className="relative p-4">
            <img
              src={hourglassImage}
              alt="Hourglass"
              className="size-128 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
