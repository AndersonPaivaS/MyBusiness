import React, { useContext } from 'react'
import styles from '../styles/components/start.module.css'
import { Link } from 'react-router-dom'
import { MyBusinessContext } from '../context/MyBusinessContext'

export default function Start() {

  const {handleName, handleTarget, goHome } = useContext(MyBusinessContext)

  return (
    <div className={styles.startContainer}>
      <header>
        <img src="../../public/icons/rocket.png" alt="Foguete" />
        <h1>Configure o seu <span className={styles.h1Business}>Negócio</span></h1>
      </header>

      <main>
        <form action="">
            <input onChange={(e) => handleName(e.target.value)} placeholder='Proprietário' type="text" />
            <input onChange={(e) => handleTarget(e.target.value)} placeholder='Meta mensal' type="number" />
            <Link onClick={goHome} className={styles.button} to="/home">Seguir</Link>
        </form>
      </main>

    </div>
  )
}
