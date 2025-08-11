import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 justify-center items-center font-medium min-w-10 pl-16 max-md:max-w-full ${className}`}>
      <div className="self-stretch my-auto text-xs tracking-wider text-center bg-white text-neutral-800 w-[126px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a8d52c80281147d474da5162fd15ef0a94c47913?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3"
          className="object-contain aspect-[2.52] w-[126px]"
          alt="Company Logo"
        />
        <p className="z-10  font-bold ">
            Buy. Inspect. Deal
        </p>
      </div>
    </div>
  );
};
