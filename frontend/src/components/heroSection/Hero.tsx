import { SearchInput } from "./SearchInput";
import { RecentSearches } from "./RecentSearches";
import { HeroImage } from "./HeroImage";

function Hero() {
  return (
    <main className="overflow-hidden relative m-7 ml-8 max-w-12xl bg-blue-600 rounded-3xl h-[524px] max-md:p-5 max-md:h-auto max-md:max-w-[991px] max-md:min-h-[524px] max-sm:p-4 max-sm:max-w-screen-sm max-sm:rounded-2xl">
      <div className="flex absolute flex-col gap-9 items-start h-[347px] left-[42px] top-[89px] w-[764px] max-md:static max-md:gap-6 max-md:mx-auto max-md:my-0 max-md:w-full max-md:h-auto max-md:max-w-[764px] max-sm:gap-5">
        <header>
          <h1 className="text-4xl font-bold text-slate-50 w-[744px] max-md:w-full max-md:text-3xl max-sm:text-3xl max-sm:leading-tight">
            The Smartest Way to Sell Anything, Instantly.
          </h1>
        </header>

        <SearchInput />

        <RecentSearches />
      </div>

      <HeroImage />
    </main>
  );
}

export default Hero;
