import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

function styles(props) {
    const useStyles = makeStyles({
        root: {
            width: '100%',
            height: 45,
            display: 'flex',
            justifyContent: `${props.tipo === 'buttonIcon2' ? 'space-between' : 'center'}`,
            boxShadow: '0px 12px 7px -9px #D5D5D5 !important',
            fontWeight: 500,
            textTransform: 'initial',
        },
        outlined: {
            border: '2px solid #494ca2',
            color: '#494ca2',
            boxShadow: 'none !important',
            '&:disabled': {
                backgroundColor: '#f6f6f6',
                color: '#969ab5',
                border: '2px solid #969ab5',
                boxShadow: 'none !important',
            },
            '&:hover': {
                border: '2px solid #494ca2',
                color: 'white',
                backgroundColor: '#494CA2',
            },
            '&:active': {
                border: '2px solid #494ca2',
                backgroundColor: '#2C2E66',
            }
        },
        contained: {
            color: '#ffffff',
            backgroundColor: '#3f51b5',
            '&:disabled': {
                backgroundColor: '#edf0f4',
                color: '#8a99b3',
                boxShadow: 'none !important',
            },
            '&:hover': {
                backgroundColor: '#595CB5',

            },
            '&:active': {
                backgroundColor: '#2C2E66',
            }
        },
        sizeSmall: {
            display: 'flex',
            width: '100%',
            height: 27,
            fontSize: '10px',
        },
        span: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: props.tipo === 'icon' ? 'flex' : 'inline'
        },

    });
    return useStyles;
}


function stylesColorPersonalizados(props) {

    const primary = props['color-button']['primary'];
    const hover = props['color-button']['hover'];
    const active = props['color-button']['active'];

    const useStylePersonalizado = makeStyles({
        outlined: {
            border: `2px solid ${primary}`,
            color: `${primary}`,
            boxShadow: 'none !important',
            '&:disabled': {
                backgroundColor: '#f6f6f6',
                color: '#969ab5',
                border: '2px solid #969ab5',
                boxShadow: 'none !important',
            },
            '&:hover': {
                border: `2px solid ${hover}`,
                color: 'white',
                backgroundColor: `${hover}`,
            },
            '&:active': {
                border: `2px solid ${active}`,
                backgroundColor: `${active}`
            }
        },
        contained: {
            color: '#ffffff',
            backgroundColor: `${primary}`,
            '&:disabled': {
                backgroundColor: '#edf0f4',
                color: '#8a99b3',
                boxShadow: 'none !important',
            },
            '&:hover': {
                backgroundColor: `${hover}`,

            },
            '&:active': {
                backgroundColor: `${active}`
            }
        },
    });
    return useStylePersonalizado;
}


function clonarIcon(icone) {
    if (icone)
        return React.cloneElement(icone, { style: { width: 20, height: 20 } })
}

function conteudoTitle(props) {
    return props.tipo !== 'icon' ? props.tittle : clonarIcon(props.icon)
}

function renderizarIcons(props, elemento) {
    if (props.tipo === 'buttonIcon2' && elemento === 'buttonIcon2')
        return props.icon
    if (props.tipo === 'buttonIcon' && elemento === 'buttonIcon')
        return props.icon
}


export default props => {

    const classes = styles(props)();

    const classesColorPersonalizadas = props['color-button'] && stylesColorPersonalizados(props)()

    return (
        <Button
            classes={{
                root: classes.root,
                outlined: `${props['color-button'] ? classesColorPersonalizadas.outlined : classes.outlined}`,
                contained: `${props['color-button'] ? classesColorPersonalizadas.contained : classes.contained}`,
                sizeSmall: classes.sizeSmall,
                text: classes.contained
            }}

            endIcon={renderizarIcons(props, 'buttonIcon2')}
            startIcon={renderizarIcons(props, 'buttonIcon')}
            {...props}
        >
            <span className={classes.span}>{conteudoTitle(props)}</span>
        </Button>
    )
}

