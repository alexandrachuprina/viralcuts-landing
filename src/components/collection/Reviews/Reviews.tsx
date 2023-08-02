import React, { useRef, forwardRef } from "react";
import styles from "./Reviews.module.scss";
import { Row, Col } from "antd";

import QuoteCard from "./QuoteCard/QuoteCard";
import dankoe from "../../../assets/images/avatars/dankoe.jpeg";
import samparr from "../../../assets/images/avatars/samparr.jpeg";
import codiesanchez from "../../../assets/images/avatars/codiesanchez.jpeg";
import sashilbloom from "../../../assets/images/avatars/sahilbloom.jpeg";
import brianmazza from "../../../assets/images/avatars/bmazza.png";

import wayYouDoIt from "../../../assets/placeholders/way-you-do.jpg";
import codieSanchez from "../../../assets/placeholders/codie-sanchez.jpeg";
import onRelationships from "../../../assets/placeholders/on-relationships.jpg";
import timeAndChoice from "../../../assets/placeholders/time-and-choice.jpg";
import VideoCard from "./VideoCard/VideoCard";

// grid components!

const Reviews = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      <Row justify={"center"}>
        <Col span={23} flex={"1600px"}>
          <Row>
            <Col lg={10}>
              <Row justify={"start"} wrap={false}>
                <QuoteCard
                  color="dark green"
                  quote="“Their quality is top-notch and somehow they can deliver videos in 2 days. Wild.”"
                  author="Dan Koe"
                  image={dankoe}
                  followers="2M+"
                  width="m"
                />
                <div className={styles.margin_right} />
                <VideoCard
                  video={"https://viralcuts.vercel.app/vids/way-you-do.mp4"}
                  placeholder={wayYouDoIt}
                />
              </Row>
              <div className={styles.margin_bottom} />
              <QuoteCard
                color="light green"
                quote="“They take footage straight from our Youtube and turn it into the perfect edit. I don't have to do anything. It's awesome.”"
                author="Sam Parr"
                image={samparr}
                followers="2.5M+"
                width="l"
              />
              <div className={styles.margin_bottom} />
              <Row justify={"end"}>
                <VideoCard
                  video={
                    "https://viralcuts.vercel.app/vids//time-and-choice.mp4"
                  }
                  placeholder={timeAndChoice}
                />
              </Row>
              <div className={styles.margin_between_columns} />
            </Col>
            <Col lg={14}>
              <Row justify={"end"} wrap={false}>
                <div className={styles.margin_left} />
                <QuoteCard
                  color="light pink"
                  quote="“I get asked 100 times a week who we use for video, I'm finally sharing the answer: ViralCuts”"
                  author="Codie Sanchez"
                  image={codiesanchez}
                  followers="3M+"
                  width="m"
                />
                <div className={styles.margin_left} />
                <VideoCard
                  placeholder={codieSanchez}
                  video={
                    "https://viralcuts.vercel.app/vids/codie-sanchez-liveoak.mp4"
                  }
                />
              </Row>
              <div className={styles.margin_bottom} />

              <Row justify={"end"} wrap={false}>
                <div className={styles.margin_left} />
                <VideoCard
                  placeholder={onRelationships}
                  video={
                    "https://viralcuts.vercel.app/vids/on-relationships.mp4"
                  }
                />
                <div className={styles.margin_left} />
                <QuoteCard
                  color="dark green"
                  quote="“ViralCuts bring a quality to my shorts that I haven't been able to get anywhere else. They're a huge part of my video strategy.”"
                  author="Sahil Bloom"
                  image={sashilbloom}
                  followers="2M+"
                  width="m"
                />
              </Row>
              <div className={styles.margin_bottom} />
              <Row justify={"start"} wrap={false}>
                <div className={styles.margin_left} />
                <QuoteCard
                  color="dark green"
                  quote="“This is how I'm going to get my next 1m followers.”"
                  author="Brian Mazza"
                  image={brianmazza}
                  followers="500K+"
                  width="sm"
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
});

export default Reviews;
