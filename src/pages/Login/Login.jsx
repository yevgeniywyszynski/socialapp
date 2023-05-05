import React from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.leftSide}>
          <h1 className={styles.loginTitle}>Welcome MeetApp!</h1>
          <p className={styles.loginSubtitle}>
            MeetApp! community - the best free online social therapy app.
            Discuss your emotional, social, and mental health problems with a
            people how has the same problem, from the comfort of your home.
          </p>
          <span className={styles.loginAccount}>Don't have an account?</span>
          <Link to="/register">
            <button className={styles.loginRegisterBtn}>Register</button>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.loginText}>Login</p>
          <form>
            <input
              className={styles.loginInput}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.loginInput}
              type="password"
              placeholder="Password"
            />
            <button className={styles.loginBtn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
