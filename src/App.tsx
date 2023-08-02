import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import Subscribtion from "./pages/Subscribtion";
import Terms from "./pages/Terms";
import { AnimatePresence } from "framer-motion";
import Layout from "./pages/Layout";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<boolean>(false);
  const location = useLocation();
  const { pathname } = useLocation();

  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setIsLoading(false);
    }, 5000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const showPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 1500);
  };

  return (
    <>
      {!isLoading && (
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Layout popUp={popUp} />}>
              <Route index element={<Home showPopUp={showPopUp} />} />
              <Route path="terms" element={<Terms />} />
              <Route
                path="plans"
                element={<Subscribtion showPopUp={showPopUp} />}
              />
            </Route>
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
