import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

import styles from "./Registration.module.scss";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

type status =
  | "no account"
  | "registred"
  | "has account"
  | "logged in"
  | "login error"
  | "loading";

interface Props {
  setAccount: React.Dispatch<SetStateAction<status>>;
}
const Registration = (props: Props) => {
  const { setAccount } = props;

  const [name, setName] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(true);
  const [nameFocus, setNameFocus] = useState<boolean>(false);
  const [nameFocused, setNameFocused] = useState<boolean>(false);

  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState<boolean>(true);
  const [passFocus, setPassFocus] = useState<boolean>(false);
  const [passFocused, setPassFocused] = useState<boolean>(false);
  const [passShown, setPassShown] = useState<boolean>(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState<boolean>(true);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);
  const [matchFocused, setMatchFocused] = useState<boolean>(false);
  const [matchShown, setMatchShown] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidPass(PASS_REGEX.test(pass));
    setValidMatch(pass === matchPass);
  }, [pass, matchPass]);

  useEffect(() => {
    setErrMsg("");
  }, [name, pass, matchPass]);

  const toggleNameFocused = () => {
    setNameFocused(true);
  };
  const togglePassFocused = () => {
    setPassFocused(true);
  };
  const toggleMatchFocused = () => {
    setMatchFocused(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem("viralcuts-name", JSON.stringify(name));
    localStorage.setItem("viralcuts-password", JSON.stringify(pass));
    setAccount("loading");
    setTimeout(() => {
      setAccount("registred");
    }, 5000);
  };

  return (
    <div className={styles.registration}>
      <p className={errMsg ? styles.error : styles.offscreen}>{errMsg}</p>
      <form className={styles.form}>
        <input
          className={styles.input}
          placeholder="Full name"
          type="text"
          id="name"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          value={name}
          aria-invalid={validName != nameFocused}
          aria-describedby="uidnote"
          onFocus={() => {
            setNameFocus(true);
            toggleNameFocused();
          }}
          onBlur={() => setNameFocus(false)}
        />
        <p
          id="uidnote"
          className={
            nameFocus || (!validName && nameFocused)
              ? styles.rules
              : styles.offscreen
          }
        >
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
        <div className={styles.password}>
          <input
            className={styles.input}
            placeholder="Password"
            type={passShown ? "text" : "password"}
            id="password"
            autoComplete="off"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            aria-invalid={validPass != passFocused}
            aria-describedby="uidnote"
            onFocus={() => {
              setPassFocus(true);
              togglePassFocused();
            }}
            onBlur={() => setPassFocus(false)}
          />
          {passShown ? (
            <EyeInvisibleOutlined
              className={styles.eye}
              style={{ fontSize: "20px", color: "#cec8bb" }}
              onClick={(e) => {
                e.preventDefault();
                setPassShown((prevState) => !prevState);
              }}
            />
          ) : (
            <EyeOutlined
              className={styles.eye}
              style={{ fontSize: "20px", color: "#cec8bb" }}
              onClick={(e) => {
                e.preventDefault();
                setPassShown((prevState) => !prevState);
              }}
            />
          )}
        </div>
        <p
          id="uidnote"
          className={
            passFocus || (!validPass && passFocused)
              ? styles.rules
              : styles.offscreen
          }
        >
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters: !, @, #, $, %
        </p>
        <div className={styles.password}>
          <input
            className={styles.input}
            placeholder="Confirm password"
            type={matchShown ? "text" : "password"}
            id="matchPass"
            autoComplete="off"
            onChange={(e) => setMatchPass(e.target.value)}
            value={matchPass}
            aria-invalid={!validMatch}
            aria-describedby="uidnote"
            onFocus={() => {
              setMatchFocus(true);
              toggleMatchFocused();
            }}
            onBlur={() => setMatchFocus(false)}
          />
          {matchShown ? (
            <EyeInvisibleOutlined
              className={styles.eye}
              style={{ fontSize: "20px", color: "#cec8bb" }}
              onClick={(e) => {
                e.preventDefault();
                setMatchShown((prevState) => !prevState);
              }}
            />
          ) : (
            <EyeOutlined
              className={styles.eye}
              style={{ fontSize: "20px", color: "#cec8bb" }}
              onClick={(e) => {
                e.preventDefault();
                setMatchShown((prevState) => !prevState);
              }}
            />
          )}
        </div>
        <p
          id="uidnote"
          className={
            matchFocus ||
            (!validMatch && matchFocused) ||
            (!validPass && passFocused)
              ? styles.rules
              : styles.offscreen
          }
        >
          Must match the first password input field.
        </p>
        <button
          onClick={(e) => handleSubmit(e)}
          className={styles.button}
          disabled={!validName || !validPass || !validMatch ? true : false}
        >
          <p>Sign Up</p>
        </button>
      </form>
    </div>
  );
};

export default Registration;
