import React, { useState } from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

function NavBar() {

    const [burger, setBurger] = useState(false);

    function showBurger() {
        setBurger(prew => !prew);
    }

    return(
      <div className="nav_wrapper">
       <NavLink className="nav_class" to="/Home">ЯНА ОРЛОВА</NavLink>
       <ul className="nav_ul">
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Home">Главная</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Portfolio">Портфолио</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/About">Обо мне</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Books">Книги</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Blog">Блог</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Contact">Связатся</NavLink></li>
       </ul>
          <div className="menuBurger" onClick={showBurger}>
             <hr className="burgerLine"/>
             <hr className="burgerLine"/>
             <hr className="burgerLine"/>
          </div>
          <div className={burger ? "burger_modal" : "burger_none"}>
          <ul className="modal_ul">
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Home">Главная</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Portfolio">Портфолио</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/About">Обо мне</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Books">Книги</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Blog">Блог</NavLink></li>
           <li><NavLink activeClassName="best" className="nav_ul_any" to="/Contact">Связатся</NavLink></li>
       </ul>
          </div>
      </div>
    );
}

export default NavBar;