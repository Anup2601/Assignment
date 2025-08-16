import { MapPin } from "lucide-react";
import React from "react";

interface LocationSelectorProps {
  location?: string;
  className?: string;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  location = "Taj Garden Retreat, Bengaluru",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center self-stretch px-3 py-2 my-auto text-base leading-none rounded-2xl border border-solid border-neutral-600 min-w-60 text-neutral-600 ${className}`}
    >
      {/* MapPin Icon */}
      <MapPin className="w-5 h-5 text-neutral-600 mr-2" />

      {/* Input Field */}
      <input
        type="text"
        placeholder={location}
        className="flex-1 bg-transparent outline-none text-neutral-600 placeholder:text-neutral-600"
      />
    </div>
  );
};
