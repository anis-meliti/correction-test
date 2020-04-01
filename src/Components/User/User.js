import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div className='col-md-4 my-3'>
      <div className='card' style={{ width: '18rem' }}>
        <img
          src={require('../../assets/img/ryan.jpg')}
          alt='profile'
          className='card-img-top'
        />
        <Link to={`/user/${id}`}>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{email}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
