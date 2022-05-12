import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";
import {useState, useEffect} from 'react'
import axios from "axios";

export default function FoodList({products}) {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try{
  //       console.log('hello')
  //       const res = await axios.get("/api/products"||"https://ashaskitchen-satyahmehta.vercel.app/api/products");
  //       console.log(res)
  //       setProducts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  //   console.log('component loaded')
  // },[]);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Indian Food in Town</h1>
      <p className={styles.desc}>
        Authentic Indian homemade food without any preservatings. Remind you
        mom&apos;s food. We serve home made fresh delicious food with all fresh
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


