import React from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.jpg",
    "/img/featured2.jpg",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translate(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain"/>
      </div>
    </div>
  );
}



// import { useState, useEffect } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { slideShow } from "./slideshow";
// import styles from "../styles/Featured.module.css";

// const Featured = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideLength = slideShow.length;

//   const autoScroll = true;
//   let slideInterval;
//   let intervalTime = 5000;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//     console.log("next");
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//     console.log("prev");
//   };

//   function auto() {
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, []);

//   useEffect(() => {
//     if (autoScroll) {
//       auto();
//     }
//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className={styles.slider}>
//       <AiOutlineArrowLeft className={styles.arrowPrev} onClick={prevSlide} />
//       <AiOutlineArrowRight className={styles.arrowNext} onClick={nextSlide} />
//       {slideShow.map((slide, index) => {
//         return (
//           <div
//             className={index === currentSlide ? "slide current" : "slide"}
//             key={index}
//           >
//             {index === currentSlide && (
//               <div className={styles.fill}>
//                 <img src={slide.image} alt="slide" layout="fill" className="image" />
//                 <div className={styles.content}>
//                   <h1>{slide.heading}</h1>
//                   <h2>{slide.desc}</h2>
//                   <hr />
//                 </div>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Featured;
