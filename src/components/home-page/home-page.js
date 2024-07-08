import styles from "./home-page.module.css";
import campper_1 from "../../assets/campper_1.jpg";
import campper_2 from "../../assets/campper_2.webp";
import campper_3 from "../../assets/campper_3.jpg";
import campper_4 from "../../assets/campper_4.jpg";
import campper_5 from "../../assets/campper_5.jpg";
import campper_6 from "../../assets/campper_6.jpg";
import campper_7 from "../../assets/campper_7.jpg";
import campper_8 from "../../assets/campper_8.jpg";
import campper_9 from "../../assets/campper_9.jpeg";
import campper_10 from "../../assets/campper_10.jpg";
import campper_11 from "../../assets/campper_11.jpg";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <p className={styles.paragraph}>
        <span>Welcome to Camper!</span> This is where your campervan adventure begins. Since
        travelling by campervan is more than just a holiday. Our mission is to provide you with
        unforgettable moments - in the open air, surrounded by nature and with the freedom to
        explore the world at your own pace. At Camper, we are true experts in campervan hire
        worldwide. Our goal is to find the right campervan for every adventure! That's why we've
        been helping campervan fans discover the world with the perfect campervan hire since 1715.
        What is particularly important to us? A large selection of top rental companies and
        excellent customer service.
      </p>

      <img src={campper_7} alt="Camper 10" className={styles.div10} width={1248} height={800} />
    </div>
  );
};

export default HomePage;
