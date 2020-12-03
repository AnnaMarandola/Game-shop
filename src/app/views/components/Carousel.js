import React, { Component, Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import starwars from "../../assets/starwars.png";
import teneku from "../../assets/tneku.png";
import pigeon from "../../assets/pigeon.png";
import "../../styles/Header.css";

class NewsCarousel extends Component {
  render() {
    return (
      <div className="carousel">
      <h4 className="news-title">Nouveautés :</h4>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={starwars} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={teneku} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={pigeon} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default NewsCarousel;
