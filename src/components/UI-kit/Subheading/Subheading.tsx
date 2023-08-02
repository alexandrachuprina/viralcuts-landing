import React from "react";
import styles from "./Subheading.module.scss";
import { Row, Col } from "antd";

interface Props {
  text: string;
}

const Subheading = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Row justify={"center"}>
        <Col span={22} flex={"1600px"}>
          <div className={styles.component}>
            <h1>{props.text}</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Subheading;
