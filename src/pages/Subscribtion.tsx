import React, { useState } from "react";
import styles from "./Subscribtion.module.scss";
import SubscribeHeader from "../components/single/SubscribeHeader/SubscribeHeader";
import SubscribeContent from "../components/collection/SubscribeContent/SubscribeContent";
import Question from "../components/single/Question/Question";
import PopUp from "../components/UI-kit/PopUp/PopUp";

interface Props {
  showPopUp: () => void;
}

const Subscribtion = (props: Props) => {
  const { showPopUp } = props;
  
  return (
    <div className={styles.page}>
      <SubscribeHeader />
      <SubscribeContent/>
      <Question
        text="Learn about how we can help you grow your audience"
        question="Need help? Book a free strategy call."
        showPopUp={showPopUp}
      />
      <div />
      <div />
    </div>
  );
};

export default Subscribtion;
