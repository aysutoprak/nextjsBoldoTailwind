import React from 'react'
import Image from 'next/image';
import styles from './footer.module.css'
import footer_boldo_logo from './footer_boldo_logo.png';


const Footer = () => {
  return (
<div className={styles.footer}>
    <div className={styles.call_to_action_bg}>
        <div className={styles.call_to_action_div}>
            <div className={styles.call_to_action_text}>
                <p>An enterprise template to ramp up your company website</p>
            </div>
            <div className={styles.call_to_action_input_area}>
                <input placeholder="Your email address" type="text" />
                <button>Start now</button>
            </div>
        </div>
    </div>
    <div className={styles.footer_bottom}>
              <div className={styles.bottom_part_left}>
                  <div className={styles.footer_part1_title}>
                    <Image src={footer_boldo_logo} alt="" />
            </div>
                  <div className={styles.footer_part1_text1}>
                <p>
                Social media validation business model <br />
                canvas graphical user interface launch <br />
                party creative facebook iPad twitter.
                </p>
            </div>
                  <div className={styles.footer_part1_text2}>
                <p>All rights reserved.</p>
            </div>
            </div>
              <div className={styles.bottom_part_right}>
                  <div className={styles.bottom_part}>
                      <p className={styles.footer_right_title}>Landings</p>
                      <div className={styles.footer_right_box}>
                    <p>Home</p>
                    <p>Products</p>
                    <p>Services</p> 
                </div>
            </div>
                  <div className={styles.bottom_part}>
                      <p className={styles.footer_right_title}>Company</p>
                      <div className={styles.footer_right_box}>
                    <p>Home</p>
                          <p>Careers<button className={styles.footer_button} >Hiring!</button></p> 
                    <p>Service</p>
                </div>
            </div>
                  <div className={styles.bottom_part}>
                      <p className={styles.footer_right_title}>Resources</p>
                      <div className={styles.footer_right_box}>
                    <p>Blog</p>
                    <p>Products</p>
                    <p>Services</p>
                </div>
            </div>
        </div>
    </div>
</div>
)}

export default Footer