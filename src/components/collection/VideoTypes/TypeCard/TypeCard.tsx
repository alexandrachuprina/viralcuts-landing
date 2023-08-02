import React from "react";
import styles from "./TypeCard.module.scss";
import { motion } from "framer-motion";
import { smallCardMotion } from "../../../../util/animations/smallCardMotion";

interface Props {
  heading: string;
  text: string;
}

const TypeCard = (props: Props) => {
  return (
    <motion.div
      className={styles.component}
      variants={smallCardMotion}
      initial={"offScreen"}
      whileInView={"onScreen"}
    >
      <div className={styles.heading}>
        <h2>{[props.heading]}</h2>
      </div>
      <div className={styles.text}>
        <p>{[props.text]}</p>
      </div>
    </motion.div>
  );
};

export default TypeCard;
