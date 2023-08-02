import React from "react";
import styles from "./Advatages.module.scss";
import { Row, Col } from "antd";
import AdvantageCard from "./AdvantageCard/AdvantageCard";

interface Props {
  cards: { id: number; heading: string; text: string; icon?: string }[];
}

const Advantages = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Row justify={"center"}>
        <Col xs={20} sm={23} flex={"1600px"}>
          <div className={styles.card}>
            {props.cards.map((elem) => (
              <AdvantageCard
                key={elem.id}
                heading={elem.heading}
                text={elem.text}
                icon={elem.icon}
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Advantages;
