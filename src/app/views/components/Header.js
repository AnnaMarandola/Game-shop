import React from "react";
import "../../styles/Header.css";
import dice from "../../assets/Sans titre (6) (1).png";
import NewsCarousel from "./Carousel";

const Header = () => {
  return (
    <div className="header">
      <section className="header-content">
          <img className="dice" src={dice} alt="logo" />
          <h1 className="header-title">Planet Arcadia</h1>
          <h5 className="header-subtitle">
            Boutique de jeux de société en ligne
          </h5>
      </section>
      <div className="carousel">
      <h2>Nouveautés !</h2>
        <NewsCarousel/>
      </div>
    </div>
  );
};

export default Header;
