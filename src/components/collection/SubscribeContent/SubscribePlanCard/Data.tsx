type size = "small" | "large";

export const defaultPlans: {
  id: number;
  size: "small" | "large";
  title: string;
  price: string;
  choosen: boolean;
  disabled: boolean;
}[] = [
  {
    id: 0,
    size: "large",
    title: "Part-timer",
    price: "$1,499/mo",
    choosen: false,
    disabled: true,
  },
  {
    id: 1,
    size: "small",
    title: "Creator",
    price: "$1,499/mo",
    choosen: false,
    disabled: true,
  },
  {
    id: 2,
    size: "small",
    title: "Creator + Scriptwriting",
    price: "$1,499/mo",
    choosen: false,
    disabled: true,
  },
  {
    id: 3,
    size: "large",
    title: "The Studio",
    price: "$1,499/mo",
    choosen: false,
    disabled: true,
  },
];
