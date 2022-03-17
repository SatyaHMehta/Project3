import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";

export default function FoodList({ productList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Indian Food in Town</h1>
      <p className={styles.desc}>
        Authentic Indian homemade food without any preservatings. Remind you
        mom&apos;s food. We server home made fresh delicious food with all fresh
        veggies. we do take party orders.
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <FoodCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
