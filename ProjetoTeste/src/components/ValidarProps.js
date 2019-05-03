import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const ValidarProps = props =>
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>


//Aqui coloco os valores defaults das props, caso não seja passado nenhum valor
ValidarProps.defaultProps = {
    label: 'Ano: '
}

//Critérios e validações
ValidarProps.defaultProps = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps;