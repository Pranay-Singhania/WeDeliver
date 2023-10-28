import React from "react";
import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import SearchLocation from "../../components/SearchLocation/SearchLocation";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import Explainer from "../../components/Explainer/Explainer";
import GlobalFigures from "../../components/GlobalFigures/GlobalFigures";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <section className="HomePage">
      <Navbar />
      <HomePageHero />
      <Explainer />
      <GlobalFigures />
      <Footer />
    </section>
  );
};

export default HomePage;
