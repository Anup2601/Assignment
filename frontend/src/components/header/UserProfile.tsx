import React from 'react';

export const UserProfile: React.FC = () => {
  return (
    <div className="flex gap-8 justify-center items-center">
      <div className="flex gap-8 justify-center items-center self-stretch my-auto">
        <div className="flex gap-3 items-center self-stretch my-auto">
          <button className="hover:opacity-80 transition-opacity">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/614d2cbe1851c6ce188ad7ce1949f6c1b1e2e599?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3"
              className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
              alt="Notifications"
            />
          </button>
          <button className="hover:opacity-80 transition-opacity">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/cab76405f377e91aaf178bb988ebdfbe2b2cbf09?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3"
              className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[59px]"
              alt="User Profile"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
