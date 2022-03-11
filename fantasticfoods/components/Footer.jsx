import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Love the food! Very authentic!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our Location</h1>
          <p className={styles.text}>
            225 fluor daniel dr.
            <br /> Sugar Land, 77479
            <br /> (484) 686 -5301
          </p>
          <p className={styles.text}>
            225 fluor daniel dr.
            <br /> Sugar Land, 77479
            <br /> (484) 686 -5301
          </p>
          <p className={styles.text}>
            225 fluor daniel dr.
            <br /> Sugar Land, 77479
            <br /> (484) 686 -5301
          </p>
          <p className={styles.text}>
            225 fluor daniel dr.
            <br /> Sugar Land, 77479
            <br /> (484) 686 -5301
          </p>
        </div>
        <div className={styles.card}>
          <h1 className = {styles.title}> Working Hours </h1>
          <p className={styles.text}>
            Monday - Friday
            <br /> 10:00am - 9:00pm
            </p>
          </div>
      </div>
    </div>
  );
}
