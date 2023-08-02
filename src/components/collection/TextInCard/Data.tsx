import icon01 from "../../../assets/icons/01.png";
import icon02 from "../../../assets/icons/02.png";
import icon03 from "../../../assets/icons/03.png";
import icon04 from "../../../assets/icons/04.png";
import icon05 from "../../../assets/icons/05.png";
import icon06 from "../../../assets/icons/06.png";

export const textCard: {
  id: number;
  heading: string;
  text: string;
  reverse: boolean;
  icon?: string;
}[] = [
  {
    id: 0,
    reverse: false,
    heading: "Better performing videos.",
    text: "We make videos sticky. Shares, likes, and view times on our videos are 10x the average.",
    icon: `${icon01}`,
  },
  {
    id: 1,
    reverse: false,
    heading: "Produce content faster.",
    text: "We can help you write fresh scripts or repurpose long-form content. Whatever you need, we've got you.",
    icon: `${icon02}`,
  },
  {
    id: 2,
    reverse: false,
    heading: "Save a ton of money.",
    text: "No dealing with expensive freelancers or employees. Save $50k+ a year vs. hiring full-time.",
    icon: `${icon03}`,
  },
];

export const textCardReversed: {
  id: number;
  heading: string;
  text: string;
  reverse: boolean;
  icon?: string;
}[] = [
  {
    id: 0,
    reverse: true,
    heading: "Pick a plan. Subscribe. It’s that easy.",
    text: "Start by subscribing for a month. It’s not a commitment - you can pause or cancel at any time.",
    icon: `${icon04}`,
  },

  {
    id: 1,
    reverse: true,
    heading: "Join Slack and start making video requests.",
    text: "You’ll get a world-class animator assigned to you right away. They’ll help you develop your unique style and create beautiful videos.",
    icon: `${icon05}`,
  },

  {
    id: 2,
    reverse: true,
    heading: "Start posting your videos.",
    text: "Our animators work on one video at a time and usually deliver videos within a few business days.",
    icon: `${icon06}`,
  },
];
