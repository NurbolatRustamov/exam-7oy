// import React from "react";
// import "./country.css";
// import Antaliya from "../../images/antalya2.jpg";

// const Country = () => {
//   const bgStyle = {
//     backgroundImage: `url(${Antaliya})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh",
//     color: "white",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   return (
//     <div className="content" style={bgStyle}>
//       
//       <button className="ant-btn">Перейти</button>
//       <div className="ant-box">
//         <div>
//           <div>
//             <i class="fa-solid fa-user"></i>
//           </div>
//           <div>
//             <p>Население:</p>
//             <h3>8,66 млн</h3>
//           </div>
//         </div>
//         <div>
//           <div>
//             <i class="fa-solid fa-globe"></i>
//           </div>
//           <div>
//             <p>Территория:</p>
//             <h3>41 290 км</h3>
//           </div>
//         </div>

//         <div>
//           <div>
//             <i class="fa-solid fa-house"></i>
//           </div>
//           <div>
//             <p>Средняя цена:</p>
//             <h3>$1 100 200</h3>
//           </div>
//         </div>
//         <div>
//           <button>Узнать больше</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Country;


// import React, { useEffect, useState } from "react";

// const BackgroundChanger = () => {
//   const [backgroundIndex, setBackgroundIndex] = useState(0);

//   // 4 ta background rasm manzillari
//   const backgrounds = [
//     
//   ];

//   // backgroundni har 4 soniyada o'zgartirish
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 4000); // 4 soniyada backgroundni almashtirish

//     // component unmount bo'lganda intervalni to'xtatish
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundImage: backgrounds[backgroundIndex],
//         transition: "background-image 1s ease-in-out", // backgroundning o'zgarishini yumshoq qilish
//       }}
//     >
//       {/* Sayt mazmunini shu yerga qo'shishingiz mumkin */}
//     </div>
//   );
// };

// export default BackgroundChanger;




// import React, { useEffect, useState } from "react";
// import "./styles.css"; // CSS faylini ulash

// const BackgroundChanger = () => {
//   const [backgroundIndex, setBackgroundIndex] = useState(0);

//   // 4 ta fon tasvirlari
//   const backgrounds = [
//     "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/dubai2.jpg)",
//     "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/sharm.jpg)",
//     "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/istanbul.jpg)",
//     "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/antalya2.jpg)",
//   ];

//   // Har bir fon uchun shahar nomlari
//   const cities = [
//     "Дубай", // 1-chi fon
//     "Шарм-эль-Шейх", // 2-chi fon
//     "Стамбул", // 3-chi fon
//     "Анталия", // 4-chi fon
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 4000); // Har 4 soniyada fonni almashtirish

//     return () => clearInterval(interval); // Component unmount bo'lganda intervalni to'xtatish
//   }, []);

//   return (
//     <div
//       style={{
//         height: "100vh", // To'liq ekranni qamrab olish
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundImage: backgrounds[backgroundIndex],
//         transition: "background-image 1s ease-in-out",
//         position: "relative",
//       }}
//     >
//       <p className="city">Загляните в красивый город:</p>
//       <h1 className="ant-h1">{cities[backgroundIndex]}</h1>{" "}
//       {/* Har bir fon uchun shahar nomini ko'rsatish */}
//       <button className="ant-btn">Перейти</button>
//       <div className="ant-box">
//         <div className="info">
//           <div>
//             <i className="fa-solid fa-user"></i>
//           </div>
//           <div>
//             <p>Население:</p>
//             <h3>8,66 млн</h3>
//           </div>
//         </div>
//         <div className="info">
//           <div>
//             <i className="fa-solid fa-globe"></i>
//           </div>
//           <div>
//             <p>Территория:</p>
//             <h3>41 290 км</h3>
//           </div>
//         </div>
//         <div className="info">
//           <div>
//             <i className="fa-solid fa-house"></i>
//           </div>
//           <div>
//             <p>Средняя цена:</p>
//             <h3>$1 100 200</h3>
//           </div>
//         </div>
//         <div>
//           <button>Узнать больше</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundChanger;

import React, { useEffect, useState } from "react";
import "./styles.css"; // CSS faylini ulash

const BackgroundChanger = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // 4 ta fon tasvirlari
  const backgrounds = [
    "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/dubai2.jpg)",
    "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/sharm.jpg)",
    "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/istanbul.jpg)",
    "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/antalya2.jpg)",
  ];

  // Har bir shahar uchun ma'lumotlar
  const citiesInfo = [
    {
      name: "Дубай",
      population: "67,41 млн",
      area: "551,500 км²",
      price: "$425,600",
    },
    {
      name: "Шарм-эль-Шейх",
      population: "69,86 млн",
      area: "513,123 км²",
      price: "$165,450",
    },
    {
      name: "Стамбул",
      population: "44,48 млн",
      area: "245,400 км²",
      price: "$946,000",
    },
    {
      name: "Анталия",
      population: "8,66 млн",
      area: "41,2900 км²",
      price: "$1,100,200",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000); // Har 4 soniyada fonni almashtirish

    return () => clearInterval(interval); // Component unmount bo'lganda intervalni to'xtatish
  }, []);

  return (
    <div
      style={{
        height: "100vh", // To'liq ekranni qamrab olish
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: backgrounds[backgroundIndex],
        transition: "background-image 1s ease-in-out",
        position: "relative",
      }}
    >
      <p className="city">Загляните в красивый город:</p>
      <h1 className="ant-h1">{citiesInfo[backgroundIndex].name}</h1>{" "}
      {/* Har bir fon uchun shahar nomini ko'rsatish */}
      <button className="ant-btn">Перейти</button>
      <div className="ant-box">
        <div className="info">
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <p>Население:</p>
            <h3>{citiesInfo[backgroundIndex].population}</h3>{" "}
            {/* Shaharning aholisi */}
          </div>
        </div>
        <div className="info">
          <div>
            <i className="fa-solid fa-globe"></i>
          </div>
          <div>
            <p>Территория:</p>
            <h3>{citiesInfo[backgroundIndex].area}</h3> {/* Shahar maydoni */}
          </div>
        </div>
        <div className="info">
          <div>
            <i className="fa-solid fa-house"></i>
          </div>
          <div>
            <p>Средняя цена:</p>
            <h3>{citiesInfo[backgroundIndex].price}</h3>{" "}
            {/* Shaharning o'rtacha narxi */}
          </div>
        </div>
        <div>
          <button>Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;


// import React, { useEffect, useState, useContext } from "react";
// import { LanguageContext } from "./LanguageContext"; // Kontekstni ulash
// import "./styles.css";

// const BackgroundChanger = () => {
//   const { language } = useContext(LanguageContext); // Tilni olish
//   const [backgroundIndex, setBackgroundIndex] = useState(0);

//   const backgrounds = [
//     "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/dubai2.jpg)",
//     "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/sharm.jpg)",
//     "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/istanbul.jpg)",
//     "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/antalya2.jpg)",
//   ];

//   const translations = {
//     ru: [
//       {
//         name: "Дубай",
//         population: "67,41 млн",
//         area: "551,500 км²",
//         price: "$425,600",
//       },
//       {
//         name: "Шарм-эль-Шейх",
//         population: "69,86 млн",
//         area: "513,123 км²",
//         price: "$165,450",
//       },
//       {
//         name: "Стамбул",
//         population: "44,48 млн",
//         area: "245,400 км²",
//         price: "$946,000",
//       },
//       {
//         name: "Анталия",
//         population: "8,66 млн",
//         area: "41,2900 км²",
//         price: "$1,100,200",
//       },
//     ],
//     uz: [
//       {
//         name: "Dubay",
//         population: "67,41 mln",
//         area: "551,500 km²",
//         price: "$425,600",
//       },
//       {
//         name: "Sharm-el-Sheyx",
//         population: "69,86 mln",
//         area: "513,123 km²",
//         price: "$165,450",
//       },
//       {
//         name: "Istanbul",
//         population: "44,48 mln",
//         area: "245,400 km²",
//         price: "$946,000",
//       },
//       {
//         name: "Antaliya",
//         population: "8,66 mln",
//         area: "41,2900 km²",
//         price: "$1,100,200",
//       },
//     ],
//     eng: [
//       {
//         name: "Dubai",
//         population: "67.41 million",
//         area: "551,500 km²",
//         price: "$425,600",
//       },
//       {
//         name: "Sharm El-Sheikh",
//         population: "69.86 million",
//         area: "513,123 km²",
//         price: "$165,450",
//       },
//       {
//         name: "Istanbul",
//         population: "44.48 million",
//         area: "245,400 km²",
//         price: "$946,000",
//       },
//       {
//         name: "Antalya",
//         population: "8.66 million",
//         area: "41,2900 km²",
//         price: "$1,100,200",
//       },
//     ],
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const city = translations[language][backgroundIndex];

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundImage: backgrounds[backgroundIndex],
//         transition: "background-image 1s ease-in-out",
//         position: "relative",
//       }}
//     >
//       <p className="city">
//         {language === "ru"
//           ? "Загляните в красивый город:"
//           : language === "uz"
//           ? "Go'zal shaharga nazar tashlang:"
//           : "Take a look at the beautiful city:"}
//       </p>
//       <h1 className="ant-h1">{city.name}</h1>
//       <div className="ant-box">
//         <div className="info">
//           <p>Population:</p>
//           <h3>{city.population}</h3>
//         </div>
//         <div className="info">
//           <p>Area:</p>
//           <h3>{city.area}</h3>
//         </div>
//         <div className="info">
//           <p>Price:</p>
//           <h3>{city.price}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundChanger;


