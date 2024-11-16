import "./swiper.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div id="swp" className="swiper-box">
        <h2>
          Лучшие еженедельные предложения в <br /> каждом городе
        </h2>
        <h4>
          Откройте для себя лучшие еженедельные предложения в каждом городе,
          специально <br /> подобранные для вас. Погрузитесь в мир скидок и
          наслаждайтесь непревзойденными <br /> впечатлениями.
        </h4>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            // 320px va undan kichik ekranlar uchun
            320: {
              slidesPerView: 1, // Ekran kichik bo'lsa, faqat 1 ta slayd ko'rsatiladi
              spaceBetween: 10, // Slaydlar orasidagi bo'shliq
            },
            // 768px va undan katta ekranlar uchun
            826: {
              slidesPerView: 2, // Ekran o'rtacha bo'lsa, 2 ta slayd ko'rsatiladi
              spaceBetween: 20, // Slaydlar orasidagi bo'shliq
            },
            // 1024px va undan katta ekranlar uchun
            1254: {
              slidesPerView: 3, // Ekran katta bo'lsa, 3 ta slayd ko'rsatiladi
              spaceBetween: 30, // Slaydlar orasidagi bo'shliq
            },
          }}
        >
          <SwiperSlide>
            <div className="istambul">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>Стамбул</p>
                    <h3> 234 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$420</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dubai">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>Дубай</p>
                    <h3>300 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$700</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="antaliya">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>Анталья</p>
                    <h3> 500 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$999</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sharm">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>Шарм-эль-Шейх</p>
                    <h3> 200 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$200</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="usa">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>США</p>
                    <h3> 400 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$820</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="kanada">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>Канада </p>
                    <h3> 400 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$630</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="england">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>Англия</p>
                    <h3> 300 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$999</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="europe">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>Европа</p>
                    <h3> 400 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$700</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="istambul">
              <div className="modal">
                <div className="modal-app">
                  <div className="modal-app-one">
                    <p>Стамбул</p>
                    <h3> 234 регистрации</h3>
                  </div>
                  <div className="modal-app-two">
                    <p className="dollar">$420</p>
                    <h3>/человек</h3>
                  </div>
                </div>
                <hr />
                <p className="page">Включено в предложение:</p>
                <h3> 5-дневное путешествие проживание в отеле</h3>
                <h3> Включены авиабилеты</h3>
                <h3> Посещение достопримечательностей ежедневно</h3>
                <button>Забронировать</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
