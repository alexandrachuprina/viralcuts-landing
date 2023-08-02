import React from "react";
import styles from "./PopUp.module.scss";

interface Props {
  text: string;
}

const PopUp = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.component}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default PopUp;
