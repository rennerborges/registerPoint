import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

export default class Teste extends Component {

    constructor(props) {
        super(props)

        this.state = {
            obj: [
                {
                    nome: 'Renner'
                },
                {
                    nome: 'Maria'
                },
                {
                    nome: 'Luiz'
                },
            ]
        }

        this.renner.bind(this);
    }

    renner(nome) {
        for (let i = 0; i < this.state.obj.length; i++) {
            if (this.state.obj[i].nome === nome) {
                let newObj = this.state.obj
                newObj.splice(i, 1)
                this.setState({
                    obj: newObj
                })
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <List>
                    {this.state.obj.map((item) => (
                        <ListItem>
                            <ListItemText primary={item.nome} />
                            <Button variant="contained" onClick={() => this.renner(item.nome)} color='primary' >Clique em mim</Button>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}