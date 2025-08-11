"use client";
import * as React from "react";
import { CategoryItem } from "./CategoryItem";

const categories = [
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/1a03792f7d31ac127ad9bd1b1839776c9de48d04?width=450",
    title: "Cars",
    imageClassName: "absolute top-0 left-0 shrink-0 self-stretch h-[226px] w-[225px]",
    isSpecialRounded: true
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/251c8af5b5960e11ade853443693a580ba0272e2?width=458",
    title: "Real Estate",
    imageClassName: "aspect-[229.20/230.00] h-[230px] w-[229px]"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/67332d272a236850afa352c855e8cc7cff206fb1?width=450",
    title: "Mobiles",
    imageClassName: "aspect-[224/225] h-[226px] w-[225px]"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7c7e6517e86e0582812e0bac2b17dba5ac10e8fe?width=450",
    title: "Jobs",
    imageClassName: "aspect-[1/1] h-[225px] w-[225px]"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c18dbcc6919f6e06c376e16cb20fc6bd9b6ff62f?width=450",
    title: "Bikes",
    imageClassName: "aspect-[112/113] h-[227px] w-[225px]"
  }
];

export const CategoriesContainer: React.FC = () => {
  return (
    <div className="flex overflow-x-auto relative flex-1 gap-5 items-center px-2.5 py-0 max-md:gap-3 max-sm:overflow-x-visible max-sm:flex-col max-sm:gap-4">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          image={category.image}
          title={category.title}
          imageClassName={category.imageClassName}
          isSpecialRounded={category.isSpecialRounded}
        />
      ))}
    </div>
  );
};
