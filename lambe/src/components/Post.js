import React, { Component } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import { connect } from "react-redux";

import Autor from './Autor';
import Comments from './Comentarios';
import AddComment from './AddComentario';

class Post extends Component {
    render() {
        const addComment = this.props.name ?
            <AddComment postId={this.props.id} /> :
            null

        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Autor email={this.props.email} nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />
                {addComment}
            </View>
        )
    }
}


const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post);

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