import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'

export default props => {
    const [lista, setLista] = useState([]);
    const [texto, setTexto] = useState("");

    function renner() {
        let newList = [...lista]
        newList.push(texto)
        setLista(newList)
    }

    function textos(texto) {
        setTexto(texto.target.value)
    }

    let { id } = useParams();
    console.log(id)
    return (
        <div>
            <input type="text" onChange={textos}></input>
            <button onClick={renner}>Contar</button>

            <br></br>
            <ul>
                {lista.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}