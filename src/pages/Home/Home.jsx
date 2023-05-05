import React from "react";
import styles from "./Home.module.scss";
import MemberStories from "../../components/MemberStories/MemberStories";
import MemberPosts from "../../components/MemberPosts/MemberPosts";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <MemberStories />
      <MemberPosts />
    </div>
  );
}
