import React from 'react';
import './userItem.css';

export default class UserItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

// Removing each User
  removeUser(id) {
    this.props.removeUser(id);
  }
// Rendering View or Updated View after Delete Operation
  render() {
    return (
      <div className="userWrapper">
        <button className="removeUser" onClick={(e)=> this.removeUser(this.props.id) }>remove</button>
        {this.props.user.name} - {this.props.user.age}
      </div>
    );
  }
}
