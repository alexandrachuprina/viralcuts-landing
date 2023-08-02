import React, { useState, useEffect, RefObject } from "react";
import styles from "./Header.module.scss";
import { Row, Col, Drawer } from "antd";
import BasicButton from "../../UI-kit/Basic Button/BasicButton";
import logo from "../../../assets/icons/logo.png";
import close from "../../../assets/icons/close.png";
import open from "../../../assets/icons/open.png";

interface Props {
  showPopUp: () => void;
  refExamples: RefObject<HTMLDivElement>;
  refHowItWorks: RefObject<HTMLDivElement>;
  refPricing: RefObject<HTMLDivElement>;
  refFAQ: RefObject<HTMLDivElement>;
}

const Header = (props: Props) => {
  const [winWidth, setWinWidth] = useState<number>(320);
  const [drawer, setDrawer] = useState<boolean>(false);
  const { showPopUp, refExamples, refHowItWorks, refPricing, refFAQ } = props;

  useEffect(() => {
    const winWidth = window.document.documentElement.clientWidth;
    setWinWidth(winWidth);
  }, []);

  const clickDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Row justify={"center"}>
          <Col span={23} flex={"1600px"}>
            <div className={styles.navigation_mobile}>
              <img alt="logo" src={logo} className={styles.logo_mobile} />
              <button onClick={clickDrawer} className={styles.btn_open}>
                <img src={open} alt="icon" className={styles.icon_open} />
              </button>
            </div>
            <Drawer
              placement="right"
              onClose={clickDrawer}
              open={drawer}
              width={winWidth}
              closable={false}
              bodyStyle={{ padding: "0" }}
            >
              <div className={styles.drawer}>
                <div className={styles.content}>
                  <img alt="logo" src={logo} className={styles.logo_mobile} />
                  <div className={styles.links}>
                    <div
                      onClick={() => {
                        clickDrawer();
                        if (refExamples.current) {
                          refExamples.current.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <BasicButton text="Creators" color="drawer" />
                    </div>
                    <div
                      onClick={() => {
                        clickDrawer();
                        if (refHowItWorks.current) {
                          refHowItWorks.current.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <BasicButton text="How it works" color="drawer" />
                    </div>
                    <div
                      onClick={() => {
                        clickDrawer();
                        if (refPricing.current) {
                          refPricing.current.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <BasicButton text="Pricing" color="drawer" />
                    </div>
                    <div
                      onClick={() => {
                        clickDrawer();
                        if (refFAQ.current) {
                          refFAQ.current.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <BasicButton text="FAQs" color="drawer" />
                    </div>
                  </div>
                  <button className={styles.btn_close} onClick={clickDrawer}>
                    <img src={close} alt="icon" className={styles.icon_close} />
                  </button>
                </div>
              </div>
            </Drawer>

            <div className={styles.component}>
              <div className={styles.navigation}>
                <div className={styles.navigate}>
                  <p
                    onClick={() => {
                      if (refExamples.current) {
                        refExamples.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    Examples
                  </p>
                  <p
                    onClick={() => {
                      if (refHowItWorks.current) {
                        refHowItWorks.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    How it works
                  </p>
                  <p
                    onClick={() => {
                      if (refPricing.current) {
                        refPricing.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    Pricing
                  </p>
                  <p
                    onClick={() => {
                      if (refFAQ.current) {
                        refFAQ.current.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    FAQ
                  </p>
                </div>

                <img alt="logo" src={logo} className={styles.logo} />

                <div onClick={showPopUp}>
                  <BasicButton text="Book a free strategy call" color="dark" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
