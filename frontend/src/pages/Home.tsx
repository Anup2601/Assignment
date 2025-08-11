import Explore from "../components/explore.tsx/Explore";
import Hero from "../components/heroSection/Hero";
import { Testimonials } from "../components/Testimonials";
import Header from "../layouts/Header";
import { Listings } from "../components/Listings";

export const Home: React.FC = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Explore/>
        <Testimonials/>
        <Listings/>
    </>
    
  );
}
