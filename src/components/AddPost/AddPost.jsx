import React from "react";
import styles from "./AddPost.module.scss";
import TagUser from "../../assets/taguser.png";
import AddImg from "../../assets/gallery.png";
import Location from "../../assets/add-location.png";

export default function AddPost() {
  return (
    <div className={styles.addPost}>
      <div className={styles.addPostContainer}>
        <div className={styles.addPostUpWrapper}>
          <div className={styles.userPostInfoImgWrapper}>
            <img
              className={styles.userAddPostAvatar}
              alt="userPostAvatar"
              src="https://m.media-amazon.com/images/I/51fksPdErOL._AC_UF894,1000_QL80_.jpg"
            />
          </div>
          <input className={styles.addinputPost} placeholder="Add new Post" />
        </div>
        <div className={styles.addPostDownContainer}>
          <div className={styles.addPostIconWrapper}>
            <div className={styles.addPostIconContainer}>
              <img
                src={AddImg}
                className={styles.addPostIcon}
                alt="addPostIcon"
              />
              <span className={styles.addPostIconText}>Add Image</span>
            </div>
            <div className={styles.addPostIconContainer}>
              <img
                src={Location}
                className={styles.addPostIcon}
                alt="addPostIcon"
              />
              <span className={styles.addPostIconText}>Add Place</span>
            </div>
            <div className={styles.addPostIconContainer}>
              <img
                src={TagUser}
                className={styles.addPostIcon}
                alt="addPostIcon"
              />
              <span className={styles.addPostIconText}>Tag Friends</span>
            </div>
          </div>
          <button className={styles.addPostBtn}>Add Post</button>
        </div>
      </div>
    </div>
  );
}
