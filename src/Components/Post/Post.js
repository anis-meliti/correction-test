import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className='col-md-8 offset-2 my-4'>
      <div className='card' style={{ width: '50rem' }}>
        <img
          src={require('../../assets/img/login-image.jpg')}
          alt='fixed'
          className='card-img-top'
        />
        <Link to={`/posts/${id}`}>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{body}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
