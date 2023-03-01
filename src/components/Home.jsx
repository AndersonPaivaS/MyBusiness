import React from 'react'
import { useContext } from 'react'
import { MyBusinessContext } from '../context/MyBusinessContext'
import styles from '../styles/components/home.module.css'
import Client from './Clients'
import Register from './Register'
import ValueBox from './reusable/ValueBox'

export default function Game() {

  const {name, target, amount, totalInflows, totalOutflows} = useContext(MyBusinessContext)
  return (
    <div className={styles.homeContainer}>
      <header style={ {background: target <= amount ? 'linear-gradient(to bottom, #ccf2f4b0, #dff7f8, #F4F9F9)' : 'linear-gradient(to bottom, #faa6a6b2, #faeded, #F4F9F9)'} } >
    
          <h1>My <span className={styles.h1Business} >Business</span></h1>
          {target <= amount ? 
          
          <div>
            <img src={`https://github.com/AndersonPaivaS/MyBusiness/raw/main/public/icons/rocket-up.png`} alt="Foguete para cima" />
            <p>Parabéns, <span className={styles.pName}>{name}!</span><br />{`A meta de R$ ${target} deste mês já foi atingida`}</p>
            <img src={`https://github.com/AndersonPaivaS/MyBusiness/raw/main/public/icons/rocket-up.png`} alt="Foguete para cima" />
          </div>
          :
          <div>
            <img src={`https://github.com/AndersonPaivaS/MyBusiness/raw/main/public/icons/rocket-crash.png`} alt="Foguete para cima" />
            <p>Poxa, <span className={styles.pName}>{name}!</span><br />{`A meta de R$${target} deste mês ainda não foi atingida`}</p>
            <img src={`https://github.com/AndersonPaivaS/MyBusiness/raw/main/public/icons/rocket-crash.png`} alt="Foguete caindo" />
          </div>}
      </header>

      <section className={styles.valueBoxContainer}>
        <ValueBox mode="Entradas" emoji="money-emoji" value={totalInflows}/>
        <ValueBox mode="Saídas" emoji="bad-emoji" value={totalOutflows}/>
        <ValueBox mode="Total" emoji="equal" value={amount}/>
      </section>

      <section>
        <Register />
      </section>


      <main>
        <Client />
      </main>
    </div>
  )
}
