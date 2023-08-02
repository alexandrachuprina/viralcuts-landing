import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import styles from "./SubscribeContent.module.scss";
import Registration from "../../single/Registration/Registration";
import LogIn from "../../single/LogIn/LogIn";
import { defaultPlans } from "./SubscribePlanCard/Data";
import SubscribePlanCard from "./SubscribePlanCard/SubscribePlanCard";
import PlanPopUp from "../../single/PlanPopUp/PlanPopUp";

type status =
  | "no account"
  | "registred"
  | "has account"
  | "logged in"
  | "login error"
  | "loading";

type plan = {
  id: number;
  size: "small" | "large";
  title: string;
  price: string;
  choosen: boolean;
  disabled: boolean;
};

const SubscribeContent = () => {
  const [account, setAccount] = useState<status>("no account");
  const [userName, setUserName] = useState<string>("");
  const [plans, setPlans] = useState<plan[]>(defaultPlans);
  const [planCard, setPlanCard] = useState<boolean>(false);

  const [choosenPlan, setChoosenPlan] = useState<plan | string>("");

  useEffect(() => {
    if (localStorage.getItem("logged in") === "true") {
      setAccount("logged in");

      const newPlans = [...plans];
      for (let i = 0; i < newPlans.length; i++) {
        newPlans[i].disabled = false;
      }
      setPlans(newPlans);
    }
  }, []);

  useEffect(() => {
    const name = localStorage.getItem("viralcuts-name");
    if (name) {
      setUserName(JSON.parse(name));
    }
  }, [account]);

  useEffect(() => {
    if (account === "logged in") {
      const newPlans = [...plans];
      for (let i = 0; i < newPlans.length; i++) {
        newPlans[i].disabled = false;
      }
      setPlans(newPlans);
    } else if (account === "no account") {
      const newPlans = [...plans];
      for (let i = 0; i < newPlans.length; i++) {
        newPlans[i].disabled = true;
      }
      setPlans(newPlans);
    }
  }, [account]);

  const choosePlan = (title: string) => {
    const newPlans = [...plans];
    const plan = newPlans.find((elem: any) => elem.title === title);
    if (plan) {
      plan.choosen = true;
      const notChoosen = newPlans.filter((elem: any) => elem.title != title);
      for (let i = 0; i < notChoosen.length; i++) {
        notChoosen[i].choosen = false;
      }
      setPlans(newPlans);
      setChoosenPlan(plan);
    }
  };

  const showPlan = () => {
    setPlanCard(true);
    setTimeout(() => {
      setPlanCard(false);
    }, 2000);
  };

  const logIn = () => {
    setAccount("has account");
  };
  const backToReg = () => {
    setAccount("no account");
  };
  const logOut = () => {
    setAccount("no account");
    localStorage.setItem("logged in", "false");
    setChoosenPlan(defaultPlans[0]);
    const newPlans = [...plans];
    for (let i = 0; i < newPlans.length; i++) {
      newPlans[i].choosen = false;
    }
    setPlans(newPlans);
  };

  return (
    <Row justify={"center"}>
      <Col span={23} flex={"1600px"}>
        {planCard && (
          <PlanPopUp
            title={typeof choosenPlan === "string" ? "" : choosenPlan.title}
            price={typeof choosenPlan === "string" ? "" : choosenPlan.price}
          />
        )}
        <div className={styles.content}>
          <div>
            <div className={styles.heading}>
              <h2>Select your plan</h2>
            </div>
            <div className={styles.plans}>
              {plans.map((elem: any) => (
                <SubscribePlanCard
                  key={elem.id}
                  disabled={elem.disabled}
                  title={elem.title}
                  size={elem.size}
                  price={elem.price}
                  choosen={elem.choosen}
                  choosePlan={choosePlan}
                />
              ))}
            </div>
          </div>
          <div>
            <div className={styles.heading}>
              {account === "has account" && <h2>Log in</h2>}
              {account === "registred" && <h2>Log in</h2>}
              {account === "logged in" && (
                <>
                  <h2>Welcome, {userName}!</h2>
                  <div className={styles.subheading_payment}>
                    <button className={styles.button} onClick={logOut}>
                      <p>Log out</p>
                    </button>

                    {typeof choosenPlan === "string" ? (
                      <p>Choose your plan.</p>
                    ) : (
                      <p>Your plan is {choosenPlan.title}.</p>
                    )}

                    <button
                      className={styles.button_continue}
                      disabled={choosenPlan === "" ? true : false}
                      onClick={showPlan}
                    >
                      <p>Subscribe</p>
                    </button>
                  </div>
                </>
              )}
              {account === "login error" && <h2>Wrong name or password</h2>}
              {account === "loading" && <h2>Checking your account...</h2>}
              {account === "no account" && (
                <>
                  <h2>Sign Up</h2>
                  <div className={styles.subheading}>
                    <p>Already have an account?</p>
                    <button className={styles.button} onClick={logIn}>
                      <p>Log In</p>
                    </button>
                  </div>
                </>
              )}
            </div>
            {account === "has account" && (
              <div className={styles.user}>
                <button className={styles.button} onClick={backToReg}>
                  <p>back to Sign Up</p>
                </button>
                <LogIn setAccount={setAccount} />
              </div>
            )}
            {account === "registred" && (
              <div className={styles.user}>
                <p className={styles.rules}>
                  You have successfully registered!
                </p>
                <LogIn setAccount={setAccount} />
              </div>
            )}
            {account === "no account" ? (
              <div className={styles.user}>
                <Registration setAccount={setAccount} />
              </div>
            ) : null}
            {account === "login error" && (
              <div className={styles.user}>
                <button className={styles.button} onClick={backToReg}>
                  <p>back to Sign Up</p>
                </button>
                <LogIn setAccount={setAccount} />
              </div>
            )}
            {account === "loading" && (
              <div className={styles.user}>
                <div className={styles.loader}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SubscribeContent;
