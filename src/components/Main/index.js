import React, { useState } from 'react';
import {
    TextField,
} from '@material-ui/core';
import styles from '../../css/index';
import Button from '../Button/index';


export default function Main() {
    // Declaração dos Hooks
    let [nome, setNome] = useState('');
    let [senha, setSenha] = useState('');
    let [msgErro, setMsgErro] = useState('');

    function alterarStateNome(event) {
        setNome(event.target.value);
    }

    function alterarStateSenha(event) {
        setSenha(event.target.value);
    }

    function enviarForm(event) {
        let regexNome = /^([a-zA-Z]{4,})$/;
        let regexSenha = /^([a-zA-Z0-9!@#$%*]{6,})$/;
        if (!regexNome.test(nome)) {
            setMsgErro('Informe um usuario valido')
            return false
        }
        if (!regexSenha.test(senha)) {
            setMsgErro('Informe uma senha valida')
            return false
        }
        window.location.assign('/teste/4')
    }

    const classes = styles();
    return (
        <div className={classes.Main} >
            <div className={classes.MainEsquerdo}></div>
            <div className={classes.MainDireito}>

                <div className={classes.HeaderMainDireito} >
                    <span className={classes['title-RennerPoint']}>Entrar</span>
                    <img src={window.location.origin + '/img/logo.svg'} className={classes.logoRennerPoint} />
                </div>

                <div className={classes.SessionMainDireito}>
                    <span style={{ color: '#777', fontSize: 14, }}>Informe seus dados para continuar</span>
                    <TextField
                        id="outlined"
                        label="Nome"
                        size="small"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        style={{ width: '100%' }}
                        onChange={alterarStateNome}
                    />
                    <TextField
                        id="outlined"
                        label="Senha"
                        type="password"
                        size="small"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        style={{ width: '100%' }}
                        onChange={alterarStateSenha}
                    />
                    <span className={classes.msgErro}>{msgErro}</span>
                    <Button
                        type="submit"
                        tittle="Entrar"
                        onClick={enviarForm}

                    />

                </div>
            </div>
        </div>
    )

}