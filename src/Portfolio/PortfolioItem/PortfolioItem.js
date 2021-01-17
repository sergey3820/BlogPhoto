import React from "react";
import "./PortfolioItem.css";

function PortfolioItem({ portfolioState }) {
    return (
        <div
            style={{backgroundImage: `url(${portfolioState.portfolioImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
            className="PortfolioItem_wrapper">
            <p className="portfolioItem_edit">{ portfolioState.PortfolioText }</p>
            <div className="portfolioItem_btn_wrapper">
                <button className="portfolioItem_btn">Смотреть</button>
            </div>
        </div>
    );
}

export default PortfolioItem;