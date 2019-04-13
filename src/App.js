import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-solid-svg-icons';
import {faGithub as faGithubRegular} from '@fortawesome/free-regular-svg-icons';
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
    if (e !== '') {
      this.setState({e : e.target.elements.username.value});
    } else {
      this.setState( {
        e : null
      })
    }
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
      .catch( err => {
        console.log(err);
        this.setState({
          e : null
        })
      })
  }


  render() {
    // console.log(this.state.e);
    return (
      <div className="App">
        <header className="App-header">
          {/* <FontAwesomeIcon icon={faGithub} size='5x'/>
          <FontAwesomeIcon icon={faGithubRegular} size='5x'/> */}
          <img className='github' src='http://iconsetc.com/icons-watermarks/flat-rounded-square-white-on-black/social-media/social-media_github/social-media_github_flat-rounded-square-white-on-black_512x512.png'/>
          <h1 className='App-title'>Got Github?</h1>
          <UserForm getUser={this.getUser} />
          {this.state.e && <img src={this.state.avatar}/> }
          { this.state.e && <p>Name: {this.state.name ? this.state.name :<span>N/A</span>} </p> }
          { this.state.e && <p>About: {this.state.bio ? this.state.bio : <span>N/A</span>} </p> }
          { this.state.e && <p>Location: {this.state.location ? this.state.location : <span>N/A</span>} </p> }
          { this.state.e && <p>Number of Repos: {this.state.repos ? this.state.repos : <span>N/A</span>} </p> }
        </header>
      </div>
    );
  }
}

export default App; 
