import React, { useContext } from 'react'
import { MyBusinessContext } from '../context/MyBusinessContext'
import styles from '../styles/components/clients.module.css'

import { Backspace } from 'phosphor-react'

export default function Client() {

  const { clients, removeClient } = useContext(MyBusinessContext)
  return (
    <>
        <div className={styles.tableContainer}>


            <div className={styles.header}>
                <h3>Descrição</h3>
                <h3>Valor</h3>
                <h3>Saída/Entrada</h3>
                <h3>Remover</h3>
            </div>

            <div className={styles.clients}>
                {clients.map( client => (
                    <div className={styles.client}>
                        <h4> {client.description} </h4>
                        <h4> {client.value} </h4>
                        {client.exitOfMoney ?
                        <h4> saída </h4> :
                        <h4> Entrada </h4>
                        }
                        <button onClick={() => removeClient(client)}>
                            <Backspace className={styles.backspace} size={25} color={'#E1D55D'} />
                        </button>
                    </div>
                ))}
            </div>


        </div>
    </>
  )
}