import React, { useState, useEffect, forwardRef } from "react";
import styles from "./TextInCard.module.scss";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { cardMotion } from "../../../util/animations/CardMotion";
import TextCard from "./TextCard/TextCard";

type card = {
  id: number;
  heading: string;
  text: string;
  reverse: boolean;
  icon?: string;
};

enum Color {
  dark_green = "dark green",
  light_green = "light green",
  bright_green = "bright green",
  light_pink = "light pink",
  light_apricot = "light apricot",
}

const colorMap = {
  [Color.dark_green]: styles.dark_green,
  [Color.light_green]: styles.light_green,
  [Color.bright_green]: styles.bright_green,
  [Color.light_pink]: styles.light_pink,
  [Color.light_apricot]: styles.light_apricot,
};

interface Props {
  color:
    | "dark green"
    | "light green"
    | "bright green"
    | "light pink"
    | "light apricot";
  heading: string;
  cards: card[];
}

const TextInCard = forwardRef<HTMLDivElement, Props>((props, ref) => {

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={cardMotion}
      >
        <Row justify={"center"}>
          <Col xs={23} flex={"1600px"}>
            <div className={colorMap[props.color]}>
              <div className={styles.heading}>
                <h1>{props.heading}</h1>
              </div>
              <div className={styles.cards}>
                {props.cards.map((elem) => (
                  <TextCard
                    key={elem.id}
                    heading={elem.heading}
                    text={elem.text}
                    reverse={elem.reverse}
                    icon={elem.icon}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
});

export default TextInCard;
