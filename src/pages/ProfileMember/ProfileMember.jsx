import React from "react";
import styles from "./ProfileMember.module.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Verified } from "@mui/icons-material";
import MemberPosts from "../../components/MemberPosts/MemberPosts";
import { useParams } from "react-router-dom";

export default function ProfileMember({ users }) {
  const { id } = useParams();
  let prevUser = users.filter((e) => e.userId == id);

  return (
    <div className={styles.profileMember}>
      <div className={styles.profileImgWrapper}>
        <img
          className={styles.profileImgBg}
          alt="profileBgImg"
          src="https://media.istockphoto.com/id/1298136769/video/social-media-speech-bubbles-4k-looped-background-footage.jpg?s=640x640&k=20&c=Moe-fPEN_e2eL6fSmA1Sln52tzBGs6xwTXiTxYXcTHQ="
        />
        <img
          className={styles.profileImg}
          alt="profileImg"
          src={prevUser[0].profilePic}
        />
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profileCenter}>
          <div className={styles.profileInformationContainer}>
            <div className={styles.profileLeft}>
              <FacebookTwoToneIcon className={styles.faceIcon} />
              <LinkedInIcon className={styles.linkedIcon} />
              <InstagramIcon className={styles.instaIcon} />
              <TwitterIcon className={styles.twiterIcon} />
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.profileItem}>
                <PlaceIcon />
                <span className={styles.profileInfoDescText}>
                  {prevUser[0].city}
                </span>
              </div>
              <div className={styles.profileItem}>
                <LanguageIcon />
                <span className={styles.profileInfoDescText}>
                  {prevUser[0].nickName}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.profileNameVerifedWrapper}>
            <div className={styles.verifedContainer}>
              <span className={styles.profileUserName}>{prevUser[0].name}</span>
              <Verified className={styles.profileVerifedIcon} />
            </div>
          </div>
          <div className={styles.profileFollowWrapper}>
            <div className={styles.profileRight}>
              <EmailOutlinedIcon />
              <MoreVertIcon />
              <button className={styles.profileFollowBtn}>Follow</button>
            </div>
          </div>
        </div>
      </div>
      <MemberPosts />
    </div>
  );
}
