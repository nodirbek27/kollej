import React from "react";
import Carousel from "../../components/Carousel";
import NewsHome from "../../components/NewsHomeCom";
import StudentOpinion from "../../components/StudentOpinion";
import Curriculum from "../../components/Curriculum";
import ContactUs from "../../components/Contact";
import Partners from "../../components/Partners";
import Gallery from "../../components/Gallery";
import Statistics from "../../components/Statistics";
import AboutUs from "../../components/AboutUs";
import Announcements from "../../components/Announcements";

const Main = () => {
  return (
    <div>
      <Carousel />
      <NewsHome />
      <Statistics />
      <Announcements />
      <StudentOpinion />
      <Gallery />
      <Curriculum />
      <AboutUs />
      <Partners />
      <ContactUs />
    </div>
  );
};

export default Main;
