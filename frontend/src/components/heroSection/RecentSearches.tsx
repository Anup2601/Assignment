import { useState } from "react";

export function RecentSearches() {
  const [searches, setSearches] = useState([
    "I phone",
    "Fz v3 bikes",
    "Tata cars",
    "Books",
    "Networking Jobs",
  ]);

  const removeSearch = (index: number) => {
    setSearches(searches.filter((_, i) => i !== index));
  };

  return (
    <section className="flex flex-col gap-5 items-start self-stretch">
      <h2 className="self-stretch text-2xl font-semibold leading-7 text-slate-50 max-md:text-2xl max-sm:text-xl">
        Recent Searches
      </h2>
      <div className="flex flex-wrap gap-3">
        {searches.map((search, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white text-black rounded-lg px-3 py-1"
          >
            <span>{search}</span>
            <button
              onClick={() => removeSearch(index)}
              className="text-black hover:text-red-200 font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
