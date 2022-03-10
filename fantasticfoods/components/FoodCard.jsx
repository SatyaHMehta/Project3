import React from "react";
import Image from "next/image";
import styles from "../styles/FoodCard.module.css";

export default function FoodCard() {
  return <div className={styles.container}>
      <Image src='/img/IndianFood1.PNG' alt='' width='500' height='500'/>
        <h1 className={styles.title}>Tandoori Chicken</h1>
        <span className={styles.price}>$14.99</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>;
}
