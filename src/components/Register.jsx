
import { useContext } from 'react'
import { MyBusinessContext } from '../context/MyBusinessContext'
import styles from '../styles/components/register.module.css'

export default function Register() {

  const {handleCheckbox, handleDescription, handleValue, submitClient } = useContext(MyBusinessContext)

  return (
    <div className={styles.registerContainer}>
      <form>
        
        <div className={styles.checkbox}>
          <div>
            <input onChange={(e) => handleCheckbox(e.target)} type="radio" id="option1" name="options" value="option1"/>
            <label for="option1">Entrada</label>
          </div>

          <div>
            <input onChange={(e) => handleCheckbox(e.target)} type="radio" id="option2" name="options" value="option2"/>
            <label for="option2">Saída</label>
          </div>
        </div>

        <div className={styles.values}>
          <input onChange={(e) => handleDescription(e.target.value)} className={styles.inputText} type="text" placeholder='Descrição' />
          <input onChange={(e) => handleValue(e.target.value)} className={styles.inputText} type="number" placeholder='Valor' />
        </div>
        
        <button onClick={(e) => submitClient(e)}>Cadastrar</button>

      </form>
    </div>
  )
}