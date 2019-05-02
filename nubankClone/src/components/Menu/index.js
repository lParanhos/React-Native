import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import QRCode from 'react-native-qrcode'

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            }),
        }}
        >
            <Code>
                <QRCode
                    value="https://github.com/lParanhos"
                    size={80}
                    bgColor="#8B10AE"
                    fgColor="#FFF"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => { }}>
                <SignOutButtonText>
                    Sair
                </SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}