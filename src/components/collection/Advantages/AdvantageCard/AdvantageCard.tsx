import React from "react";
import styles from "./AdvantageCard.module.scss";

interface Props {
  heading: string;
  text: string;
  icon?: string;
}

const AdvantageCard = (props: Props) => {
  return (
    <div className={styles.card}>
      <img alt="icon" src={props.icon} className={styles.icon} />
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default AdvantageCard;
