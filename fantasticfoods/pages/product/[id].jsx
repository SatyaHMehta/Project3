import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Product() {
  const [size, setSize] = useState(0);

  const food1 = {
    id: 1,
    img: "/img/IndianFood1.PNG",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eveniet minima quia, ad eum, blanditiis modi debitis sequi inventore maiores ipsum odio eos beatae rem nulla odit explicabo! Quod, at.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={food1.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{food1.name}</h1>
        <span className={styles.price}>${food1.price[size]}</span>
        <p className={styles.desc}>{food1.desc}</p>
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
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
