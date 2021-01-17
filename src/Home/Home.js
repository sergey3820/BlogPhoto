import React from "react";
import "./Home.css";
import HomeContent from "./HomeContent/HomeContent";
import HomeFooter from "./HomeFooter/HomeFooter";

function Home() {
    return(
      <div className="home_wrapper">
      <HomeContent />
      <HomeFooter />
      </div>
    );
}

export default Home
