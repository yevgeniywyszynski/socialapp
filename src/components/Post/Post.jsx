import React, { useEffect, useState } from "react";
import styles from "./Post.module.scss";
import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";
import {
  MoreHoriz,
  Verified,
  FavoriteBorder,
  SmsOutlined,
  ShareOutlined,
  Favorite,
} from "@mui/icons-material";

export default function Post({ post, key }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    alert("Branch 2");
  }, []);

  useEffect(() => {
    console.log("Conflict 2");
  }, []);

  const handleLike = (post) => {
    if (post) {
      setLike(!like);
    }
  };

  return (
    <div key={key} className={styles.post}>
      <div className={styles.postContainer}>
        <div className={styles.userPostInfoContainer}>
          <div className={styles.userPostInfo}>
            <div className={styles.userPostInfoImgWrapper}>
              <img
                className={styles.userPostAvatar}
                alt="userPostAvatar"
                src={post.profilePic}
              />
            </div>
            <div className={styles.userPostInfoTime}>
              <div className={styles.userPostNameWrapper}>
                <Link
                  className={styles.userPostName}
                  to={`/member/${post.userId}`}
                >
                  <span>{post.name}</span>
                </Link>
                <Verified className={styles.userPostVerifedIcon} />
              </div>
              <span className={styles.userPostingTime}>12:25</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className={styles.userPostContent}>
          <p className={styles.userPostText}>{post.desc}</p>
          <div className={styles.userPostContentImgWrapper}>
            <img className={styles.userPostImg} src={post.img} alt="postImg" />
          </div>
        </div>
        <div className={styles.userPostInterAction}>
          <div className={styles.userPostActionItem}>
            {like ? (
              <Favorite
                onClick={() => handleLike(post)}
                className={styles.likeIcon}
              />
            ) : (
              <FavoriteBorder
                onClick={() => handleLike(post)}
                className={styles.likeIconDefault}
              />
            )}
            <span>3.221 Likes</span>
          </div>
          <div
            className={styles.userPostActionItem}
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <SmsOutlined className={styles.userActionItem} />
            <span>175 Comments</span>
          </div>
          <div className={styles.userPostActionItem}>
            <ShareOutlined className={styles.userActionItem} />
            <span>Share</span>
          </div>
        </div>
        {commentOpen ? <Comments /> : null}
      </div>
    </div>
  );
}
