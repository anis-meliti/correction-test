import axios from 'axios';
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

export const getUsers = () => async dispatch => {
  dispatch({
    type: GET_USERS
  });
  try {
    const userArray = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: userArray.data
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: error.response.data
    });
  }
};

export const getUserById = id => dispatch => {
  dispatch({
    type: GET_USER_BY_ID,
    payload: id
  });
};

export const getPosts = id => async dispatch => {
  dispatch({
    type: GET_POSTS
  });

  try {
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: posts.data
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      payload: error.response.data
    });
  }
};

export const getPostById = userId => dispatch => {
  dispatch({
    type: GET_POST_BY_ID,
    payload: userId
  });
};
export const getComments = id => async dispatch => {
  dispatch({
    type: GET_COMMENTS,
    payload: id
  });
  try {
    const comments = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );

    dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: comments.data
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_FAIL,
      payload: error.response
    });
  }
};
