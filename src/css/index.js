import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    Main: {
        width: 540,
        height: 485,
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: "#A8A8A8 0px 1px 3px 0px, #C3C3C3 0px 1px 1px 0px, #D5D5D5 0px 2px 1px - 1px",
        display: 'flex',
    },
    MainEsquerdo: {
        minWidth: '192px',
        height: '100%',
        borderRadius: '4px 0px 0px 4px',
        backgroundColor: '#1d5fce',
        backgroundImage: `url(${window.location.origin + '/img/banner.jpeg'})`,
        backgroundSize: 'cover',
        border: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '41% 50%',
    },
    MainDireito: {
        width: '100%',
        height: '100%',
        borderRadius: '0px 4px 4px 0px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderMainDireito: {
        width: '95%',
        height: '12%',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoRennerPoint: {
        width: 120,
        marginRight: 10,
    },
    'title-RennerPoint': {
        fontSize: '1.3em',
        color: '#333',
        marginLeft: 10,
    },
    SessionMainDireito: {
        width: '85%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    formRennerPoint: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    msgErro: {
        fontSize: '0.8em',
        color: 'red',
        margin: '2% 0% 3% 0%',
    }
})

export default styles;