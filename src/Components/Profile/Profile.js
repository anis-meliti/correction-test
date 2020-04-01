import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Profile.css';
import Post from '../Post/Post';
import { getUserById, getPosts } from '../../JS/actions/actions';
import { Link } from 'react-router-dom';
class Profile extends Component {
  componentDidMount() {
    this.props.getUserById(this.props.match.params.id);
    this.props.getPosts(this.props.match.params.id);
  }
  render() {
    const { name, email, phone } = this.props.user;
    const { posts, isLoading } = this.props;
    return (
      <div className='container-fluid'>
        <div className='row header'>
          <div className='col-md-3 my-auto'>
            <Link to='/'>
              <img
                src={require('../../assets/img/back.png')}
                alt='arrow back'
              />
            </Link>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-4 offset-md-4 row-img-profile  '>
            <img
              src={require('../../assets/img/img-user.png')}
              alt='user '
              className='img-profile'
            />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-4 offset-md-4 '>
            <h3 className='name-label'>{name}</h3>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-4 offset-md-4 name-label'>
            <h3 className='email-label'>{email}</h3>
          </div>
        </div>
        <div className='row my-3'>
          <div className='col-md-4 offset-md-4 name-label'>
            <span className='adress-label'>{phone}</span>
          </div>
        </div>
        <div className='row post-container justify-content-around'>
          {isLoading ? (
            // <div className='row justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='sr-only'>Loading...</span>
              {/* </div> */}
            </div>
          ) : (
            posts.map((post, key) => <Post post={post} key={key} />)
          )}
        </div>
      </div>
    );
  }
}
const mapSTP = state => ({
  isLoading: state.userReducer.isLoading,
  user: state.userReducer.user,
  posts: state.userReducer.posts
});
export default connect(mapSTP, { getUserById, getPosts })(Profile);
