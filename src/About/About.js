import React from "react";
import "./About.css";
import HomeFooter from "../Home/HomeFooter/HomeFooter";

function About() {
    return (
        <div className="about_container">
            <div className="about_wrapper">
                <div className="aboutImg">

                </div>
                <div className="about_txt">
                    <p className="name">ЯНА ОРЛОВА</p>
                    <p className="about_1">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто
                        кликните
                        дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на
                        странице. Расскажите посетителям сайта о себе.</p>
                    <p className="about_company">Здесь будет удачно смотреться текст о вашей компании и услугах.</p>
                    <div className="about_study">
                        <p className="study">Образование:</p>
                        <p className="study_txt">Это текст. Кликните дважды, чтобы отредактировать. Расскажите
                            посетителям
                            сайта о себе, своих услугах и преимуществах.</p>
                    </div>
                    <div className="about_gift">
                        <p className="gift">Награды и номинации:</p>
                        <p className="gift_txt">Это текст. Кликните дважды, чтобы отредактировать и рассказать
                            посетителям о
                            себе.</p>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </div>
    );
}

export default About;