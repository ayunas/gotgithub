import React from 'react';
import '../App.scss';


const Userform = (props) => {
    
    return (
        <form onSubmit={props.getUser} >
            <input name='username' placeholder='GitHub Username'/>
            <button>Submit</button>
        </form>
    )
}


export default Userform;