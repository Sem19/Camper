import React from "react";
import styles from "./BackgroundVideo.module.css";

const BackgroundVideo = ({ videoSource, children }) => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BackgroundVideo;
