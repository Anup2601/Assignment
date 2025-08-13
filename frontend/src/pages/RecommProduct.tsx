import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RecomProduct() {
  const { id } = useParams();
  interface Listing {
    brand: string;
    model: string;
    price: number;
    eco: string;
    yearKm: string;
    location: string;
    date: string;
  }

  const [listing, setListing] = useState<Listing | null>(null);

  useEffect(() => {
    axios.get(`https://assignment-backend-jke2.onrender.com/api/recommendations/${id}`)
      .then(res => setListing(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!listing) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{listing.brand} - {listing.model}</h1>
      <p className="mt-2 text-lg">Price: ₹{listing.price}</p>
      <p>Eco: {listing.eco}</p>
      <p>Year/KM: {listing.yearKm}</p>
      <p>Location: {listing.location}</p>
      <p>Date: {listing.date}</p>
    </div>
  );
}
