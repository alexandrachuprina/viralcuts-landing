import icon01 from "../../../assets/icons/illustrations/icon01.png";
import icon02 from "../../../assets/icons/illustrations/icon02.png";
import icon03 from "../../../assets/icons/illustrations/icon03.png";
import icon04 from "../../../assets/icons/illustrations/icon04.png";

export const advantages: {
  id: number;
  heading: string;
  text: string;
  icon?: string;
}[] = [
  {
    id: 0,
    heading: "Provide your clips or raw footage",
    text: "Share pre-clipped videos or give us raw footage and we'll turn it into viral clips.",
    icon: `${icon01}`,
  },
  {
    id: 1,
    heading: "We can help out with scripts and hooks",
    text: "Need help with your content to boost engagement? We have expert writers that can help.",
    icon: `${icon02}`,
  },
  {
    id: 2,
    heading: "We manage your requests in Asana",
    text: "Create requests in Slack and we’ll take it from there. Your project lead will manage everything.",
    icon: `${icon03}`,
  },
  {
    id: 3,
    heading: "Chat and give feedback in Slack and Frame.io",
    text: "Our team is your team. Chat with us whenever you need via Slack and give feedback in Frame.io.",
    icon: `${icon04}`,
  },
];
