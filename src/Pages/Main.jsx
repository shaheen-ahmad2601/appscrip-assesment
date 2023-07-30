import React from "react";
import styles from "../Styles/Main.module.css";
import { ButttonMain } from "@/Components/Buttons/ButttonMain";
import {
  cowboy,
  bagImg,
  box3,
  confettiBall,
  crystalBall,
  ellipse1,
  ellipse2,
  ellipse3,
  fire,
  globe,
  honeybee,
  model1Img,
  model2Img,
  model3Img,
  moneyBag,
  moneyImg,
  moneyWings,
  partyPopper,
  phoneImg,
  row2Img1,
  row2Img2,
  row2Img3,
  smilingFace,
  starImg,
  starStruck,
  unicorn,
  wrappedGift,
  communityImg1,
  communityImg2,
} from "../../public/assets/config";
import {
  box2Content,
  box2Heading,
  main_Heading,
  row1Content1,
  row1Content2,
  row1Heading1,
  row1Heading2,
  row2Content1,
  row2Content2,
  row2Content3,
  row2Heading1,
  row2Heading2,
  row2Heading3,
} from "../../public/assets/en";
export const Main = () => {
  return (
    <div className={styles.main_container}>
      <p className={styles.heading}>{main_Heading}</p>
      <div className={styles.box1}>
        <div className={styles.row1Container}>
          <div className={styles.row1}>
            <span>{row1Heading1}</span>
            <span>{row1Content1}</span>
            <img className={styles.row1Img1} src={phoneImg} alt="phone" />
            <img className={styles.row1Img2} src={moneyImg} alt="money" />
          </div>
          <div className={styles.row1}>
            <span>{row1Heading2}</span>
            <span>{row1Content2}</span>
            <div className={styles.imgContainer}>
              <div>
                {" "}
                <img src={bagImg} alt="img16" />
              </div>
              <div className={styles.modelsContent}>
                <img src={model1Img} alt="modelImg" />
                <p>Green bikini</p>
                <div className={styles.price}>
                  <p>$100</p>
                  <img src={starImg} alt="ratings" />{" "}
                  <span className={styles.ratings}>4.3</span>
                </div>
              </div>
              <div className={styles.modelsContent}>
                <img src={model2Img} alt="modelImg" />
                <p>Bikini pairs</p>
                <div className={styles.price}>
                  <p>$100</p>
                  <img src={starImg} alt="ratings" /> <span>4.3</span>
                </div>
              </div>
              <div className={styles.modelsContent}>
                <img src={model3Img} alt="modelImg" />
                <p>Blue bikini</p>
                <div className={styles.price}>
                  <p>$100</p>
                  <img src={starImg} alt="ratings" /> <span>4.3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row2Container}>
          <div className={styles.row2}>
            <img src={row2Img1} alt="img12" />
            <span>{row2Heading1}</span>
            <span>{row2Content1}</span>
          </div>
          <div className={styles.row2}>
            <img src={row2Img2} alt="img13" />
            <span>{row2Heading2}</span>
            <span>{row2Content2}</span>
          </div>
          <div className={styles.row2}>
            <img src={row2Img3} alt="img14" />
            <span>{row2Heading3}</span>
            <span>{row2Content3}</span>
          </div>
        </div>
      </div>

      <div className={styles.box2}>
        <img src={ellipse1} alt="ellipse" />
        <img src={ellipse2} alt="ellipse" />
        <img src={ellipse3} alt="ellipse" />
        <img src={ellipse3} alt="ellipse" />
        <img src={ellipse2} alt="ellipse" />
        <img src={ellipse1} alt="ellipse" />
        <img src={ellipse2} alt="ellipse" />
        <img src={ellipse2} alt="ellipse" />
        <span>{box2Heading}</span>
        <span>{box2Content}</span>
        <div className={styles.joinNowBtn}>
          <ButttonMain className={styles.joinNowBtn} text="Join Now" />
        </div>
      </div>

      <div className={styles.box3}>
        <img src={box3} alt="models" />
      </div>

      <div className={styles.box4}>
        <div className={styles.galaxy1}>
          <div className={styles.galaxy2}>
            <img src={fire} alt="Fire" border="0" />
            <img src={honeybee} alt="Honeybee" />
            <img src={cowboy} alt="Cowboy-Hat-Face" />
            <img src={partyPopper} alt="Party-Popper" />
            <img src={crystalBall} alt="Crystal-Ball" />
            <img src={wrappedGift} alt="Wrapped-Gift" />

            <div className={styles.galaxy3}>
              <img src={smilingFace} alt="Smiling-Face-With-Sunglasses" />
              <img src={moneyBag} alt="Money-Bag" />
              <img src={globe} alt="Globe-Showing-Europe-Africa" />
              <img src={unicorn} alt="Unicorn" />
              <img src={confettiBall} alt="Confetti-Ball" />

              <div className={styles.galaxy4}>
                <img src={starStruck} alt="Star-Struck" />
                <img src={moneyWings} alt="Money-With-Wings" />
              </div>
            </div>
          </div>
        </div>

        <span>
          Ready to Cash in Your Connections? Join Our Affiliate Program
        </span>
        <span>
          Join now and get <span>7.5%</span> commission on all creator referrals
          for the entire year.
        </span>
        <div className={styles.earnNowBtn}>
          <ButttonMain text="Earn Now" />
        </div>
      </div>
      <div className={styles.box5}>
        <img src={communityImg1} alt="img1" />
        <img src={communityImg2} alt="img2" />
        <span>Join the ABC Community</span>
        <span>
          Become part of a vibrant and supportive community of like-minded
          creators by joining ABC's exclusive platform. Collaborate, learn, and
          connect with fellow creators who share your passion for adult content
          creation.
        </span>
        <div className={styles.learnMoreBtn}>
          <ButttonMain text="Learn more" />
        </div>
      </div>
    </div>
  );
};
