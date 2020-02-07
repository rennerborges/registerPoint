import React from 'react';
import { Route, } from 'react-router-dom'

function verificarToken(){
    return !localStorage.getItem('token')
}

export default (props)=>{
    return(
            !verificarToken() ?
            <Route {...props}/>
            :
            window.location.assign("/")
        )
}