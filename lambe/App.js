import React, { Component } from 'react';
import { View, Text } from 'react-native';


import Header from './src/components/Cabecalho';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Joana Da Cunha Machado',
      comment: 'Excelente foto, parabens !'
    }, {
      nickname: 'Thor, vingador mais forte',
      comment: 'Eu vou te pagar seu sacana !'
    }
    ]
    return (
      <View>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}
          comments={comments} />
      </View>
    );
  }
}

