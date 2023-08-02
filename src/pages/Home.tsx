import React, { useRef } from "react";
import Header from "../components/single/Header/Header";
import styles from "./Home.module.scss";
import Hero from "../components/single/Hero/Hero";
import Heading from "../components/UI-kit/Heading/Heading";
import Reviews from "../components/collection/Reviews/Reviews";
import TextInCard from "../components/collection/TextInCard/TextInCard";
import {
  textCard,
  textCardReversed,
} from "../components/collection/TextInCard/Data";
import VideoTypes from "../components/collection/VideoTypes/VideoTypes";
import { videoTypes } from "../components/collection/VideoTypes/Data";
import SubheadingLeft from "../components/UI-kit/SubheadingLeft/SubheadingLeft";
import SubscriptionPlans from "../components/collection/SubscriptionPlans/SubscriptionPlans";
import { planCards } from "../components/collection/SubscriptionPlans/Data";
import { suggestionCards } from "../components/collection/Suggestions/Data";
import Suggestions from "../components/collection/Suggestions/Suggestions";
import Advantages from "../components/collection/Advantages/Advantages";
import { advantages } from "../components/collection/Advantages/data";
import FAQs from "../components/collection/FAQs/FAQs";
import Footer from "../components/single/Footer/Footer";
import Subscribers from "../components/single/Subscribers/Subscribers";

interface Props {
  showPopUp: () => void;
}
const Home = (props: Props) => {
  const { showPopUp } = props;

  const refExamples = useRef<HTMLDivElement>(null);
  const refHowItWorks = useRef<HTMLDivElement>(null);
  const refPricing = useRef<HTMLDivElement>(null);
  const refFAQ = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.page}>
      <div>
        <Header
          refExamples={refExamples}
          refHowItWorks={refHowItWorks}
          refPricing={refPricing}
          refFAQ={refFAQ}
          showPopUp={showPopUp}
        />
        <Hero refPricing={refPricing} showPopUp={showPopUp} />
      </div>
      <Heading text="Loved by top creators" />
      <Reviews ref={refExamples} />
      <TextInCard
        heading="Our videos help your content go viral."
        color="light pink"
        cards={textCard}
      />
      <Subscribers />
      <TextInCard
        heading="Work with our world-class video team right now."
        color="bright green"
        cards={textCardReversed}
        ref={refHowItWorks}
      />
      <div>
        <SubheadingLeft
          heading="We do it all"
          text="Need something else?"
          button={true}
          showPopUp={showPopUp}
        />
        <VideoTypes cards={videoTypes} />
      </div>
      <div>
        <SubheadingLeft
          heading="Level up your video game today"
          ref={refPricing}
          showPopUp={showPopUp}
        />
        <SubscriptionPlans cards={planCards} />
        <Suggestions cards={suggestionCards} showPopUp={showPopUp} />
      </div>
      <Advantages cards={advantages} />
      <div>
        <FAQs ref={refFAQ} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
