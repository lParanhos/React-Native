import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'

// ************* Navegação entre telas *************

//Passo os itens de menu e o componente que vai ser chamada
export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        //Aqui eu mudo o titulo do componente
        //Caso não passe ele pega por default a chave deste objeto no caso "MegaSena"
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />,
        navigationOptions: { Title: 'Inverter' }
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { Title: 'Par & Impar' }

    },
    Simples: {
        screen: () => <Simples texto="Flexivel" />
    }
    // Define a largura do drawer
}, { drawerWidth: 300 })