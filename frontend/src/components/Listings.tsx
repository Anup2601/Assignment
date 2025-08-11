// src/components/CarListings.tsx
import React from "react";
import { Heart } from "lucide-react";
import a1 from "../assets/a1.png";
import a3 from "../assets/a3.jpg";

interface Car {
  id: number;
  brand: string;
  image: string;
  price: string;
  eco: string;
  yearKm: string;
  model: string;
  location: string;
  date: string;
}

const brands = [
  "Mahindra & Mahindra",
  "Tata Motors",
  "Maruti Suzuki",
  "Hyundai",
  "Honda",
  "Toyota",
];

const cars: Car[] = [
  {
    id: 1,
    brand: "Mahindra & Mahindra",
    image: a3,
    price: "$ 3,75,000",
    eco: "82/100",
    yearKm: "2014~75,000km",
    model: "Honda City 1.5 s i-VTEC MT, 2013",
    location: "Bengaluru",
    date: "Today",
  },
  {
    id: 2,
    brand: "Tata Motors",
    image: a1,
    price: "$ 3,75,000",
    eco: "82/100",
    yearKm: "2014~75,000km",
    model: "Honda City 1.5 s i-VTEC MT, 2013",
    location: "Bengaluru",
    date: "Today",
  },
  {
    id: 3,
    brand: "Maruti Suzuki",
    image: a1,
    price: "$ 3,75,000",
    eco: "82/100",
    yearKm: "2014~75,000km",
    model: "Honda City 1.5 s i-VTEC MT, 2013",
    location: "Bengaluru",
    date: "Today",
  },
  {
    id: 4,
    brand: "Hyundai",
    image: a1,
    price: "$ 3,75,000",
    eco: "82/100",
    yearKm: "2014~75,000km",
    model: "Honda City 1.5 s i-VTEC MT, 2013",
    location: "Bengaluru",
    date: "Today",
  },
  {
    id: 5,
    brand: "Honda",
    image: a1,
    price: "$ 3,75,000",
    eco: "82/100",
    yearKm: "2014~75,000km",
    model: "Honda City 1.5 s i-VTEC MT, 2013",
    location: "Bengaluru",
    date: "Today",
  },
];

export const Listings: React.FC = () => {
  return (
    <section className="p-6 mx-9">
      

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold">Newly Listed Cars</h2>
      </div>
      {/* Brand Tags */}
      <div className="flex flex-wrap gap-6 mb-4">
        {brands.map((brand) => (
          <button
            key={brand}
            className="px-4 py-2 border border-gray-300 rounded-2xl text-2xl  hover:bg-gray-100"
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Scrollable Cards */}
      <div className="flex overflow-x-auto space-x-12 scrollbar-hide scroll-smooth pt-2">
        {cars.map((car) => (
          <div
            key={car.id}
            className="max-w-[310px] max-h-[460px] border rounded-xl p-3 bg-white shadow-lg flex-shrink-0"
          >
            <div className="relative">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-70 object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                <Heart size={18} />
              </button>
            </div>
            <div className="mt-6 m-3">
              <div className="flex justify-between text-2xl font-semibold">
                <span>{car.price}</span>
                <span className="text-gray-500">Eco: {car.eco}</span>
              </div>
              <p className="text-gray-500 text-xl">{car.yearKm}</p>
              <p className="text-base font-medium">{car.model}</p>
              <div className="flex justify-between text-xl text-gray-500 mt-2">
                <span>{car.location}</span>
                <span>{car.date}</span>
              </div>
              
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
