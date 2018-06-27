import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import UserItem from './components/userItem';

class App extends Component {
  constructor(props) {
    super(props);
    // Store users
    this.state = {
      users: [
        {id: 0, name: "Sneha", age: 35},
        {id: 1, name: "David", age: 42},
        {id: 2, name: "Padma", age: 50},
        {id: 3, name: "Raj", age: 55},
        {id: 4, name: "Rajdeep", age: 40}
      ]
    };

    this.removeUser = this.removeUser.bind(this);
  }
// Removing User
  removeUser(id) {
    this.setState({
        users: this.state.users.filter((user, index) => user.id !== id)
      });
  }
// Rendering Users
  render() {
    return (
      <div className="App">
        <div className="user-wrapper">
          <Header />
          <ul>
            {
              this.state.users.map((user) => {
                return <UserItem user={user} key={user.id} id={user.id} removeUser={this.removeUser}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
