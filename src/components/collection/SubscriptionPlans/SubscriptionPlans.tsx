import React, { ReactNode } from "react";
import { Row, Col } from "antd";
import styles from "./SubscriptionPlan.module.scss";
import PlanCard from "./PlanCard/PlanCard";

type card = {
  id: number;
  color: "none" | "gray" | "black";
  heading: string;
  price: string;
  description: string;
  special?: string;
  icon?: string;
  text: string[];
  buttonText: string;
  buttonColor: "dark" | "light" | "green" | "none" | "drawer";
};

interface Props {
  cards: card[];
}

const SubscriptionPlans = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Row justify={"center"}>
        <Col span={23} flex={"1600px"}>
          <div className={styles.component}>
            {props.cards.map((elem) => (
              <PlanCard
                key={elem.id}
                color={elem.color}
                heading={elem.heading}
                price={elem.price}
                description={elem.description}
                special={elem.special}
                icon={elem.icon}
                text={elem.text}
                buttonText={elem.buttonText}
                buttonColor={elem.buttonColor}
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SubscriptionPlans;
