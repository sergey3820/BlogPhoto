import React from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import HomeFooter from "../Home/HomeFooter/HomeFooter";

function Portfolio(props) {
    return (
        <div className="portfolio_wrapper">
            <div className="portfolio_main">
                { props.portfolioState.map((port) => {
                    return <PortfolioItem portfolioState={port} key={port.id} />
                }) }
            </div>
            <HomeFooter />
        </div>
    );
}

export default Portfolio;