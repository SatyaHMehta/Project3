import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";

export default function FoodList({ productList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Indian Food in Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fugit,
        accusamus impedit magnam architecto officia sint praesentium minus quasi
        eum nihil ipsa nobis. Perspiciatis, repellendus ad autem animi eligendi
        aliquid.
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <FoodCard key={product._id} product={product}/>
        ))}
      </div>
    </div>
  );
}
