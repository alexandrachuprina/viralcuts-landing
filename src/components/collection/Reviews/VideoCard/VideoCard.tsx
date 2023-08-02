import React from "react";
import styles from "./VideoCard.module.scss";
import { motion } from "framer-motion";
import { smallCardMotion } from "../../../../util/animations/smallCardMotion";

interface Props {
  video: string;
  placeholder: string;
}

const VideoCard = (props: Props) => {
  return (
    <motion.div
      className={styles.card}
      variants={smallCardMotion}
      initial={"offScreen"}
      whileInView={"onScreen"}
    >
      <video
        controls
        className={styles.video}
        poster={props.placeholder}
        role="region"
        preload="auto"
        aria-label="Video Player"
      >
        <source src={props.video} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default VideoCard;
