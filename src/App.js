import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import UserForm from './components/UserForm';

//https://api.github.com/users/ayunas

class App extends Component {
    constructor() {
      super();

      this.state = {
        repos: null,
        name: null,
        bio: null,
        avatar: null,
        e: null
      }

    }


  getUser = (e) => {
    e.preventDefault();
    this.setState({e : e.target.elements.username.value});
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.elements);
    // console.log(e.target.elements.username);

    const user = e.target.elements.username.value;
    console.log(user);
    console.log('a username has been entered');

    axios.get(`https://api.github.com/users/${user}`)
      .then( res => {
        console.log(res.data);
        this.setState({
          repos : res.data.public_repos,
          name : res.data.name,
          bio: res.data.bio,
          location: res.data.location,
          avatar: res.data.avatar_url
        })
      })
  }


  render() {
    console.log(this.state.e);
    return (
      <div className="App">

        <header className="App-header">
          <h1 className='App-title'>Got Github?</h1>
          <UserForm getUser={this.getUser} />
            <img src={this.state.avatar} /> 
            { this.state.name ? <p>Name: {this.state.name} </p> : <small><em>Name : Unknown</em></small> }
            { this.state.bio ? <p>About: {this.state.bio} </p> : <small><em>Description Unavailable</em></small> }
            { this.state.location ? <p>Location: {this.state.location} </p> : <small><em>Location: Unknown</em></small> }
            { this.state.repos ? <p>Number of Repos: {this.state.repos} </p> : <small><em>Repos: N/A</em></small>}
        </header>
      </div>
    );
  }
}

export default App; 
