import { SearchIcon } from "./SearchIcon";
import { MicIcon } from "./MicIcon";
import { CameraIcon } from "./CameraIcon";
import { FilterIcon } from "./FilterIcon";

export function SearchInput() {
  return (
    <section className="flex justify-between items-center self-stretch px-5 py-6 shadow-sm bg-slate-50 h-[78px] rounded-[73px] max-md:px-4 max-md:py-5 max-md:h-auto max-md:min-h-[60px] max-sm:flex-col max-sm:gap-4 max-sm:p-4">
      <div className="flex gap-1.5 items-center max-sm:justify-start max-sm:w-full">
        <SearchIcon />
        <label className="text-2xl font-medium text-center text-neutral-900 max-md:text-lg max-sm:text-base max-sm:text-left">
          Search for Products and Categories
        </label>
      </div>
      <div className="flex gap-5 justify-center items-center max-sm:gap-3">
        <button type="button" aria-label="Voice search">
          <MicIcon />
        </button>
        <button type="button" aria-label="Camera search">
          <CameraIcon />
        </button>
        <button type="button" aria-label="Filter options">
          <FilterIcon />
        </button>
      </div>
    </section>
  );
}
