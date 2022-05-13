import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import FoodList from "../components/FoodList";
import styles from "../styles/Home.module.css";
import dbConnect from "../util/mongo"

export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fantastic Foods</title>
        <meta name="description" content="Home Cooked Gujrati Meals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <FoodList products={productList}/>
    </div>
  );
}

export const getServerSideProps = async()=>{
  await dbConnect();
  const res = await axios.get(`${process.env.API_ROOT}/api/products`||`${process.env.LOCAL_URL}/api/products`);
  return{
    props:{
      productList: res.data
    }
  }
}
// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   const res2 = res.json()
//   return {
//     props: {
//       productList: res2,
//     },
//   };
// };
