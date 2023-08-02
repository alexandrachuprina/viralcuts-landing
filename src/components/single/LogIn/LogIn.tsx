import React, { useState, useEffect } from "react";
import { SetStateAction } from "react";
import styles from "./LogIn.module.scss";
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

const LogIn = (props: Props) => {
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

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidPass(PASS_REGEX.test(pass));
  }, [pass]);

  const toggleNameFocused = () => {
    setNameFocused(true);
  };
  const togglePassFocused = () => {
    setPassFocused(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const nameInStorage = localStorage.getItem("viralcuts-name");
    const passInStorage = localStorage.getItem("viralcuts-password");

    if (nameInStorage && passInStorage) {
      const nameParsed = JSON.parse(nameInStorage);
      const passParsed = JSON.parse(passInStorage);

      if (nameParsed === name && passParsed === pass) {
        setAccount("loading");
        localStorage.setItem("logged in", "true");
        setTimeout(() => {
          setAccount("logged in");
        }, 5000);
      } else {
        setAccount("loading");
        setTimeout(() => {
          setAccount("login error");
        }, 5000);
      }
    }
  };

  return (
    <div className={styles.login}>
      <form className={styles.form}>
        <input
          className={styles.input}
          placeholder="Full name"
          type="text"
          id="name"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
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
            required
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
        <button
          onClick={(e) => handleSubmit(e)}
          className={styles.button}
          disabled={!validName || !validPass ? true : false}
        >
          <p>Log In</p>
        </button>
      </form>
    </div>
  );
};

export default LogIn;
