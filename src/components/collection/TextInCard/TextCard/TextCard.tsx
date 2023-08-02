import React from "react";
import styles from "./TextCard.module.scss";

interface Props {
  heading: string;
  text: string;
  reverse: boolean;
  icon?: string;
}

const TextCard = (props: Props) => {
  return (
    <>
      {props.reverse ? (
        <>
          <div className={styles.component}>
            {props.icon ? (
              <img src={props.icon} alt="icon" className={styles.icon} />
            ) : null}
            <div className={styles.heading_reversed}>
              <h2>{props.heading}</h2>
            </div>
            <div className={styles.text_reversed}>
              <p>{props.text}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.component}>
            {props.icon ? (
              <img src={props.icon} alt="icon" className={styles.icon} />
            ) : null}
            <div className={styles.heading}>
              <h2>{props.heading}</h2>
            </div>
            <div className={styles.text}>
              <h2>{props.text}</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TextCard;
