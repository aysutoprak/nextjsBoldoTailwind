import React from 'react'
import Image from 'next/image';
import img1 from './hb_bl.png';
import img2 from './hb_br.png';
import img3 from './hb_m.png';
import img4 from './hb_tl.png';
import img5 from './hb_tr.png';
import styles from './herobanner.module.css'

const heroBanner = () => {
  return (
    <div className={styles.hero_div}>
      <div className={styles.herobanner_div}>
        <div className={styles.banner_left}>
            <Image className= {styles.img1} src={img1} alt="" />
            <Image src={img2} alt="" />
        </div>
        <div className={styles.banner_mid}>
            <Image src={img3} alt="" />
        </div>
        <div className={styles.banner_right}>
            <Image src={img4} alt="" />
            <Image src={img5} alt="" />
        </div>    
      </div>
      <div className={styles.our_story}>
        <p>Our story</p>
        <p>Handshake infographic mass market crowdfunding iteration.</p>
        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
      </div>
    </div>
  )
}

export default heroBanner