import React, {useState} from 'react'
import './Cart.css'
import { Layout } from '../../components/Layout/Layout'


const Cart = () => {
    const [textInput, setTextInput] = useState("")
    const [add, setAdd] = useState([])
    console.log(add)
    add.push(textInput)

    // const addTask = () => {
    //     setAdd(add.push(textInput))
    // }

    return (
        <Layout>
            <div className='container-section'>
                <input onChange={(e)=> setTextInput(e.target.value)} type="text"></input>
                <button >Agregar</button>
                <div>
                    <ul>
                    {/* {add.map((task)=> {
                        return <li>{task}</li>
                    })} */}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export { Cart }