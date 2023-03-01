import { useState, createContext, useEffect } from "react";

export const MyBusinessContext = createContext({})

export function MyBusinessProvider( {children} ) {

    const [name, setName] = useState('Anderson')
    const [target, setTarget] = useState(0)

    const [exit, setExit] = useState(true)
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [clients, setClients] = useState([])
    /*const [copyClients, setCopyClients] = useState([])*/

    const [amount, setAmount] = useState(0)
    const [totalInflows, setTotalInflows] = useState(0)
    const [totalOutflows, setTotalOutflows] = useState(0)

    /*useEffect(() => {

        if(clients == null) {
            setClients([])
        }

        let copyLocalStorage = localStorage.setItem('clients', JSON.stringify(clients))
        setCopyClients(copyLocalStorage.substring())

    }, [clients])*/


    /*/// LOGIN //////////////*/
    
    const handleName = (e) => {
        setName(e)
    }

    const handleTarget = (e) => {
        setTarget(e)
    }

    const goHome = () => {
        setName(name)
        setTarget(target)
    }


    /*/// HOME //////////////*/

    const handleCheckbox = (e) => {
        let type = e.id

        if(type == "option1") {
            setExit(false)
        } else if(type == "option2") {
            setExit(true)
        }
    }

    const handleDescription = (e) => {
        setDescription(e)
    }

    const handleValue = (e) => {
        setValue(e)
    }

    const submitClient = (e) => {
        if(value == "" || description == "") {
            alert("ATENÇÃO: Existe algum campo vazio ou inválido")
        } else {  
            e.preventDefault()

            setClients([...clients, {
                exitOfMoney: exit,
                inputOfMoney: !exit,
                description: description,
                value: value
            }])

            let newValue = parseInt(value)

            
            if(exit == false) {
                setTotalInflows(totalInflows + newValue)
                setAmount(amount + newValue)
            } else {
                setTotalOutflows((totalOutflows) => totalOutflows + newValue)
                setAmount(amount - newValue)
            }
        }
    }

    /*////// CLIENTS ////////////*/

    const removeClient = (e) => {
        let copyArrayClients = clients
        const NewArrayClients = copyArrayClients.filter(client => client != e)
        setClients(NewArrayClients)

        let newValue = parseInt(e.value)

        if(e.exitOfMoney == false) {
            setTotalInflows(totalInflows => totalInflows - newValue)
            setAmount(amount - newValue)
            

        } else {
            setTotalOutflows(totalOutflows => totalOutflows - newValue)
            setAmount(amount + newValue)
        }
    }

    return(
        <MyBusinessContext.Provider value={{ 
            handleName,
            handleTarget,
            name,
            target,

            handleCheckbox,
            handleDescription,
            handleValue,
            submitClient,
            clients,

            amount,
            totalInflows,
            totalOutflows,

            removeClient,

         }}>
            {children}
        </MyBusinessContext.Provider>
    )
}