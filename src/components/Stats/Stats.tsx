import React from 'react'
import styles from './stats.module.css'

const Stats = () => {
  return (
    <div className={styles.stats_div}>
          <div className={styles.heading}>
              <p>Our Numbers</p>
              <p>Handshake infographic mass market crowdfunding iteration.</p>
          </div>
          <div className={styles.stats_numbers}>
              <div className={styles.stats_item}>
                  <p>120m</p>
                  <p>Cool feature title</p>
              </div>
              <div className={styles.stats_item}>
                  <p>10.000</p>
                  <p>Cool feature title</p>
              </div>
              <div className={styles.stats_item}>
                  <p>240</p>
                  <p>Cool feature title</p>
              </div>
          </div>
    </div>
  )
}

export default Stats