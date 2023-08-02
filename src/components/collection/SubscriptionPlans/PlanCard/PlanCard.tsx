import React, { ReactNode, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./PlanCard.module.scss";
import BasicButton from "../../../UI-kit/Basic Button/BasicButton";
import { motion } from "framer-motion";
import { smallCardMotion } from "../../../../util/animations/smallCardMotion";

enum Color {
  black = "black",
  gray = "gray",
  none = "none",
}

const colorMap = {
  [Color.black]: styles.black,
  [Color.gray]: styles.gray,
  [Color.none]: styles.none,
};

interface Props {
  color: "none" | "gray" | "black";
  heading: string;
  price: string;
  description: string;
  special?: string;
  icon?: string;
  text: string[];
  buttonText: string;
  buttonColor: "dark" | "light" | "green" | "none" | "drawer";
}

const PlanCard = (props: Props) => {
  return (
    <motion.div
      className={styles.component}
      variants={smallCardMotion}
      initial={"offScreen"}
      whileInView={"onScreen"}
    >
      <div className={colorMap[props.color]}>
        <div className={styles.header}>
          <h2>{props.heading}</h2>
          <h1>{props.price}</h1>
          <p>{props.description}</p>
          {props.special ? (
            <div className={styles.special}>
              <p>{props.special}</p>
            </div>
          ) : null}
        </div>
        <div className={styles.text}>
          <img src={props.icon} alt="icon" className={styles.icon} />
          {props.text.map((elem) => (
            <h2>{elem}</h2>
          ))}
        </div>
        <Link to="plans">
          <div className={styles.button}>
            <BasicButton color={props.buttonColor} text={props.buttonText} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default PlanCard;
