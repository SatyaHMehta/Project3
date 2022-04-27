import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import FoodList from "../components/FoodList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asha&apos;s Kitchen</title>
        <meta name="description" content="Home Cooked Gujrati Meals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <FoodList />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await axios.get("http://localhost:3000/api/products");
//   return {
//     props: {
//       productList: res.data,
//     },
//   };
// };
// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   let res2 = await res.json()
//   return {
//     props: {
//       productList: res2,
//     },
//   };
// };