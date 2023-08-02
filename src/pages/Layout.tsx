import React from "react";
import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import PopUp from "../components/UI-kit/PopUp/PopUp";

interface Props {
  popUp: boolean;
}

const Layout = (props: Props) => {
  const { pathname } = useLocation();
  const { popUp } = props;
  
  return (
    <>
      {popUp && <PopUp text="Your call has been booked!" />}
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        style={{ height: "100%" }}
      >
        <Outlet />
      </motion.div>
    </>
  );
};

export default Layout;

const pageVariants = {
  initial: {
    filter: "blur(3px)",
  },
  in: {
    filter: "blur(0)",
  },
  out: {
    filter: "blur(3px)",
  },
};

const pageTransition = {
  ease: "ease-in-out",
  duration: 1.3,
};
