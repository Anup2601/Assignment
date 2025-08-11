import React from 'react';

interface LocationSelectorProps {
  location?: string;
  className?: string;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  location = "Taj Garden Retreat, Bengaluru",
  className = ""
}) => {
  return (
    <div className={`flex gap-2 items-center self-stretch px-3 py-2.5 my-auto text-base leading-none rounded-2xl border border-solid border-neutral-600 min-w-60 text-neutral-600 ${className}`}>
      <span className="self-stretch my-auto">
        {location}
      </span>
    </div>
  );
};
