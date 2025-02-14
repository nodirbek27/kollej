import React from "react";
import Carousel from "../../components/Carousel";
import NewsHome from "../../components/NewsHomeCom";
import StudentOpinion from "../../components/StudentOpinion";
import Curriculum from "../../components/Curriculum";
import ContactUs from "../../components/Contact";
import Partners from "../../components/Partners";
import ChatIcon from "../../components/Chat";
// import Gallery from "../../components/Gallery";
import Statistics from "../../components/Statistics";
// import AboutUs from "../../components/AboutUs";
import ExploreProgram from "../../components/ExploreProgram";
import Announcements from "../../components/Announcements";

const Main = () => {
  return (
    <div>
      <Carousel />
      {/* <AboutUs /> */}
      <NewsHome />
      <Statistics />
      <Announcements />
      <StudentOpinion />
      <Curriculum />
      <ExploreProgram />
      {/* <Gallery /> */}
      <Partners />
      <ContactUs />
      <ChatIcon />
    </div>
  );
};

export default Main;
