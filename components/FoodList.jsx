import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";
import React, {useState, useEffect } from "react";
import axios from "axios";


export default function FoodList({productList}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try{
        const res = await axios.get("http://localhost:3000/api/products"||"https://ashaskitchen-satyahmehta.vercel.app/api/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  },[]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Indian Food in Town</h1>
      <p className={styles.desc}>
        Authentic Indian homemade food without any preservatings. Remind you
        mom&apos;s food. We serve home made fresh delicious food with all fresh
        veggies. we do take party orders.
      </p>
      {products && <div className={styles.wrapper}>
        {products.map((product) => (
          <FoodCard key={product._id} product={product} />
        ))}
      </div>}
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await axios.get("http://localhost:3000/api/products");
//   const res2 = await res.data
//   console.log(res2)
//   return {
//     props: {productList},
//   };
// };
