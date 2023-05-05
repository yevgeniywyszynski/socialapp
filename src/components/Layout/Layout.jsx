import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar";
import RightSideView from "../RightSideView/RightSideView";
import LeftSideView from "../LeftSideView/LeftSideView";

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Navbar />
      <div className={styles.layout}>
        <LeftSideView />
        <Outlet />
        <RightSideView />
      </div>
    </div>
  );
};

export default Layout;
