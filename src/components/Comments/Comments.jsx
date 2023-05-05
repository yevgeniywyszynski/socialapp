import React from "react";
import styles from "./Comments.module.scss";
export default function Comments() {
  const comments = [
    {
      id: 1,
      desc: "Interesting",
      name: "Barak Obama",
      userId: 1,
      profilePicture:
        "https://cdn2.hubspot.net/hubfs/1716276/API/celebrities/Barack_obama.jpg",
    },
    {
      id: 2,
      desc: "where is my invitation?",
      name: "Oprah Winfrey",
      userId: 2,
      profilePicture:
        "https://www.amacad.org/sites/default/files/person/headshots/oprah.jpg",
    },
  ];

  return (
    <div className={styles.comments}>
      <div className={styles.commentAddTextWrapper}>
        <div className={styles.commentUserAvatarWrapper}>
          <img
            className={styles.comentUserAvatar}
            src="https://m.media-amazon.com/images/I/51fksPdErOL._AC_UF894,1000_QL80_.jpg"
            alt="userAvatar"
          />
        </div>
        <input
          type="text"
          placeholder="Add comment"
          className={styles.commentInput}
        />
        <button className={styles.addCommentBtn}>Send</button>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentUser}>
          <div className={styles.commentUserAvatarWrapper}>
            <img
              className={styles.comentUserAvatar}
              src={comment.profilePicture}
              alt="userAvatar"
            />
          </div>
          <div className={styles.commentUserInfo}>
            <span className={styles.commentUserName}>{comment.name}</span>
            <span className={styles.commentUserText}>{comment.desc}</span>
          </div>
          <span className={styles.commentTime}>1 day ago</span>
        </div>
      ))}
    </div>
  );
}
