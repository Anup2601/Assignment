import { MapPin } from 'lucide-react';
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
    <div className={`flex  items-center self-stretch px-1 py-2.5 my-auto text-base leading-none rounded-2xl border border-solid border-neutral-600 min-w-60 text-neutral-600 ${className}`}>
      <span className="self-stretch my-auto">
        <><MapPin className="inline-block" /> <span className="inline-block">{location}</span></>
      </span>
    </div>
  );
};
