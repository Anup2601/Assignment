"use client";
import * as React from "react";
import { NavigationArrow } from "./NavigationArrow";
import { CategoriesContainer } from "./CategoryContainer";

export const Explore: React.FC = () => {
  return (
    <section className="flex relative flex-col gap-6 items-start self-stretch px-5 py-0 mx-auto my-0 max-w-[1400px]">
      <header className="relative text-4xl font-semibold leading-9 text-neutral-900">
        <h1 className="text-4xl font-bold text-neutral-900 max-md:text-3xl max-sm:text-2xl">
          Explore Categories
        </h1>
      </header>

      <nav className="flex overflow-hidden relative justify-between items-center self-stretch max-sm:flex-col max-sm:gap-5">
        <NavigationArrow
          direction="left"
          className="max-sm:hidden"
        />

        <CategoriesContainer />

        <NavigationArrow direction="right" />
      </nav>
    </section>
  );
};

export default Explore;
