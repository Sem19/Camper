import BackgroundVideo from "../Shared/background-video/BackgroundVideo";
import styles from "./home-page.module.css";
import videoFile from "../../assets/campper_video.mp4";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <BackgroundVideo videoSource={videoFile}>
        <p>
          <span>Welcome to Camper!</span> This is where your campervan adventure begins. Since
          travelling by campervan is more than just a holiday. Our mission is to provide you with
          unforgettable moments - in the open air, surrounded by nature and with the freedom to
          explore the world at your own pace. At Camper, we are true experts in campervan hire
          worldwide. Our goal is to find the right campervan for every adventure! That's why we've
          been helping campervan fans discover the world with the perfect campervan hire since 1715.
          What is particularly important to us? A large selection of top rental companies and
          excellent customer service.
        </p>
      </BackgroundVideo>
    </div>
  );
};

export default HomePage;
