"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/HeaderFooter.module.css";

import Link from "next/link";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isquicklinkOpen, setquickLinkopen] = useState(false);
  const [isfollowOpen, setfollowOpen] = useState(false);
  const quickLinks = [
    { text: "Orders & Shipping", url: "#" },
    { text: "Join/Login as a Seller", url: "#" },
    { text: "Payment & Pricing", url: "#" },
    { text: "Return & Refunds", url: "#" },
    { text: "FAQs", url: "#" },
    { text: "Privacy Policy", url: "#" },
    { text: "Terms & Conditions", url: "#" },
  ];
  const additionalFooterLinks = [
    { text: "About Us", url: "#" },
    { text: "Stories", url: "#" },
    { text: "Artisans", url: "#" },
    { text: "Boutiques", url: "#" },
    { text: "Contact Us", url: "#" },
    { text: "EU Compliances Docs", url: "#" },
  ];
  const toggleQuicklinks = () => {
    setquickLinkopen(!isquicklinkOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFollowus = () => {
    setfollowOpen(!isfollowOpen);
  };
  return (
    <footer className={styles.main}>
      <div className={styles.wrapper_footer}>
        <div className={styles.upper_footer}>
          <div className={styles.subscribe}>
            <h3>Be the first to know</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className={styles.input}>
              <input
                className=""
                type="email"
                placeholder="Enter your e-mail..."
              />
              <button className={styles.member}>subscribe</button>
            </div>
          </div>
          {/* right section */}
          <div className={styles.contact_details}>
            <div className={styles.contact_us}>
              <h3>contact us</h3>
              <div className={styles.media_contact}>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
            </div>
            <div className={styles.currency}>
              <h3>Currency</h3>
              <div className={styles.usd}>
                <Image
                  src="/us.svg"
                  alt="televisionsvg"
                  style={{ marginBottom: "20px" }}
                  width={24}
                  height={24}
                />
                <span>
                  {" "}
                  <Image
                    src="/Star.svg"
                    width={12}
                    height={12}
                    alt="error"
                  />{" "}
                  USD
                </span>
              </div>

              <p className={styles.trans_details}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr style={{ marginTop: "40px" }} />
        {/* bottom footer */}
        <div className={styles.action_links}>
          <div className={styles.metta_muse}>
            <div className={styles.metta_arrow_down} onClick={toggleMenu}>
              <h3>Metta muse</h3>
              <Image
                src="/arrow-down.svg"
                alt="error"
                width={34}
                height={34}
                className={styles.arrow_down}
              />
            </div>

            {/* for large screens */}
            <ul className={styles.links}>
              {additionalFooterLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className={styles.footer_link}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            {/* for smaller screens */}
            {isMenuOpen ? (
              <ul className={styles.toggleMenu}>
                {additionalFooterLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className={styles.footer_link}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
          {/* second div */}

          <div className={styles.quickLinks}>
            <div className={styles.metta_arrow_down} onClick={toggleQuicklinks}>
              <h3>QUICK LINKS</h3>
              <Image
                src="/arrow-down.svg"
                alt="error"
                width={34}
                height={34}
                className={styles.arrow_down}
              />
            </div>

            <ul className={styles.links}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className={styles.footer_link}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            {isquicklinkOpen ? (
              <ul className={styles.toggleMenu}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className={styles.footer_link}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
          {/* third container */}
          <div className={styles.follow_us}>
            <div className={styles.metta_arrow_down} onClick={toggleFollowus}>
              <h3>follow Us</h3>
              <Image
                src="/arrow-down.svg"
                alt="error"
                width={34}
                height={34}
                className={styles.arrow_down}
              />
            </div>
            <div className={styles.social_links_container}>
              <div className={styles.links}>
                <Image src="/instagram.svg" alt="infosvg" width={24} height={24} />
                <Image
                  src="/linkedin.svg"
                  alt="linkedinsvg"
                  width={24}
                  height={24}
                />
              </div>
              {isfollowOpen && (
                <div className={styles.toggleMenu}>
                  <Image
                    src="/instagram.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/linkedin.svg"
                    alt="linkedinsvg"
                    width={24}
                    height={24}
                  />
                </div>
              )}
            </div>
            {/* payment container */}
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
