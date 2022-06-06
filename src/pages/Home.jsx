import React from "react";
import Announcement from "../components/home/Announcement";
import Navbar from "../components/home/Navbar";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />

      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
