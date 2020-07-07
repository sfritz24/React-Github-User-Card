import React from 'react';
import './App.css';
import {v4 as uuid} from 'uuid';
import axios from 'axios';

class App extends React.Component {

  state = {
    myInfo: [],
    followers: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/sfritz24')
      .then(response =>{
        this.setState({
          myInfo: response.data
        })
      })
      .catch(error =>{
        console.log('this is the error for myInfo:', error)
      })

    axios.get('https://api.github.com/users/sfritz24/followers')
      .then(response =>{
        this.setState({
          followers: response.data
        })
      })
      .catch(error =>{
        console.log('this is the error for followers:', error)
      })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;