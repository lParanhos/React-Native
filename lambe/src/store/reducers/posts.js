import { ADD_POST, ADD_COMMENT } from '../../store/actions/actionTypes';

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Noobmaster',
        email: 'noobmaster@asdalk.com.br',
        image: require('../../../assets/imgs/fence.jpg'),
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
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            };
        case ADD_COMMENT: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                })
            }
        }
        default:
            return state;
    }
}

export default reducer;