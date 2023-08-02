import React, { forwardRef, useState } from "react";
import styles from "./FAQs.module.scss";
import { Row, Col } from "antd";
import { data } from "./Data";
import FAQ from "./FAQ/FAQ";
import { motion } from "framer-motion";
import { cardMotion } from "../../../util/animations/CardMotion";

type question = {
  id: number;
  question: string;
  answer: string;
  toggle: boolean;
};

const FAQs = forwardRef<HTMLDivElement>((props, ref) => {
  const [questions, setQuestions] = useState<question[]>(data);

  const toggleQuestion = (id: number) => {
    const question = questions.find((elem: any) => elem.id === id);
    if (question) {
      question.toggle = !question.toggle;
    }
    setQuestions([...questions]);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={cardMotion}
      >
        <Row justify={"center"}>
          <Col span={23} flex={"1600px"}>
            <div className={styles.card}>
              <div className={styles.heading}>
                <h2>Have questions?</h2>
              </div>
              <div className={styles.questions}>
                {questions.map((elem: any) => (
                  <FAQ
                    id={elem.id}
                    question={elem.question}
                    answer={elem.answer}
                    toggle={elem.toggle}
                    function={toggleQuestion}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
});

export default FAQs;
