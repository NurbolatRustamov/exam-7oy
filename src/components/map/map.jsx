// import React from "react";
// import "./map.css";
// const Map = () => {
//   return (
//     <div className="map">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95896.14747703189!2d69.21302736865891!3d41.31420168197382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6e0533a81f%3A0x811386703e0f1ce4!2sLutfiy!5e0!3m2!1sru!2s!4v1727411317909!5m2!1sru!2s"
//         width="100%"
//         height="450px"
//         frameborder="0"
//         style="
//                     border: 0;
//                     border-top-left-radius: 23px;
//                     border-top-right-radius: 23px;
//                   "
//         allowfullscreen=""
//       ></iframe>
//     </div>
//   );
// };

// export default Map;

import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div className="res-map">
      <div className="big-map">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95896.14747703189!2d69.21302736865891!3d41.31420168197382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6e0533a81f%3A0x811386703e0f1ce4!2sLutfiy!5e0!3m2!1sru!2s!4v1727411317909!5m2!1sru!2s"
            width="100%"
            height="450px"
            frameBorder="0" // Reactda camelCase bo'lishi kerak
            style={{
              border: "0",
              borderTopLeftRadius: "23px", // Style ob'ektida to'g'ri yozilishi kerak
              borderTopRightRadius: "23px",
            }}
            allowFullScreen="" // Reactda camelCase bo'lishi kerak
          ></iframe>
        </div>
      </div>

      {/* <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Submit
        </button>
      </form> */}
      <div className="res-inp">
        <div className="inputs-box">
          <form className="torm">
            <div class=" grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-gray-300 placeholder-gray-500 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Например, Иван Иванов"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Ваш номер телефона
                </label>
                <input
                  type="number"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-gray-300 placeholder-gray-500 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Например, +xxx xxx xxx"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Количество гостей
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-gray-300 placeholder-gray-500 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="например, 3"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Дата заезда
                </label>
                <input
                  type="text"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-gray-300 placeholder-gray-500 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="дд.мм.гггг"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 text-black"
              >
                Выберите ваш пункт назначения
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-gray-300 placeholder-gray-500 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Анталья"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 text-black"
              >
                Выберите свою визовую поддержку
              </label>
              <input
                type="text"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-gray-300 placeholder-gray-500 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Country"
                required
              />
            </div>
            <button
              type="submit"
              class="text-white bg-[#22b3c1] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Забронировать сейчас
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Map;
