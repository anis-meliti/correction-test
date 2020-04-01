import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_BY_ID,
  GET_POSTS,
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
  GET_COMMENTS,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_SUCCESS,
  GET_POST_BY_ID
} from '../constants/actions-types';

const initialState = {
  userList: [],
  user: {},
  isLoading: false,
  error: [],
  posts: [],
  post: {},
  comments: []
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: payload
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: state.userList.filter(el => el.id === Number(payload))[0]
      };
    case GET_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload
      };
    case GET_COMMENTS:
      return {
        ...state,
        isLoading: true
      };
    case GET_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: payload
      };
    case GET_POST_BY_ID:
      return {
        ...state,
        post: state.posts.filter(el => el.id === Number(payload))[0]
      };
    default:
      return state;
  }
};
export default userReducer;
