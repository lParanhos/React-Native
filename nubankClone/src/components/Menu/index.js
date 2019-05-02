import React from 'react';
import { Container, Code } from './styles';

import QRCode from 'react-native-qrcode'
export default function Menu() {
    return (
        <Container >
            <Code>
                <QRCode 
                value="https://github.com/lParanhos"
                size={80}
                fgColor="#FFF"  
                bgColor="#8B10AE"
                />
            </Code>
        </Container>
    );
}