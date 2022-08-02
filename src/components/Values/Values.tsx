import React from 'react'
import Image from 'next/image';
import img1 from './card_img1.png';
import img2 from './card_img2.png';
import img3 from './card_img3.png';
import styles from './values.module.css'


function Values() {
  return (
    <div className={styles.heading_div}>
          <div className={styles.heading}>
              <p>Our values</p>
              <p>Things in we believe</p>
              <p>Conversion angel investor entrepreneur first mover advantage. Handshake <br/> infographic mass market crowdfunding iteration. Traction stock user experience <br/> deployment beta innovator incubator focus. </p>
          </div>
          <div className={styles.values_cards}>
              <div className={styles.card}>
                  <div>    
                    <Image className={styles.img} src={img1} alt=""></Image>
                  </div>
                  <div className={styles.card_text}>
                      <p>We are commited.</p>
                      <p>Conversion angel investor entrepreneur first mover advantage. <br/> Handshake infographic mass market crowdfunding iteration. </p>
                  </div>
              </div>
              <div className={styles.card}>
                  <div>   
                    <Image className={styles.img} src={img2} alt=""></Image>
                  </div>
                  <div className={styles.card_text}>
                      <p>We are responsible.</p>
                      <p>Conversion angel investor entrepreneur first mover advantage. <br/> Handshake infographic mass market crowdfunding iteration. </p>
                  </div>
              </div>
              <div className={styles.card}>
                  <div>
                    <Image className={styles.img} src={img3} alt=""></Image>
                  </div>
                  <div className={styles.card_text}>
                      <p>We aim for progress.</p>
                      <p>Conversion angel investor entrepreneur first mover advantage. <br/> Handshake infographic mass market crowdfunding iteration. </p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Values