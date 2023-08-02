import React, { useEffect, useState } from "react";
import styles from "./BasicButton.module.scss";

enum Color {
  dark = "dark",
  light = "light",
  green = "green",
  none = "none",
  drawer = "drawer",
}

const colorMap = {
  [Color.dark]: styles.dark,
  [Color.light]: styles.light,
  [Color.none]: styles.none,
  [Color.green]: styles.green,
  [Color.drawer]: styles.drawer,
};

interface Button {
  text: string;
  color: "dark" | "light" | "green" | "none" | "drawer";
  border?: boolean;
}

const BasicButton = (props: Button) => {
  return (
    <>
      <button className={colorMap[props.color]}>
        <p>{props.text}</p>
      </button>
    </>
  );
};

export default BasicButton;
