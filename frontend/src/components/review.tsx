import { Star } from "lucide-react";
import a1 from "../assets/a1.png";

interface Review {
  stars: number;
  title: string;
  text: string;
  user: string;
}

const Reviews: Review[] = [
  {
    stars: 5,
    title: "Smooth and secure transaction",
    text: "Bought a cooler via Bid.ai during their summer sale. The listing was genuine, and the seller was super responsive. Quick, easy, and trustworthy experience!",
    user: "@kiranonline",
  },
  {
    stars: 5,
    title: "Best place to sell locally!",
    text: "Listed my old fridge for free on Bid.ai and got inquiries the same day. No hidden charges, and the app is very user-friendly.",
    user: "@sellwithme",
  },
  {
    stars: 5,
    title: "Highly recommended marketplace",
    text: "I’ve used Bid.ai both to sell my old fan and buy a new AC. It’s super simple to list items and even better to browse. I love the BID-CREDITS system!",
    user: "@rahul_trades",
  },
  {
    stars: 5,
    title: "Very convenient and reliable",
    text: "This platform makes it so easy to find what you need. I bought a second-hand ceiling fan at a great deal. Plus, I could verify the seller’s profile!",
    user: "@anjushops",
  },
];

const Review: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
        <img src={a1} alt="Review" className="w-full h-auto mb-8 rounded-2xl" />
      <h2 className="text-3xl md:text-4xl font-bold pl-16 mb-10">
        Transact with a trusted local community
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {Reviews.map((t, i) => (
          <div key={i} className="flex flex-col items-start space-y-3">
            {/* Stars */}
            <div className="flex text-blue-600">
              {Array.from({ length: t.stars }).map((_, idx) => (
                <Star key={idx} size={24} fill="currentColor" />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold">{t.title}</h3>

            {/* Text */}
            <p className="text-gray-600 text-lg">{t.text}</p>

            {/* User */}
            <span className="font-medium text-gray-800">{t.user}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
