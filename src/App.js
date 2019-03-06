import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import UserOutputStatic from './UserOutputStatic/UserOutputStatic';

class App extends Component {
  state = {
    username: 'Julius Caesar'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <div>
      <UserInput 
      changed={this.usernameChangedHandler}
      currentName={this.state.username} 
      />
      <UserOutput userName={this.state.username} />
      <UserOutput userName={this.state.username} />
      <UserOutputStatic userName="Nate" />
      </div>
    );
  }
}

export default App;
