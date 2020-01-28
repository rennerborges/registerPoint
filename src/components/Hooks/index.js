import React, { useState } from 'react';

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