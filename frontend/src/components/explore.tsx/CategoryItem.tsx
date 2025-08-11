"use client";
import * as React from "react";

interface CategoryItemProps {
  image: string;
  title: string;
  imageClassName?: string;
  isSpecialRounded?: boolean;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  image,
  title,
  imageClassName = "",
  isSpecialRounded = false
}) => {
  const baseImageClasses = "relative max-md:h-[180px] max-md:w-[180px] max-sm:h-[150px] max-sm:w-[150px]";
  const roundedClasses = isSpecialRounded ? "rounded-[116px]" : "";

  return (
    <article className="flex relative flex-col shrink-0 gap-3 items-center w-[225px]">
      <div className="flex relative flex-col justify-center items-center aspect-[183/184] h-[226px] w-[225px]">
        <img
          src={image}
          alt=""
          className={`${baseImageClasses} ${imageClassName} ${roundedClasses}`}
        />
      </div>
      <h3 className="relative text-2xl font-medium tracking-wider text-center text-neutral-900">
        <div className="text-2xl text-neutral-900 max-md:text-xl max-sm:text-lg">
          {title}
        </div>
      </h3>
    </article>
  );
};
