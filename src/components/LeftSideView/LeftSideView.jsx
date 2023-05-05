import React from "react";
import styles from "./LeftSideView.module.scss";
import Friends from "../../assets/people.png";
import Memories from "../../assets/bookmark.png";
import Events from "../../assets/calendar.png";
import Messages from "../../assets/comments.png";
import Fundraiser from "../../assets/fundraiser.png";
import Gaming from "../../assets/gamepad.png";
import Groups from "../../assets/group.png";
import Courses from "../../assets/online-course.png";
import Gallery from "../../assets/picture.png";
import MarketPlace from "../../assets/store.png";
import Videos from "../../assets/video-chat.png";
import Watch from "../../assets/youtube.png";
import Tutorials from "../../assets/video-tutorial.png";

export default function LeftSideView() {
  return (
    <div className={styles.left}>
      <div className={styles.leftContainer}>
        <div className={styles.menuItem}>
          <div className={styles.userLeft}>
            <div className={styles.userWrapper}>
              <img
                className={styles.userImg}
                src="https://m.media-amazon.com/images/I/51fksPdErOL._AC_UF894,1000_QL80_.jpg"
                alt="userAvatar"
              />
            </div>
            <span className={styles.navUserName}>Tony Soprano</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Friends} alt="icon" />
            <span>Friends</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Groups} alt="icon" />
            <span>Groups</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={MarketPlace} alt="icon" />
            <span>MarketPlace</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Watch} alt="icon" />
            <span>Watch</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Memories} alt="icon" />
            <span>Memories</span>
          </div>
        </div>
        <hr></hr>
        <div className={styles.menuItem}>
          <span className={styles.leftMenuText}>Your shortcuts</span>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Events} alt="icon" />
            <span>Events</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Gaming} alt="icon" />
            <span>Gaming</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Gallery} alt="icon" />
            <span>Gallery</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Videos} alt="icon" />
            <span>Video</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Messages} alt="icon" />
            <span>Messages</span>
          </div>
        </div>
        <hr></hr>
        <div className={styles.menuItem}>
          <span className={styles.leftMenuText}>Others</span>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Fundraiser} alt="icon" />
            <span>Fundacion</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Tutorials} alt="icon" />
            <span>Tutorials</span>
          </div>
          <div className={styles.leftItem}>
            <img className={styles.leftMenuIcon} src={Courses} alt="icon" />
            <span className="">Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}
