import React from "react";
import styles from "./RightSideView.module.scss";

export default function RightSideView() {
  return (
    <div className={styles.right}>
      <div className={styles.rightContainer}>
        <div className={styles.rightItem}>
          <span className={styles.rightTextItem}>Sugestions For You</span>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://pbs.twimg.com/profile_images/736392853992001537/eF4LJLkn_400x400.jpg"
                alt="sugUserAvatar"
              />
              <span className={styles.rightSugUserName}>Donald Trump</span>
            </div>
            <div className={styles.sugUserBtnWrapper}>
              <button className={styles.btnFolow}>follow</button>
              <button className={styles.btnDismiss}>dismiss</button>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Mike_Pence_official_Vice_Presidential_portrait.jpg"
                alt="sugUserAvatar"
              />
              <span className={styles.rightSugUserName}>Michael Pence</span>
            </div>
            <div className={styles.sugUserBtnWrapper}>
              <button className={styles.btnFolow}>follow</button>
              <button className={styles.btnDismiss}>dismiss</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightItem}>
          <span className={styles.rightTextItem}>Latest Activites</span>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://flxt.tmsimg.com/assets/1366_v9_bc.jpg"
                alt="sugUserAvatar"
              />
              <span className={styles.rightSugUserName}>Brad Pitt</span>
              <span className={styles.rightSideLastActiveText}>liked post</span>
            </div>
            <div className={styles.sugUserBtnWrapper}>
              <span className={styles.rightSideLastActiveText}>
                10 minets ago
              </span>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://www.amacad.org/sites/default/files/person/headshots/oprah.jpg"
                alt="sugUserAvatar"
              />
              <span className={styles.rightSugUserName}>Oprah Winfrey</span>
              <span className={styles.rightSideLastActiveText}>liked post</span>
            </div>
            <div className={styles.sugUserBtnWrapper}>
              <span className={styles.rightSideLastActiveText}>
                10 minets ago
              </span>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://wydawnictwoagora.pl/wp-content/uploads/2022/03/Under-4MBs_BarackObama_20190417_WashingtonDC_CrownPublishingGroup_Photo-PariDukovic_Usage4_1154-cropped_web-458x620.jpeg"
                alt="sugUserAvatar"
              />
              <span className={styles.rightSugUserName}>Barack Obama</span>
              <span className={styles.rightSideLastActiveText}>
                add stories
              </span>
            </div>
            <div className={styles.sugUserBtnWrapper}>
              <span className={styles.rightSideLastActiveText}>
                3 hours ago
              </span>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://www.onthisday.com/images/people/johnny-depp-medium.jpg"
                alt="sugUserAvatar"
              />
              <span className={styles.rightSugUserName}>Johnny depp</span>
              <span className={styles.rightSideLastActiveText}>
                comment post
              </span>
            </div>
            <div className={styles.sugUserBtnWrapper}>
              <span className={styles.rightSideLastActiveText}>
                1 minet ago
              </span>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Donald_Tusk_2019.jpg"
                alt="sugUserAvatar"
              />
              <span className={styles.rightSugUserName}>Donald Tusk</span>
              <span className={styles.rightSideLastActiveText}>posted</span>
            </div>
            <div className={styles.sugUserBtnWrapper}>
              <span className={styles.rightSideLastActiveText}>
                10 minets ago
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightItem}>
          <span className={styles.rightTextItem}>Online Friends</span>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://img.a.transfermarkt.technology/portrait/big/38253-1642434304.jpg?lm=1"
                alt="sugUserAvatar"
              />
              <div className={styles.onlineIcon} />
              <span className={styles.rightSugUserName}>
                Robert Lewandowski
              </span>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://styles.redditmedia.com/t5_2tsc2/styles/communityIcon_tfy8p0thw0491.jpg"
                alt="sugUserAvatar"
              />
              <div className={styles.onlineIcon} />
              <span className={styles.rightSugUserName}>Irina Shayk </span>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://fwcdn.pl/ppo/12/20/541220/452119.3.jpg"
                alt="sugUserAvatar"
              />
              <div className={styles.onlineIcon} />
              <span className={styles.rightSugUserName}>Rihanna</span>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://pbs.twimg.com/profile_images/736392853992001537/eF4LJLkn_400x400.jpg"
                alt="sugUserAvatar"
              />
              <div className={styles.onlineIcon} />
              <span className={styles.rightSugUserName}>Donald Trump</span>
            </div>
          </div>
          <div className={styles.rightSideUserContainer}>
            <div className={styles.userInfoWrapper}>
              <img
                src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
                alt="sugUserAvatar"
              />
              <div className={styles.onlineIcon} />
              <span className={styles.rightSugUserName}>Lionel Messi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
