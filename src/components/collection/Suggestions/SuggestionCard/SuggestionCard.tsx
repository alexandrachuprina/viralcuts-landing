import React from "react";
import styles from "./SuggestionCard.module.scss";
import BasicButton from "../../../UI-kit/Basic Button/BasicButton";
import { motion } from "framer-motion";
import { smallCardMotion } from "../../../../util/animations/smallCardMotion";

enum Color {
  black = "black",
  gray = "gray",
  none = "none",
  bright_green = "bright green",
}

const colorMap = {
  [Color.black]: styles.black,
  [Color.gray]: styles.gray,
  [Color.none]: styles.none,
  [Color.bright_green]: styles.bright_green,
};

interface Props {
  color: "none" | "gray" | "black" | "bright green";
  heading: string;
  icon?: string;
  text: string;
  buttonColor: "dark" | "light" | "green" | "none" | "drawer";
  buttonText: string;
  showPopUp?: () => void;
}

const SuggestionCard = (props: Props) => {
  return (
    <motion.div
      className={styles.component}
      variants={smallCardMotion}
      initial={"offScreen"}
      whileInView={"onScreen"}
    >
      <div className={colorMap[props.color]}>
        <div className={styles.text}>
          <div className={styles.heading}>
            <h2>{props.heading}</h2>
            {props.icon ? (
              <img alt="icon" src={props.icon} className={styles.icon} />
            ) : null}
          </div>
          <p>{props.text}</p>
        </div>
        {props.showPopUp ? (
          <div onClick={props.showPopUp}>
            <BasicButton color={props.buttonColor} text={props.buttonText} />
          </div>
        ) : (
          <BasicButton color={props.buttonColor} text={props.buttonText} />
        )}
      </div>
    </motion.div>
  );
};

export default SuggestionCard;
