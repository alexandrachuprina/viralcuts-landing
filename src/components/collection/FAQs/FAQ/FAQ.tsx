import React from "react";
import styles from "./FAQ.module.scss";

type toggleFunction = (id: number) => void;

interface Props {
  id: number;
  question: string;
  answer: string;
  toggle: boolean;
  function: toggleFunction;
}

const FAQ = (props: Props) => {
  return (
    <div className={styles.question}>
      <div className={styles.heading}>
        <h2>{props.question}</h2>
        <button
          className={styles.button}
          onClick={() => props.function(props.id)}
        >
          <p>+</p>
        </button>
      </div>
      {props.toggle ? (
        <>
          <p>{props.answer}</p>
        </>
      ) : null}
    </div>
  );
};

export default FAQ;
