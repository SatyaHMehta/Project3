import React from "react";
import Image from "next/image";
import styles from "../styles/FoodCard.module.css";
import Link from "next/link"

export default function FoodCard({product}) {

  return <div className={styles.container}>
    <Link href={`/product/${product._id}`} passHref>
      <Image src={product.img} alt='' width='500' height='500'/>
    </Link>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.desc}</p>
        <span className={styles.price}>${product.prices[0]}</span>
      </div>;
}
