import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import a1 from "../assets/a3.jpg";
import { useNavigate } from "react-router-dom";

interface Recommendation {
  _id: string;       
  brand: string;
  image: string;
  price: string;
  eco: string;
  model: string;
  location: string;
  date: string;
}


export const Recommendation: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recommendations", { withCredentials: true })
      .then((res) => {
        setRecommendations(res.data); // Data from backend
      })
      .catch((err) => {
        console.error("Error fetching recommendations:", err);
      });
  }, []);

  return (
    <section className="p-6 mx-9">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold">Recommendation For you</h2>
      </div>

      {/* Scrollable Cards */}
      <div className="flex overflow-x-auto space-x-12 scrollbar-hide scroll-smooth pt-2">
        {recommendations.map((recommendation) => (
            // <Link to={`/${recommendation._id}`} key={recommendation._id}>
          <div
            key={recommendation._id}
            onClick={() => navigate(`/recommendations/${recommendation._id}`)}
            className="max-w-[310px] max-h-[460px] min-w-[310px]: border rounded-xl p-3 bg-white shadow-lg flex-shrink-0"
          >
            <div className="relative">
              <img
                src={ a1}
                alt={recommendation.model}
                className="w-full h-70 object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                <Heart size={18} />
              </button>
            </div>
            <div className="mt-6 m-3">
              <div className="flex justify-between text-2xl font-semibold">
                <span>{recommendation.price}</span>
                <span className="text-gray-500">Eco: {recommendation.eco}</span>
              </div>
              <p className="text-base font-medium">{recommendation.model}</p>
              <div className="flex justify-between text-xl text-gray-500 mt-2">
                <span>{recommendation.location}</span>
                <span>{recommendation.date}</span>
              </div>
            </div>
          </div>
          // </Link>
        ))}
        
      </div>
    </section>
  );
};
