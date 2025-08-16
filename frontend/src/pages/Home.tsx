import Explore from "../components/explore.tsx/Explore";
import Hero from "../components/heroSection/Hero";
import { Testimonials } from "../components/Testimonials";
import Header from "../layouts/Header";
import { CarListings } from "../components/CarListings";
import  {About}  from "../components/About";
import { BikeListings } from "../components/BikeListings";
import { Recommendation } from "../components/Recommendation";
import  Footer  from "../layouts/footer";
import Plan from "../components/Plan";
import Review from "../components/review";


export const Home: React.FC = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Explore/>
        <Testimonials/>
        <CarListings/>
        <BikeListings/>
        <Recommendation/>
        <About/>
        <Plan/>
        <Review/>
        <Footer/>
    </>
    
  );
}
