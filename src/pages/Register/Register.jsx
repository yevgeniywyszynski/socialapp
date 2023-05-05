import React from "react";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.registerContainer}>
        <div className={styles.leftSide}>
          <p className={styles.registerText}>Register</p>
          <form>
            <input
              className={styles.registerInput}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.registerInput}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.registerInput}
              type="password"
              placeholder="Password"
            />
            <input
              className={styles.registerInput}
              type="text"
              placeholder="Name"
            />
            <button className={styles.registerBtn}>Register</button>
          </form>
        </div>
        <div className={styles.rightSide}>
          <h1 className={styles.registerTitle}>Anytime Anywhere, MeetApp!</h1>
          <p className={styles.registerSubtitle}>
            MeetApp! community - the best free online social therapy app.
            Discuss your emotional, social, and mental health problems with a
            people how has the same problem, from the comfort of your home.
          </p>
          <span className={styles.registerAccount}>Don't have an account?</span>
          <Link to="/login">
            <button className={styles.registerRegisterBtn}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
