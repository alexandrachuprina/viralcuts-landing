import React from "react";
import styles from "./Home.module.scss";
import TextInCard from "../components/collection/TextInCard/TextInCard";
import { textCard } from "../components/collection/TextInCard/Data";
import SubscribeHeader from "../components/single/SubscribeHeader/SubscribeHeader";

const Terms = () => {
  return (
    <div className={styles.page}>
      <SubscribeHeader/>
      <TextInCard
        color="light green"
        heading="Terms of Service"
        cards={textCard}
      />
      <div/>
    </div>
  );
};

export default Terms;
