import React from 'react';
import {Link} from 'react-router-dom';
import '../App.scss'

const Github = props => {
    console.log(props);
    return (
        <div className='Github'>
            <Link className='Linky'to='/'><button>Find Another Github User</button></Link>
            {props.e ? <h1>Github User: {props.name}</h1> : <h3>No User Found</h3>}
            { props.e && <img src={props.avatar}/> }
            { props.e && <p><strong>Username:</strong> {props.name ? props.name :<span>N/A</span>} </p> }
            { props.e && <p>About: {props.bio ? props.bio : <span>N/A</span>} </p> }
            { props.e && <p>Location: {props.location ? props.location : <span>N/A</span>} </p> }
            { props.e && <p>Number of Repos: {props.repos ? props.repos : <span>N/A</span>} </p> }
        </div>
    )
}

export default Github;
