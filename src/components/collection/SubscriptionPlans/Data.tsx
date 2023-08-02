import icon07 from "../../../assets/icons/07.png";
import icon08 from "../../../assets/icons/08.png";
import icon09 from "../../../assets/icons/09.png";

type card = {
  id: number,
  color: "none" | "gray" | "black";
  heading: string;
  price: string;
  description: string;
  special?: string;
  icon?: string;
  text: string[];
  buttonText: string;
  buttonColor: "dark" | "light" | "green" | "none" | "drawer";
};

export const planCards: card[] = [
  {
    id: 0,
    color: "none",
    heading: "Part-timer",
    price: "$1,499/mo",
    description: "6 videos per month",
    special: "0 Spots Currently Available",
    icon: `${icon07}`,
    text: [
      "World-class animator",
      "Chat directly in Slack",
      "One request at a time",
      "Expert account manager",
      "Pause or cancel anytime",
      "Easy credit-card payments",
    ],
    buttonColor: "dark",
    buttonText: "Join Wishlist",
  },
  {
    id: 1,
    color: "gray",
    heading: "Creator",
    price: "$3,999/mo",
    description: "Get a full-time animator",
    special: "Currently 1 Week Lead Time",
    icon: `${icon08}`,
    text: [
      "Dedicated, full-time animator",
      "Expert Project Manager",
      "Chat directly in Slack",
      "24/7 customer service",
      "Pause or cancel anytime",
      "Easy credit-card payments",
    ],
    buttonColor: "dark",
    buttonText: "Get started",
  },
  {
    id: 2,
    color: "black",
    heading: "The studio",
    price: "$5,999/mo",
    description: "Get an entire video team",
    special: "Quarterly commitment required",
    icon: `${icon09}`,
    text: [
      "2x Dedicated, full-time animators",
      "Expert Project Manager",
      "Chat directly in Slack",
      "24/7 customer service",
      "Easy credit-card payments",
    ],
    buttonColor: "light",
    buttonText: "Get started",
  },
];