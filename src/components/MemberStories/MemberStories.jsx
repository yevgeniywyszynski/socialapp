import React from "react";
import styles from "../MemberStories/MemberStories.module.scss";

export default function MemberStories() {
  const memberStories = [
    {
      id: 1,
      img: "https://kirstenwendlandt.com/wp-content/uploads/2021/01/Most-Instagrammable-Miami-1.jpg",
      name: "Nasti Orni",
    },
    {
      id: 2,
      img: "https://c4.wallpaperflare.com/wallpaper/142/690/375/aircraft-wing-top-view-sky-flight-wallpaper-preview.jpg",
      name: "Alisa Visa",
    },
    {
      id: 3,
      img: "https://ocdn.eu/pulscms-transforms/1/zuik9kuTURBXy8xNmZjYWNmYy1hMzFjLTQ0ZTctYjNlMi03MTdiYWU4NmU0NTQuanBlZ5GTAs0H0M0FNt4AAaEwBQ",
      name: "Adnrzej Duda",
    },
    {
      id: 4,
      img: "https://images.squarespace-cdn.com/content/v1/54c2e580e4b0a736d2ac2221/1529414995713-9F9OAUJ567F8V3OKLWRI/best-instagram-spots-miami-beach?format=500w",
      name: "Julia Roberts",
    },
  ];

  return (
    <div className={styles.memeberStories}>
      <div className={styles.story}>
        <div className={styles.storyImgWrapper}>
          <img
            className={styles.storyImg}
            src="https://m.media-amazon.com/images/I/51fksPdErOL._AC_UF894,1000_QL80_.jpg"
            alt="story"
          />
          <button className={styles.storyAddBtn}>+</button>
        </div>
        <span className={styles.userStoryName}>Tony Soprano</span>
      </div>
      {memberStories.map((story) => (
        <div key={story.id} className={styles.story}>
          <div className={styles.storyImgWrapper}>
            <img className={styles.storyImg} src={story.img} alt="story" />
          </div>
          <span className={styles.userStoryName}>{story.name}</span>
        </div>
      ))}
    </div>
  );
}
