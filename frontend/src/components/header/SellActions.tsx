import React from 'react';

export const SellActions: React.FC = () => {
  return (
    <div className="flex gap-8 items-center self-stretch my-auto text-sm tracking-wide min-w-60 text-neutral-900">
      <button className="flex gap-2 items-center self-stretch px-4 py-2 my-auto whitespace-nowrap rounded-2xl hover:bg-gray-50 transition-colors">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e28c0a2665f288476d1c4b70a28a41bf195649dc?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3"
          className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[1/1] fill-neutral-900 stroke-[1px] stroke-neutral-900"
          alt="Sell icon"
        />
        <span className="self-stretch my-auto text-neutral-900">
          Sell
        </span>
      </button>
      <button className="flex gap-1.5 items-center self-stretch px-3.5 py-2 my-auto rounded-2xl hover:bg-gray-50 transition-colors border border-solid border-neutral-900 px-2 py-1 rounded-full text-xs">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c93d5756d4ac99708c55759445547cfa3100f7a7?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="One click sell icon"
        />
        <span className="self-stretch my-auto text-neutral-900 ">
          One Click sell
        </span>
      </button>
    </div>
  );
};
