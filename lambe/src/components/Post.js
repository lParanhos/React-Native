import React, { Component } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';

import Autor from './Autor';
import Comments from './Comentarios';

export default class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Autor email='bino@locolandia.com' nickname='NoobMaster' />
                <Comments comments={this.props.comments} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        //flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})