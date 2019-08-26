import React, { Component } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';

import Autor from './Autor';
import Comments from './Comentarios';
import AddComment from './AddComentario';

export default class Post extends Component {
    render() {
        console.log("=:", this.props)
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Autor email={this.props.email} nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />
                <AddComment postId={this.props.id}/>
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