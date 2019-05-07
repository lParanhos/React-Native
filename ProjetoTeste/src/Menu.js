import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'
import Contador from './components/Contador';
import Plataformas from './components/Plataformas';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Eventos';
import Avo from './components/ComunicacaoDireta';
import TextoSincronizado from './components/ComunicacaoIndireta';
import ListaFlex from './components/ListaFlex';
// ************* Navegação entre telas *************

//Passo os itens de menu e o componente que vai ser chamada
export default createDrawerNavigator({
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista Flex Box' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo name='João' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={1000} />,
        navigationOptions: { title: 'Contador' }
    },
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