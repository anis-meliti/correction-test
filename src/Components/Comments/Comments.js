import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import Post from '../Post/Post';

import { getComments, getPostById } from '../../JS/actions/actions';
class Comments extends Component {
  componentDidMount() {
    this.props.getComments(this.props.match.params.id);
    this.props.getPostById(this.props.match.params.id);
  }
  clickHandler = () => this.props.history.goBack();
  render() {
    return (
      <div className='container '>
        <div className='row'>
          <img
            className='back-link'
            src={require('../../assets/img/back.png')}
            alt='arrow back'
            onClick={this.clickHandler}
          />
        </div>
        <div className='row'>
          <Post post={this.props.post} />
        </div>
        <div className='container post-container'>
          {this.props.isLoading ? (
            <div className='row justify-content-md-center'>
              <div className='spinner-border' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          ) : (
            this.props.comments.map((com, key) => (
              <Comment comment={com} key={key} />
            ))
          )}
        </div>
      </div>
    );
  }
}
const mapSTP = state => ({
  isLoading: state.userReducer.isLoading,
  post: state.userReducer.post,
  comments: state.userReducer.comments
});

export default connect(mapSTP, { getComments, getPostById })(Comments);
