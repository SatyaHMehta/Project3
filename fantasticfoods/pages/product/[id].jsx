import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Product({ food }) {
  const [size, setSize] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={food.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{food.title}</h1>
        <span className={styles.price}>${food.prices[size]}</span>
        <p className={styles.desc}>{food.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional sides</h3>
        <div className={styles.sides}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Chutney</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="salad"
              name="salad"
              className={styles.checkbox}
            />
            <label htmlFor="salad">Onion, Tomatoes & Peppers Salad</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="papadum"
              name="papadum"
              className={styles.checkbox}
            />
            <label htmlFor="papadum">Papadum</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="pickle"
              name="pickle"
              className={styles.checkbox}
            />
            <label htmlFor="pickle">Indian Pickle</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      food: res.data,
    },
  };
};
