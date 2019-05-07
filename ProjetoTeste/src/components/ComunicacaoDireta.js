import React from 'react';
import { View, Text } from 'react-native';

const fonte = { style: { fontSize: 30 } };

function filhosComProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avo: {props.name} {props.sobrenome}</Text>
        <Pai nome="André" sobrenome={props.sobrenome} >
            <Filho nome="Ana" />
            <Filho nome="Benicio" />

        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome="BEnedita" />
            <Filho nome="Criovaldo" />
            <Filho nome="Judite" />
        </Pai>
    </View>

export default Avo;