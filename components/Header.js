import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import styles from "@/styles/HeaderFooter.module.css"; // Import the stylesheet

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headertop}>
        <div className={styles.wrapper}>
          <div className={styles.details}>
            <Image src="/icon.svg" alt="error" width={24} height={24} />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={styles.details}>
            <Image src="/icon.svg" alt="error" width={24} height={24} />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={styles.details}>
            <Image src="/icon.svg" alt="error" width={24} height={24} />
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      <div className={styles.header_box}>
        <div className={styles.main_header}>
          <div className={styles.spaces}>
            <Image src="/hamlinear.png" alt="error" width={36} height={30} />
          </div>
          <div className={styles.icon}>
            <Image src="/logo.svg" alt="error" width={36} height={40} />
          </div>
          <div className={styles.title}>
            <h2>LOGO</h2>
          </div>
          <div className={styles.iconsContainer}>
            <Image
              src="/search-normal.png"
              alt="error"
              width={24}
              height={24}
            />
            <Image src="/heart.svg" alt="error" width={24} height={24} />
            <Image src="/shopping-bag.svg" alt="error" width={24} height={24} />
            <Image src="/profile.svg" alt="error" width={24} height={24} />
            <p style={{ paddingRight: "5px" }}>ENG</p>
            <Image src="/arrow-down.svg" alt="error" width={24} height={24} />
          </div>
        </div>

        <div className={styles.header_container}>
          <div className={styles.advertise}>
            <div className={styles.spaces}>
              {/* <Image src="/hamlinear.png" alt="error" width={36} height={40} /> */}
            </div>
          </div>
        </div>
      <Navbar />
      </div>
      <div className={styles.bannerTitle}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Biggest Sale of the Year! Up to 50% OFF on all categories—shop your
          favorites now! Limited-time offer: Grab exclusive deals on top brands
          before they're gone! Hurry! Flash sale happening today with unbeatable
          discounts on fashion, electronics, and more!
        </p>
      </div>
    </header>
  );
};

export default Header;
