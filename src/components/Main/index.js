import React, { Component } from 'react';

const styles = {
    Main: {
        width: 540,
        height: 485,
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: '#A8A8A8 0px 1px 3px 0px #C3C3C3 0px 1px 1px 0px #D5D5D5 0px 2px 1px -1px'

    }
}

export default class Main extends Component{
    render(){
        return(
            <div style={styles.Main} >
                <p>Oi</p>
            </div>
        )
    }
}