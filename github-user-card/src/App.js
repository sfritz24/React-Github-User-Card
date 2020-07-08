import React from 'react';
import './App.css';
import axios from 'axios';
import MyInfo from './Components/MyInfo';
import FollowersList from './Components/FollowersList';

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
      <div className='app'>
        <MyInfo myInfo={this.state.myInfo}/>
        <FollowersList followersList={this.state.followers}/>
      </div>
    );
  }
}

export default App;