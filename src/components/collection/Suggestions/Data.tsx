import money from "../../../assets/icons/illustrations/money.png";
import phone from "../../../assets/icons/illustrations/phone.png";

export const suggestionCards: {
  id: number;
  color: "none" | "gray" | "black" | "bright green";
  heading: string;
  icon?: string;
  text: string;
  buttonColor: "dark" | "light" | "green" | "none" | "drawer";
  buttonText: string;
}[] = [
  {
    id: 0,
    color: "bright green",
    heading: "Book a free strategy cal",
    icon: `${phone}`,
    text: "Learn about how we can help you grow your audience",
    buttonColor: "dark",
    buttonText: "Book a Call",
  },
  {
    id: 1,
    color: "none",
    heading: "Refer a friend and get paid",
    icon: `${money}`,
    text: "Earn 5% recurring commissions for each referral",
    buttonColor: "none",
    buttonText: "Join now",
  },
];
