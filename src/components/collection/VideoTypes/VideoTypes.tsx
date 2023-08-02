import React, { ReactNode } from "react";
import styles from "./VideoTypes.module.scss";
import { Row, Col } from "antd";
import TypeCard from "./TypeCard/TypeCard";

type card = {
  id: number;
  heading: string;
  text: string;
};

interface Props {
  cards: card[];
}

const VideoTypes = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Row justify={"center"}>
        <Col xs={23} sm={23} flex={"1600px"}>
          <div className={styles.grid}>
            <div className={styles.component}>
              {props.cards.map((elem) => (
                <TypeCard
                  key={elem.id}
                  heading={elem.heading}
                  text={elem.text}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VideoTypes;
