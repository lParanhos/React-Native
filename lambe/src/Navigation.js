import React, { Component } from 'react';
import {
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddFoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';


const LoginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: Login
},{
    initialRouteName: 'Profile'
})

const MenuRoutes = {

    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddFoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: LoginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    },
    Login:{
        name: 'Login',
        screen: Login,
        navigationOptions:{

        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed', // Pega a rota inicial
    tabBarOptions: {
        showLabel: false // Não deixa aparecer o nome das Rotas
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

export default MenuNavigator;