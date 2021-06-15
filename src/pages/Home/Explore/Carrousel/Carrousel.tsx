import React from "react";
import CarrouselCard from "./CarrouselCard/CarrouselCard";
import Box from "@material-ui/core/Box";
import indian from "../../../../assets/images/indian.png";
import greek from "../../../../assets/images/greek.png";
import chinese from "../../../../assets/images/indian.png";
import pizza from "../../../../assets/images/pizza.png";
import { default as Slider, Settings } from "react-slick";
import Fade from "react-reveal/Fade";
/**
 * General componeent for carrousel of foods
 */
const Carrousel: React.FC = () => {
  /**
   * Settings for carrousel used in Slider component
   */
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1108,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <Fade>
        <Box marginBottom={4} marginTop={1}>
          <Slider {...settings}>
            <CarrouselCard
              picture={indian}
              title="Indian"
              text="India is home to one of the hottest chillies in the world. “Ghost Chilli” or “bhot jolokia” is grown in the North East states and is 400 times spicier than Tabasco Sauce"
            />
            <CarrouselCard
              picture={greek}
              title="Greek"
              text="Souvlaki dates back to ancient Greece and the Greeks were one of the first people in the world to cut the meat in the specific style used for the meal."
            />
            <CarrouselCard
              picture={pizza}
              title="Italian"
              text="Originally pizza was just a dry flat bread, but it was still Queen Margherita’s favourite food. Her chef decided to make one with three colours of their country flag."
            />
            <CarrouselCard
              picture={chinese}
              title="Chinese"
              text="Dumplings were originated 1800 years ago, they are widely popular especially in northern China, and consist of minced meat and chopped vegetables wrapped in thin dough skin. "
            />
          </Slider>
        </Box>
      </Fade>
    </React.Fragment>
  );
};

export default Carrousel;
