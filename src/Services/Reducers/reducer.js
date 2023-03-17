
import { FETCH_DATA_SUCCESS, FETCH_DATA_COME, FETCH_DATA_ERROR } from "../Constant";


const initialState = {
    user: [],
    loading: false,
    err: null
}

export const datareducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA_COME:
            return {
                ...state,
                loading: true,
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case FETCH_DATA_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload

            }
        // case LIKE_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.map(post => {
        //             if (post._id === action.postId) {
        //                 return {
        //                     ...post,
        //                     likes: !!post.likes ? post.likes.concat(action.userId) : [action.userId]
        //                 }
        //             }
        //             return post;
        //         })
        //     };

        // case UNLIKE_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.map(post => {
        //             if (post._id === action.postId) {
        //                 return {
        //                     ...post,
        //                     likes: post.likes.filter(userId => userId !== action.userId)
        //                 }
        //             }
        //             return post;
        //         })
        //     };
        default:
            return {
                ...state,
            }
    }
}