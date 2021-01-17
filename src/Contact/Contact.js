import React from "react";
import "./Constact.css";
import ContactItem from "./ContactItem/ContactItem";
import HomeFooter from "../Home/HomeFooter/HomeFooter";

function Contact() {
    return (
        <div className="contact_container">
            <div className="contact_wrapper">
                <div className="contact_img">

                </div>
                <ContactItem/>
            </div>
            <HomeFooter />
        </div>
    );
}

export default Contact;