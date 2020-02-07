import React from 'react';
import {
    TextField,
} from '@material-ui/core';
import styles from '../../css/index';
import Button from '../Button/index';

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
                    <span style={{ color: '#777', fontSize: 14, }}>Informe seus dados para continuar</span>
                    <form className={classes.formRennerPoint} action="./renner.html">
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
                            type="password"
                            required
                            size="small"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <Button
                            type=" submit "
                            tittle="Entrar"

                        />
                    </form>

                </div>
                <div></div>
            </div>
        </div>
    )

}