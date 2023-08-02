import React from "react";
import styles from "./Footer.module.scss";
import { Row, Col } from "antd";
import logo from "../../../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Row justify={"center"}>
      <Col span={23} flex={"1600px"}>
        <div className={styles.footer}>
          <img alt="logo" src={logo} className={styles.logo} />
          <div className={styles.credits}>
            <p>
              Site design by{" "}
              <a target={"_blank"} href="https://offmenu.design/">
                OFF MENU
              </a>
            </p>
          </div>
          <div className={styles.options}>
            <Link to="terms">
              <p>Terms of Service</p>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
