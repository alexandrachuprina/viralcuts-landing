import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styles from "./SubscribeHeader.module.scss";
import logo from "../../../assets/icons/logo.png";
import BasicButton from "../../UI-kit/Basic Button/BasicButton";

const SubscribeHeader = () => {
  return (
    <Row justify={"center"}>
      <Col span={23} flex={"1600px"}>
        <div className={styles.header}>
          <img src={logo} alt="logo" className={styles.logo} />
          <Link to="/">
            <BasicButton text="Go back" color="dark" />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default SubscribeHeader;
