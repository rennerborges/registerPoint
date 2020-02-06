import React from 'react';
import { TextField } from '@material-ui/core';
import styles from '../../css/index';

export default function Main() {
    const classes = styles();
    return (
        <div className={classes.Main} >
            <div className={classes.MainEsquerdo}></div>
            <div className={classes.MainDireito}>
                <div className={classes.HeaderMainDireito} >
                    <span className={classes['title-RennerPoint']}>Entrar</span>
                </div>
                <div className={classes.SessionMainDireito}>
                    <span style={{color: '#777', fontSize: 14,}}>Informe seus dados para continuar</span>
                    <TextField
                        id="outlined"
                        label="Nome"
                        size="small"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined"
                        label="Senha"
                        size="small"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />


                </div>
                <div></div>
            </div>
        </div>
    )

}