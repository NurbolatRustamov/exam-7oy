import React from "react";
import Afr from "../../images/afr.jpg";
import Air from "../../images/airplane.jpg";
import "./transport.css";
const Transport = () => {
  return (
    <div id="transpo" className="res-transport">
      <div className="transport">
        <div className="transport-one">
          <h2>Исследуйте направления легко</h2>
          <h4>
            Находите лучшие предложения на железнодорожные и авиабилеты в <br />{" "}
            каждом городе, тщательно отобранные для вас.
          </h4>
        </div>
        <div className="transport-two">
          <div className="transport-two-one">
            <img src={Afr} alt="" width={"342px"} height={"227px"} />
          </div>
          <div className="transport-two-two">
            <div className="father">
              <div className="child1">
                <p>Дешевые железнодорожные билеты у нас</p>
                <h3>Глобальные направления</h3>
              </div>
              <div className="child2">
                <button>Узнать больше</button>
              </div>
            </div>
            <h3>
              Отправляйтесь в железнодорожное приключение <br className="b" /> и
              исследуйте направления по всему <br /> миру. Будь то живописные
              пейзажи, <br className="b" /> оживленные города или культурные
              сокровища, <br /> наши железнодорожные услуги предлагают{" "}
              <br className="b" /> уникальный и комфортабельный способ <br />{" "}
              путешествовать по всему миру. Погрузитесь <br className="b" /> в
              красоту различных культур, доступных <br /> через наш обширный
              железнодорожный сеть. .
            </h3>
          </div>
        </div>
        <div className="transport-two">
          <div className="transport-two-one">
            <img src={Air} alt="" width={"342px"} height={"227px"} />
          </div>
          <div className="transport-two-two">
            <div className="father">
              <div className="child1">
                <p>
                  Откройте для себя захватывающие предложения <br /> по
                  воздушным перевозкам
                </p>
                <h3>Глобальные направления</h3>
              </div>
              <div className="child2">
                <button>Узнать больше</button>
              </div>
            </div>
            <h3>
              Отправляйтесь в железнодорожное приключение <br className="b" /> и
              исследуйте направления по всему <br /> миру. Будь то живописные
              пейзажи, <br className="b" /> оживленные города или культурные
              сокровища, <br /> наши железнодорожные услуги предлагают{" "}
              <br className="b" /> уникальный и комфортабельный способ <br />{" "}
              путешествовать по всему миру. Погрузитесь <br className="b" /> в
              красоту различных культур, доступных <br /> через наш обширный
              железнодорожный сеть. .
            </h3>
          </div>
        </div>
        <hr className="lenght" />
      </div>
    </div>
  );
};

export default Transport;
