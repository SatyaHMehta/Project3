import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";
import React, {useState, useEffect } from "react";
import axios from "axios";

export default function FoodList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try{
        const res = await axios.get("http://localhost:3000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  },[]);
  console.log(products)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Indian Food in Town</h1>
      <p className={styles.desc}>
        Authentic Indian homemade food without any preservatings. Remind you
        mom&apos;s food. We server home made fresh delicious food with all fresh
        veggies. we do take party orders.
      </p>
      <div className={styles.wrapper}>
        {products.map((product) => (
          <FoodCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
