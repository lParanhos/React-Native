import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'


import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import {
  Container, Content, Card, CardContent, CardFooter, CardHeader,
Title, Description, Annotation
} from './style';

export default function Main() {
  return (
    <Container >
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$20,00 recebida de NoobMaster  hoje ás 06:01h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  )
}