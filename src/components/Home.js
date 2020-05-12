import React from "react";
import { Link } from "react-router-dom";
import Hero from "./pages/Hero";
import Banner from "./pages/Banner";
import Services from "./pages/Services";
import FeaturedRooms from "./pages/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="Welcome To The Happy Place"
          subtitle="Set on the beautiful city of Abuja. featuring a chic atmosphere, the hotel is designed for complete relaxation, romance, and leisure. We provide extensive leisure and business facilities whether you are here for business or pleasure, we have all you need"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
