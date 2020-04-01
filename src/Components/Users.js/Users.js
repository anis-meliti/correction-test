import React, { Component } from 'react';
import User from '../User/User';
import { connect } from 'react-redux';

import { getUsers } from '../../JS/actions/actions';
class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users, isLoading } = this.props;
    console.log('Users -> render -> userList', users);
    return isLoading ? (
      <div className='row justify-content-md-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    ) : (
      <div className='row'>
        {users.map((user, key) => (
          <User user={user} key={key} />
        ))}
      </div>
    );
  }
}
const mapSTP = state => ({
  isLoading: state.userReducer.isLoading,
  users: state.userReducer.userList
});
export default connect(mapSTP, { getUsers })(Users);
