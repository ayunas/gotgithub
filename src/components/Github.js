import React from 'react';

const Github = props => {
    console.log(props);
    return (
        <div>
            <h1>Github Info for {props.name}</h1>
            { props.e && <img src={props.avatar}/> }
            { props.e && <p>Name: {props.name ? props.name :<span>N/A</span>} </p> }
            { props.e && <p>About: {props.bio ? props.bio : <span>N/A</span>} </p> }
            { props.e && <p>Location: {props.location ? props.location : <span>N/A</span>} </p> }
            { props.e && <p>Number of Repos: {props.repos ? props.repos : <span>N/A</span>} </p> }
        </div>
    )
}

export default Github;
