import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/footerLogo.jpg" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Love the food! Very authentic!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our Location</h1>
          <p className={styles.text}>
            225 Fluor Daniel Dr.
            <br /> Sugar Land, TX 77479
            <br /> (484) 686 - 7920
          </p>
          <p className={styles.text}>
            1038 Willow Branch Dr.
            <br /> Orlando, FL 32828
            <br /> (407) 913 - 6447
          </p>
          <p className={styles.text}>
            6750 Forest City Rd.
            <br /> Orlando, FL 32810
            <br /> (407) 822 - 5297
          </p>
          <p className={styles.text}>
            16107 Kensington Dr.
            <br /> Sugar Land, TX 77479
            <br /> (281) 277 - 3059
          </p>
        </div>
        <div className={styles.card}>
          <h1 className = {styles.title}> Working Hours </h1>
          <p className={styles.text}>
            Tuesday - Sunday
            <br /> 10:00am - 9:00pm
            </p>
          </div>
      </div>
    </div>
  );
}
