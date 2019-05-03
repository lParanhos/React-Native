import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import Padrao from '../style/Padrao'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    //Quando o nome do parametro é igual ao do objeto podemos escrever apenas uma vez
    alterarTexto = (texto) => {
        this.setState({ texto });
    }
    render() {
        return (
            <View>
                <Text style={Padrao.font40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}
                />
            </View>
        );
    }
}