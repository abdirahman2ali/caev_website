import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";
import Explore from "./Explore/Explore";
import DidYouKnow from "./DidYouKnow/DidYouKnow";
import Pillars from "./Pillars/Pillars";
import WhyJoinBanner from "./WhyJoinBanner/WhyJoinBanner";
import WhyJoin from "./WhyJoin/WhyJoin";
import LearnMore from "./LearnMore/LearnMore";
import Footer from "./Footer/Footer";

/**
 * General component used for displaying the home page for caev
 */
export const Home: React.FC = () => {
  const [isTop, setTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      //const isTopSession = window.scrollY > 100;
      //console.log(window.scrollY)
      window.onscroll = function (e: any) {
        //console.log(window.scrollY);
        if (window.scrollY < 300) {
          setTop(true);
        } else {
          setTop(false);
        }
      };
    });
  }, [isTop]);

  return (
    <React.Fragment>
      <Navigation isTop={isTop} />
      <Hero />
      <Explore />
      <DidYouKnow />
      <Pillars />
      <WhyJoinBanner />
      <WhyJoin />
      <LearnMore />
      <Footer />
    </React.Fragment>
  );
};
