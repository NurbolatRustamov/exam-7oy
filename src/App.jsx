// import "./App.css";
// import React, { useState, useEffect } from "react";

// // import React, { useState, useEffect } from "react";
// import Loader from "./components/loader/loader"; 
// import Header from "./components/header/header";
// import Country from "./components/country/country";
// import Swiper from "./components/swiper/swiper";
// import Viza from "./components/viza/viza";
// import Transport from "./components/transport/transport";
// import Count from "./components/count/count";
// import Contact from "./components/contact/contact";
// import Map from "./components/map/map";
// import LastSwiper from "./components/lastSwiper/lastswiper";
// import Submit from "./components/submit/submit"
// import Footer from "./components/footer/footer"
// function App() {
//   return (
//     <div className="App">
//       <>
//         <Header />
//         <Country />
//         <Swiper />
//         <Viza />
//         <Transport />
//         <Count />
//         <LastSwiper />
//         <Contact />
//         <Map />
//         <Submit />
//         <Footer />
//       </>
//     </div>
//   );
// }






// // import Loader from './Loader';

// const MyApp = () => {  // Komponent nomi katta harf bilan boshlanadi
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   return <div>{isLoading ? <Loader /> : <div>Content Loaded</div>}</div>;
// };

// export default MyApp;
// export default App;


// export default myApp;

  

// module.exports = {
//   darkMode: "media", // 'media' yoki 'false' qilib o'rnatish
//   theme: {
//     extend: {
//       colors: {
//         background: "#fff", // O'zingiz xohlagan fon rangini qo'yishingiz mumkin
//       },
//     },
//   },
// };




import React, { useState, useEffect } from "react";
import "./App.css";

// Komponentlarni import qilish
import Loader from "./components/loader/loader";
import Header from "./components/header/header";
import Country from "./components/country/country";
import Swiper from "./components/swiper/swiper";
import Viza from "./components/viza/viza";
import Transport from "./components/transport/transport";
import Count from "./components/count/count";
import Contact from "./components/contact/contact";
import Map from "./components/map/map";
import LastSwiper from "./components/lastSwiper/lastswiper";
import Submit from "./components/submit/submit";
import Footer from "./components/footer/footer";


const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Loader uchun state

  useEffect(() => {
    // Loader 3 soniyada o'chadi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Country />
          <Swiper />
          <Viza />
          <Transport />
          <Count />
          <LastSwiper />
          <Contact />
          <Map />
          <Submit />
          <Footer />

        </>
      )}
    </div>
  );
};

export default App;
