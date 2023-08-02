import React, { ReactNode } from "react";
import styles from "./Suggestions.module.scss";
import { Row, Col } from "antd";
import SuggestionCard from "./SuggestionCard/SuggestionCard";

type card = {
  id: number;
  color: "none" | "gray" | "black" | "bright green";
  heading: string;
  icon?: string;
  text: string;
  buttonColor: "dark" | "light" | "green" | "none" | "drawer";
  buttonText: string;
  showPopUp?: () => void;
};
interface Props {
  cards: card[];
  showPopUp: () => void;
}

const Suggestions = (props: Props) => {
  const { showPopUp } = props;
  return (
    <div className={styles.wrapper}>
      <Row justify={"center"}>
        <Col span={23} flex={"1600px"}>
          <div className={styles.component}>
            {props.cards.map((elem) => (
              <SuggestionCard
                key={elem.id}
                color={elem.color}
                heading={elem.heading}
                icon={elem.icon}
                text={elem.text}
                buttonColor={elem.buttonColor}
                buttonText={elem.buttonText}
                showPopUp={showPopUp}
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Suggestions;
