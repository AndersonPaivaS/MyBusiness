import React from 'react'
import styles from '../../styles/components/valueBox.module.css'

export default function ValueBox({mode, emoji, value}) {
  return (
    <div className={styles.valueBoxContainer}>
        <div>
            <h2>{mode}</h2>
            <h1>{value}</h1>
            <img src={`https://github.com/AndersonPaivaS/MyBusiness/raw/main/public/icons/${emoji}.png`} alt="emoji" />
        </div>
    </div>
  )
}
