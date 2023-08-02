import React, { RefObject } from "react";
import styles from "./Hero.module.scss";
import { Row, Col } from "antd";
import BasicButton from "../../UI-kit/Basic Button/BasicButton";
import { motion } from "framer-motion";
import { cardMotion } from "../../../util/animations/CardMotion";

interface Props {
  showPopUp: () => void;
  refPricing: RefObject<HTMLDivElement>;
}
const Hero = (props: Props) => {
  const { refPricing, showPopUp } = props;
  const scrollTo = () => {
    if (refPricing.current) {
      refPricing.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={cardMotion}
      >
        <Row justify={"center"}>
          <Col xs={23} flex={"1600px"}>
            <div className={styles.svg_right}>
              <svg
                width="535"
                height="535"
                viewBox="0 0 100 535"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M534.938 261.685H273.315C270.104 261.685 267.5 264.288 267.5 267.5C267.5 270.712 270.104 273.315 273.315 273.315H534.938C531.844 418.366 413.293 535 267.5 535C119.764 535 0 415.236 0 267.5C0 119.764 119.764 0 267.5 0C413.293 0 531.844 116.634 534.938 261.685Z"
                  fill="#E4E458"
                ></path>
              </svg>
            </div>
            <div className={styles.svg_left}>
              <svg
                width="617"
                height="535"
                viewBox="310 0 617 535"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M308.5 535L617 0H0L308.5 535Z" fill="#E4E458"></path>
              </svg>
            </div>
            <div className={styles.component}>
              <h1>We make videos that make your brand go big.</h1>
              <div className={styles.text}>
                <p>
                  Our expert editors and animators help you make kick ass
                  short-form videos and grow faster. It's time you stood out in
                  a sea of sameness.
                </p>
              </div>
              <div className={styles.buttons}>
                <div onClick={scrollTo}>
                  <BasicButton text="View pricing" color="dark" />
                </div>
                <div onClick={showPopUp}>
                  <BasicButton text="Book a free strategy call" color="light" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Hero;
