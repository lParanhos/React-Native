import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

import Header from '../components/Cabecalho';
import Post from '../components/Post';

export default class Feed extends Component {

    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Noobmaster',
            email: 'noobmaster@asdalk.com.br',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Crab Luis',
                comment: 'Massa'
            }, {
                nickname: 'Thor, Deus do trovão',
                comment: 'Eu vou te pegar !'
            }]
        }, {
            id: Math.random(),
            nickname: 'Thony Sterco',
            email: 'tony@asdalk.com.br',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }

})