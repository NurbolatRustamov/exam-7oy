import "./viza.css";
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
      <div className="res-swiper">
        <div className="swiper-boxx">
          <h2>Поддержка в получении визы</h2>
          <h4>
            Опыт беспроблемных путешествий с нашей экспертной поддержкой в
            получении визы. Мы <br /> предоставляем безупречную помощь и полное
            руководство, обеспечивая гладкое <br /> путешествие.
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
              <div className="istambull">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Япония</p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="pagee">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dubaii">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Саудовская Аравия</p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="pagee">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="antaliyaa">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Оман</p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="page">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sharmm">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Китай</p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="pagee">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="usaa">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Гонконг</p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="pagee">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="kanadaa">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Европа (Шенген) </p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="pagee">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="englandd">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Индия</p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="pagee">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="europee">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Япония</p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="pagee">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="istambull">
                <div className="modall">
                  <div className="modal-appp">
                    <div className="modal-app-onee">
                      <p>Саудовская Аравия</p>
                      <h3>234 регистрации</h3>
                    </div>
                  </div>
                  <hr />
                  <p className="pagee">Поддержка в получении визы включает:</p>
                  <h3 className="d"> Лучшие цены</h3>
                  <h3 className="d"> Краткое время обработки</h3>
                  <h3 className="d"> Надежная помощь</h3>
                  <button>Забронировать</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
