import React from "react";
import styles from "../Navbar/Navbar.module.scss";
import {
  DarkMode,
  LightMode,
  GridView,
  HomeOutlined,
  SearchOutlined,
  PersonOutlineOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navBarLeft}>
        <Link to="/" className={styles.logo}>
          <span>MeetApp!</span>
        </Link>
        <HomeOutlined />
        <DarkMode />
        {/* <LightMode /> */}
        <GridView />
        <div className={styles.navSearchInputContainer}>
          <SearchOutlined />
          <input
            type="text"
            placeholder="Search..."
            className={styles.navbarSearchInput}
          ></input>
        </div>
      </div>
      <div className={styles.navBarRight}>
        <PersonOutlineOutlined />
        <EmailOutlined />
        <NotificationsNoneOutlined />
        <Link to={`/member/10`} className={styles.navLinkMyProfile}>
          <div className={styles.navUserContainer}>
            <div className={styles.navUserAvatarWrapper}>
              <img
                className={styles.userImg}
                src="https://m.media-amazon.com/images/I/51fksPdErOL._AC_UF894,1000_QL80_.jpg"
                alt="userAvatar"
              />
            </div>
            <span className={styles.navUserName}>Tony Soprano</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
