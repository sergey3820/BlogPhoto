import React from "react";
import "./ContactItem.css";

function ContactItem() {
    return(
      <div className="contactItem_wrapper">
          <p className="contact_name">СВЯЖИТЕСЬ СО МНОЙ</p>
          <p className="contact_txt">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст.</p>
         <div className="form_wrapper">
             <p className="contact_number">+7 (495) 000-00-00  |  info@mysite.ru</p>
             <form className="contact_form">
                 <input type="text" placeholder="Имя" className="test"/><br/>
                 <input type="text" placeholder="Эл почта"/><br/>
                 <input type="text" placeholder="Телефон"/><br/>
                 <textarea cols="30" rows="6" placeholder="Добавтье сообщение..."></textarea><br/>
                 <button className="contactForm_btn">Отправить</button>
             </form>
         </div>
          <div className="contact_subscribe">
              <p className="sub_txt">Подпишитесь на рассылку</p>
              <input type="text" placeholder="Добавтье эл почту*" className="mail"/>
              <button className="sub_ok">OK</button>
          </div>
      </div>
    );
}

export default ContactItem;