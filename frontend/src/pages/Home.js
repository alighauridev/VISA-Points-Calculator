import React, { useState } from "react";
import Navigation from "../components/Navigation";
import PointsCalculator from "./PointsCalculator";
import data from "../assests/data.json";
import Footer from "../components/Footer";
const Home = () => {

  return (
    <>
      <main>
        <Navigation />
        <PointsCalculator questions={data.questions} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
