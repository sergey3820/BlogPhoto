import React from "react";
import "./HomeFooter.css";

function HomeFooter() {
    return(
      <div className="homeFooter_wrapper">
        <div className="homeIcons">
            <img src="https://www.flaticon.com/svg/static/icons/svg/25/25684.svg"
                 alt="vkontakte"
                 width="20px"
                 height="20px"
            />
            <img src="https://www.citypng.com/public/uploads/preview/-11594987359wsqhsnkcge.png"
                 alt="Pinterest"
                 width="20px"
                 height="20px"
            />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB1cyHiZxoSbA9yHJep0SUR7VoyzOnd9g-hA&usqp=CAU"
                 alt="Facebook"
                 width="20px"
                 height="20px"
            />
            <img src="https://image.flaticon.com/icons/png/512/39/39379.png"
                 alt="Twitter"
                 height="20px"
                 width="20px"
            />
            <img src="https://cdn.iconscout.com/icon/free/png-256/instagram-2105264-1779299.png"
                 alt="Instagram"
                 width="20px"
                 height="20px"
            />
        </div>
          <div className="footer_text">
              <p>© 2023 Еда как искусство. Сайт создал</p>
              <a href="#">Sergey Khachikyan</a>
          </div>
      </div>
    );
}

export default HomeFooter;