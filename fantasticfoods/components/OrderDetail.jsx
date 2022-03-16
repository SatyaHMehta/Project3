import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

export default function OrderDetail() {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
