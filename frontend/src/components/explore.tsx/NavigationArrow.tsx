"use client";
import * as React from "react";

interface NavigationArrowProps {
  direction: 'left' | 'right';
  className?: string;
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction, className = "" }) => {
  if (direction === 'left') {
    return (
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4cb8c76ac6a16a2eb254ab2b7766711aaae34a7a?width=128"
        alt="Previous categories"
        className={`relative shrink-0 w-16 h-16 aspect-[1/1] ${className}`}
      />
    );
  }

  return (
    <div className={className}>
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<svg id=\"2:687\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-right\"> <path d=\"M45.3333 32.011H8\" stroke=\"#121212\" stroke-width=\"5.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M29.333 16L45.333 32L29.333 48\" stroke=\"#121212\" stroke-width=\"5.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M56 16V48\" stroke=\"#121212\" stroke-width=\"5.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
        }}
      />
    </div>
  );
};
