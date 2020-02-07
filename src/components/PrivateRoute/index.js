import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function verificarToken(){
    return !localStorage.getItem('token')
}

function mensagemErro(){
    return(
        <h1>Faça login seu vacilão</h1>
    )
}

export default (props)=>{
    return(
            !verificarToken() ?
            <Route {...props}/>
            :
            window.location.href = "/"
        )
}