import React from 'react'
import Image from 'next/image';
import img2 from './dwight.png';
import styles from './leaders.module.css'
import img1 from './micheal.png';
import img3 from './pam.png';

const Leaders = () => {
  return (
      <div className={styles.leaders}>
          <div className={styles.our_team}>
              <div className={styles.team_intro}>
                  <p>Our team</p>
                  <p>The leadership team</p>
                  <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
              </div>
              <div className={styles.team_members}>
                  <div>
                    <Image src={img1} alt="" />
                        <p className={styles.member_name}>Micheal Scott</p>
                        <p className={styles.member_status}>General Manager</p>
                  </div>
                  <div>
                    <Image src={img2} alt="" />
                        <p className={styles.member_name}>Dwight Schrute</p> 
                        <p className={styles.member_status}>General Manager</p>  
                  </div>
                  <div>
                    <Image src={img3} alt="" />  
                        <p className={styles.member_name}>Pam Beetsley</p>
                        <p className={styles.member_status}>General Manager</p> 
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Leaders