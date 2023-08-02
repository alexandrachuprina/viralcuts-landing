import React, { useState, useEffect } from "react";
import styles from "./SubscribePlanCard.module.scss";

enum Size {
  small = "small",
  large = "large",
}

const sizeMap = {
  [Size.small]: styles.small,
  [Size.large]: styles.large,
};

interface Props {
  size: "small" | "large";
  title: string;
  price: string;
  choosen: boolean;
  disabled: boolean;
  choosePlan: (title: string) => void;
}

const SubscribePlanCard = (props: Props) => {
  const { choosePlan } = props;

  return (
    <>
      {props.disabled && (
        <div className={sizeMap[props.size]}>
          <div className={styles.disabled}>
            <h2>{props.title}</h2>
            <div>
              <p>Monthly</p>
              <p>{props.price}</p>
            </div>
          </div>
        </div>
      )}
      {!props.disabled && (
        <div
          className={sizeMap[props.size]}
          onClick={() => choosePlan(props.title)}
        >
          {props.choosen && (
            <div className={styles.dark}>
              <h2>{props.title}</h2>
              <div>
                <p>Monthly</p>
                <p>{props.price}</p>
              </div>
            </div>
          )}
          {!props.choosen && (
            <div className={styles.light}>
              <h2>{props.title}</h2>
              <div>
                <p>Monthly</p>
                <p>{props.price}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SubscribePlanCard;
