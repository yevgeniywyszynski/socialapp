import React from "react";
import styles from "./MemberPosts.module.scss";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";

export default function MemberPosts() {
  const memberPosts = [
    {
      userId: 1,
      name: "Megan Fox",
      profilePic:
        "https://phantom-marca.unidadeditorial.es/dbc032dc01af5e2bd4ea209e639ff917/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/28/16749081475728.jpg",
      desc: "Amazing day with my friends, tnx for all =)",
      img: "https://celebmafia.com/wp-content/uploads/2022/05/megan-fox-celebrating-her-birthday-in-las-vegas-05-15-2022-2.jpg",
    },
    {
      userId: 2,
      name: "Andrzej Duda",
      profilePic:
        "https://pbs.twimg.com/profile_images/556495456805453826/wKEOCDN0_400x400.png",
      desc: "President Andrzej Duda, after a meeting with Ukrainian President Volodymyr Zelensky in Brussels on Tuesday, said that he had reiterated Poland's support for Ukraine's EU and NATO aspirations.",
      img: "https://en.bbn.gov.pl/dokumenty/zalaczniki/3/3-2145.jpg",
    },
    {
      userId: 3,
      name: "Julia Roberts",
      profilePic:
        "https://prod-images.tcm.com/Master-Profile-Images/JuliaRoberts.162850.2.jpg",
      desc: "Oscars 2023 Winners: Full List of the 95th Academy Awards Winners!",
      img: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/ewvDf9C4PpC_Ie361O0L5iLm9Go=/960x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/3PYSEHVDEMI6HF7UPIR2V26OEE.jpg",
    },
  ];

  return (
    <>
      <AddPost />
      <div className={styles.memberPosts}>
        {memberPosts.map((post) => (
          <div key={post.userId}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
