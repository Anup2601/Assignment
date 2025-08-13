import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import a1 from "../assets/a3.jpg";
import { Link, useNavigate } from "react-router-dom";

interface Car {
  _id: string;       // MongoDB uses _id
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

export const CarListings: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars", { withCredentials: true })
      .then((res) => {
        setCars(res.data); // Data from backend
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
      });
  }, []);

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
            className="px-4 py-2 border border-gray-300 rounded-2xl text-2xl hover:bg-gray-100"
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Scrollable Cards */}
      <div className="flex overflow-x-auto space-x-12 scrollbar-hide scroll-smooth pt-2">
        {cars.map((car) => (
            // <Link to={`/${car._id}`} key={car._id}>
          <div
            key={car._id}
            onClick={() => navigate(`/car/${car._id}`)}
            className="max-w-[310px] max-h-[460px] min-w-[310px]: border rounded-xl p-3 bg-white shadow-lg flex-shrink-0"
          >
            <div className="relative">
              <img
                src={car.image || a1} 
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
          // </Link>
        ))}
        
      </div>
    </section>
  );
};
