export function RecentSearches() {
  return (
    <section className="flex flex-col gap-5 items-start self-stretch">
      <h2 className="self-stretch text-2xl font-semibold leading-7 text-slate-50 max-md:text-2xl max-sm:text-xl">
        Recent Searches
      </h2>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/c90236ce8267d6a71ad86c698e6b5bcce86bda51?width=1515"
        alt="Recent search tags"
        className="flex gap-5 items-center h-[33px] w-[757px] max-md:w-full max-md:max-w-full max-sm:h-auto"
      />
    </section>
  );
}
