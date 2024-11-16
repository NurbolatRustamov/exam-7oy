import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div id="contact" className="contact-bg">
      <p>Забронируйте предпочтительное предложение здесь</p>
      <h1>Оформите ваш заказ</h1>
      <button className="contact-btn">
        <a href="">Узнайте больше</a>
      </button>
      <div className="contact-info">
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <h3>
            Совершите <br /> телефонный звонок
          </h3>
          <h4>+998 00 000 00 00</h4>
        </div>
        <div className="email">
          <i class="fa-solid fa-envelope"></i>
          <h3> Электронной почте</h3>
          <h4>name@gmail.com</h4>
        </div>
        <div className="ofice">
          <i class="fa-solid fa-location-dot"></i>
          <h3>Посетите наши офисы</h3>
          <h4>Посетите наши офисы</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
