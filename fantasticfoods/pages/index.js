import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fantastic Foods</title>
        <meta name="description" content="Home Cooked Gujrati Meals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <FoodList productList={productList}/>
    </div>
  );
}

export const getServerSideProps = async()=>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      productList: res.data
    }
  }
}