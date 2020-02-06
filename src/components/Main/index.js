import React from 'react';
import styles from '../../css/index';

export default function Main() {
    const classes = styles();
    return (
        <div className={classes.Main} >
            <div className={classes.MainEsquerdo}></div>
            <div className={classes.MainDireito}>

            </div>
        </div>
    )

}