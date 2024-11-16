// import React from "react";
// import "./lastswiper.css";
// const Lastswiper = () => {
//   return (
//     <div className="boxes">
//       <div className="img img-1">
//         <div className="img-text">
//           <h2>Дубай</h2>
//           <p>Население: 2 млн.</p>
//         </div>
//       </div>
//       <div className="img img-2">
//         <div className="img-text">
//           <h2>Анталья</h2>
//           <p>Население: 3.5 млн.</p>
//         </div>
//       </div>
//       <div className="img img-3">
//         <div className="img-text">
//           <h2>Стамбул</h2>
//           <p>Население: 4.1 млн.</p>
//         </div>
//       </div>
//       <div className="img img-4">
//         <div className="img-text">
//           <h2>Шарм-эль-Шейх</h2>
//           <p>Население: 4 млн.</p>
//         </div>
//       </div>
//       <div className="img img-5">
//         <div className="img-text">
//           <h2>Париж</h2>
//           <p>Население: 3 млн.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lastswiper;

// const images = document.querySelectorAll(".boxes .img");

// images.forEach((image) => {
//   image.addEventListener("click", () => {
//     // Barcha divlardan 'active' sinfini olib tashlash
//     images.forEach((img) => img.classList.remove("active"));
//     // Bosilgan divga 'active' sinfini qo‘shish
//     image.classList.add("active");
//   });
// });

import React, { useState } from "react";
import "./lastswiper.css";

const Lastswiper = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index); // Set active index on click
  };

  return (
    <div>
      <h1 className="frog">Лучшие Места</h1>
      <p className="from">
        Откройте для себя лучшие предложения в каждом городе, отобранные
        специально для <br /> вас. Погрузитесь в мир сэкономленных средств и
        наслаждайтесь неповторимыми <br /> впечатлениями.
      </p>
      <div className="boxes">
        {["Дубай", "Анталья", "Стамбул", "Шарм-эль-Шейх", "Париж"].map(
          (city, index) => (
            <div
              key={index}
              className={`img img-${index + 1} ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="img-text">
                <h2>{city}</h2>
                <p>
                  Население:{" "}
                  {index === 0
                    ? "2 млн."
                    : index === 1
                    ? "3.5 млн."
                    : index === 2
                    ? "4.1 млн."
                    : index === 3
                    ? "4 млн."
                    : "3 млн."}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Lastswiper;
