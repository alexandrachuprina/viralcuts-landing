import React, { useState, useEffect } from "react";
import styles from "./QuoteCard.module.scss";
import { motion } from "framer-motion";
import { smallCardMotion } from "../../../../util/animations/smallCardMotion";

enum Color {
  dark_green = "dark green",
  light_green = "light green",
  light_pink = "light pink",
  light_apricot = "light apricot",
}

const colorMap = {
  [Color.dark_green]: styles.dark_green,
  [Color.light_green]: styles.light_green,
  [Color.light_pink]: styles.light_pink,
  [Color.light_apricot]: styles.light_apricot,
};

enum Size {
  small = "sm",
  medium = "m",
  large = "l",
}

const sizeMap = {
  [Size.small]: styles.small,
  [Size.medium]: styles.medium,
  [Size.large]: styles.large,
};

interface Props {
  quote?: string;
  author?: string;
  followers?: string;
  color: "dark green" | "light pink" | "light green" | "light apricot";
  width: "sm" | "m" | "l";
  image?: string;
}

const QuoteCard = (props: Props) => {
  return (
    <motion.div
      className={sizeMap[props.width]}
      variants={smallCardMotion}
      initial={"offScreen"}
      whileInView={"onScreen"}
    >
      <div className={colorMap[props.color]}>
        <h2>{props.quote}</h2>

        <div className={styles.info}>
          {props.image ? (
            <img src={props.image} alt="avatar" className={styles.avatar} />
          ) : null}
          <div className={styles.author}>
            <p>{props.author}</p>
            {props.followers ? (
              <div className={styles.followers}>
                <p>{props.followers}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteCard;
