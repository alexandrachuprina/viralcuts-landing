import React from "react";
import styles from "./PlanPopUp.module.scss";

interface Props {
  title: string | undefined;
  price: string | undefined;
}

const PlanPopUp = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2>{props.title}</h2>
        <p className={styles.price}>{props.price}</p>
      </div>
    </div>
  );
};

export default PlanPopUp;
