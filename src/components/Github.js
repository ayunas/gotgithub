import React from 'react';
import {Link} from 'react-router-dom';
import '../App.scss'

const Github = props => {
    console.log(props);
    return (
        <div className='Github'>
            <Link className='Linky'to='/'><button>Find Another Github User</button></Link>
            <h1>Github Info: {props.name}</h1>
            { props.e && <img src={props.avatar}/> }
            { props.e && <p>Name: {props.name ? props.name :<span>N/A</span>} </p> }
            { props.e && <p>About: {props.bio ? props.bio : <span>N/A</span>} </p> }
            { props.e && <p>Location: {props.location ? props.location : <span>N/A</span>} </p> }
            { props.e && <p>Number of Repos: {props.repos ? props.repos : <span>N/A</span>} </p> }
        </div>
    )
}

export default Github;
