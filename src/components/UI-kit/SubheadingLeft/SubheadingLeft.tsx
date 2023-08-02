import React, { ReactNode, forwardRef } from "react";
import styles from "./SubheadingLeft.module.scss";
import { Row, Col } from "antd";
import BasicButton from "../Basic Button/BasicButton";

interface Props {
  showPopUp: () => void;
  heading: string;
  text?: string;
  button?: boolean;
  buttonText?: string;
}

const SubheadingLeft = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { showPopUp } = props;
  return (
    <div className={styles.wrapper} ref={ref}>
      <Row justify={"center"}>
        <Col span={23} flex={"1600px"}>
          <div className={styles.component}>
            <div className={styles.heading}>
              <h1>{props.heading}</h1>
            </div>
            <div className={styles.additional}>
              <h2>{props.text}</h2>
              {props.button ? (
                <div onClick={showPopUp}>
                  <BasicButton text="Book a Call" color="green" />
                </div>
              ) : null}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
});

export default SubheadingLeft;
