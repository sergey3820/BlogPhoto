import React from "react";
import "./HomeContent.css";
import {NavLink} from "react-router-dom";

function HomeContent() {
    return(
      <div className="homeContent_wrapper">
          <div className="mhomeContent_txt">
          <p className="side_1">ЕДА КАК ИСКУССТВО</p>
          <p className="side_2">ФОТОГРАФИЯ</p>
          </div>
          <div className="home_btn">
          <button className="show_work"><NavLink className="show_work_nav" to="/Portfolio">Смотреть работы</NavLink></button>
          </div>
      </div>
    );
}

export default HomeContent;