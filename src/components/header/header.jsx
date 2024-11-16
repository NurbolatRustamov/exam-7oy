// import React from "react";
// import "./header.css";
// const Header = () => {
//   return (
//     <div>
//       <header className="header">
//         <div className="header-logo">
//           <h1>Travel</h1>
//         </div>
//         <ul className="header-menu">
//           <li>
//             <a href="#">Главная</a>
//           </li>
//           <li>
//             <a href="#transpo">О нас</a>
//           </li>
//           <li>
//             <a href="#swp">Туры</a>
//           </li>
//           <li>
//             <a href="#contact">Контакты</a>
//           </li>
//         </ul>
//         <ul className="header-langs">
//           <li>
//             <a href="#">UZ</a>
//           </li>
//           <li>
//             <a href="#">ENG</a>
//           </li>
//           <li>
//             <a href="#">RU</a>
//           </li>
//           <li>
//             <a href="#">
//               <i class="fa-brands fa-telegram"></i>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i class="fa-brands fa-instagram"></i>
//             </a>
//           </li>
//         </ul>
//         <div className="header-bars">
//           <i class="fa-solid fa-bars"></i>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Burger menyusi holati

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Menyu holatini almashtirish
  };

  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <h1>Travel</h1>
        </div>
        <ul className={`header-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#transpo">О нас</a>
          </li>
          <li>
            <a href="#swp">Туры</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
        </ul>
        <ul className="header-langs">
          <li>
            <a href="#">UZ</a>
          </li>
          <li>
            <a href="#">ENG</a>
          </li>
          <li>
            <a href="#">RU</a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="header-bars" onClick={toggleMenu}>
          <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </header>
    </div>
  );
};

export default Header;


// import React, { useContext } from "react";
// import { LanguageContext } from "./LanguageContext"; // Kontekstni ulash
// import "./header.css";

// const Header = () => {
//   const { language, setLanguage } = useContext(LanguageContext); // Kontekstdan olish

//   const changeLanguage = (lang) => {
//     setLanguage(lang); // Tilni yangilash
//   };

//   return (
//     <header className="header">
//       <div className="header-logo">
//         <h1>Travel</h1>
//       </div>
//       <ul className="header-menu">
//         <li>
//           <a href="#">
//             {language === "ru"
//               ? "Главная"
//               : language === "uz"
//               ? "Bosh sahifa"
//               : "Home"}
//           </a>
//         </li>
//         <li>
//           <a href="#transpo">
//             {language === "ru"
//               ? "О нас"
//               : language === "uz"
//               ? "Biz haqimizda"
//               : "About Us"}
//           </a>
//         </li>
//         <li>
//           <a href="#swp">
//             {language === "ru"
//               ? "Туры"
//               : language === "uz"
//               ? "Sayohatlar"
//               : "Tours"}
//           </a>
//         </li>
//         <li>
//           <a href="#contact">
//             {language === "ru"
//               ? "Контакты"
//               : language === "uz"
//               ? "Aloqa"
//               : "Contact"}
//           </a>
//         </li>
//       </ul>
//       <ul className="header-langs">
//         <li>
//           <button onClick={() => changeLanguage("uz")}>UZ</button>
//         </li>
//         <li>
//           <button onClick={() => changeLanguage("eng")}>ENG</button>
//         </li>
//         <li>
//           <button onClick={() => changeLanguage("ru")}>RU</button>
//         </li>
//       </ul>
//     </header>
//   );
// };

// export default Header;

