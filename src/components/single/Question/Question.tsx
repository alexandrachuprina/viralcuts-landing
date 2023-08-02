import React from "react";
import { Row, Col } from "antd";
import styles from "./Question.module.scss";
import BasicButton from "../../UI-kit/Basic Button/BasicButton";

interface Props {
  question: string;
  text: string;
  showPopUp: () => void;
}
const Question = (props: Props) => {
  const { showPopUp } = props;
  return (
    <Row justify={'center'}>
      <Col span={23} flex={'1600px'}>
        <div className={styles.question}>
          <div className={styles.text}>
            <h2>{props.question}</h2>
            <p>{props.text}</p>
          </div>
          <div onClick={() => showPopUp()}>
            <BasicButton text="Book a call" color="none"/>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Question;
