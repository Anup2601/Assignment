import {  CameraIcon, FilterIcon, MicIcon, Search, } from "lucide-react";
import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";

export function SearchInput() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Example suggestion words
  const suggestionsList = [
  "Mobile Phones", "Laptops", "Headphones", "Smartwatches", "Tablets",
  "Shoes", "Clothes", "Watches", "Bags", "Sunglasses",
  "Television", "Refrigerator", "Washing Machine", "Air Conditioner", "Microwave",
  "Books", "Stationery", "Toys", "Video Games", "Cameras",
  "Groceries", "Snacks", "Beverages", "Fruits", "Vegetables",
  "Furniture", "Beds", "Sofas", "Chairs", "Tables",
  "Beauty Products", "Makeup", "Perfumes", "Shampoos", "Skincare",
  "Sports Equipment", "Cricket Bat", "Football", "Gym Equipment", "Yoga Mat",
  "Cars", "Bikes", "Scooters", "Electric Vehicles", "Spare Parts",
  "Medicines", "Supplements", "Healthcare", "Masks", "Sanitizers",
  "Jewelry", "Rings", "Necklaces", "Earrings", "Bracelets",
  "Pet Supplies", "Dog Food", "Cat Food", "Aquarium", "Pet Toys",
  "Kitchenware", "Cookware", "Plates", "Cups", "Cutlery",
  "Gardening Tools", "Seeds", "Plants", "Soil", "Fertilizers",
  "Office Supplies", "Printers", "Projectors", "Monitors", "Keyboards",
  "Travel", "Flights", "Hotels", "Bus Tickets", "Train Tickets",
  "Music", "Speakers", "Instruments", "Guitars", "Drums",
  "Streaming Devices", "Smart TV Stick", "Projectors", "Home Theatre", "Set-Top Box",
  "Baby Products", "Diapers", "Baby Clothes", "Toys", "Strollers",
  "Food Delivery", "Pizza", "Burger", "Pasta", "Ice Cream",
  "Accessories", "Wallets", "Belts", "Hats", "Scarves"
];

  // Handle typing for autosuggest
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = suggestionsList.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSelect = (word: string) => {
    setQuery(word);
    setSuggestions([]);
  };

  // Voice Search (Mic)
  const handleVoiceSearch = () => {
    const recognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (recognition) {
      const recog = new recognition();
      recog.lang = "en-US";
      recog.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setQuery(text);
      };
      recog.start();
    } else {
      toast.error("Voice recognition not supported in this browser.");
    }
  };

  // Camera Search (Image upload)
  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      toast.success(`Image uploaded: ${file.name}`);
      // Here you can send it to backend (image recognition)
    }
  };

  // Filter
  const handleFilter = () => {
    toast.success("Filter options clicked!");
  };

  return (
    <section className="relative flex justify-between items-center self-stretch px-5 py-4 shadow-sm bg-slate-50 h-[78px] rounded-[73px] max-md:px-4 max-md:h-auto max-md:min-h-[60px] max-sm:flex-col max-sm:gap-4 max-sm:p-4">
      {/* Left Search Input */}
      <div className="flex gap-1 items-center w-full max-sm:w-full">
        <Search />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for Products and Categories"
          className="flex-1 outline-none bg-transparent text-lg text-neutral-900 placeholder:text-gray-500"
        />
      </div>

      {/* Right buttons */}
      <div className="flex gap-5 justify-center items-center max-sm:gap-3">
        <button type="button" aria-label="Voice search" onClick={handleVoiceSearch}>
          <MicIcon />
        </button>
        <button type="button" aria-label="Camera search" onClick={handleCameraClick}>
          <CameraIcon />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        <button type="button" aria-label="Filter options" onClick={handleFilter}>
          <FilterIcon />
        </button>
      </div>

      {/* Suggestion Dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute top-[100%] left-0 w-full bg-white border rounded-xl mt-1 shadow-md z-50">
          {suggestions.map((word, i) => (
            <li
              key={i}
              onClick={() => handleSelect(word)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {word}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
