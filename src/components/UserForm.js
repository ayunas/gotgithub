import React from 'react';
import '../App.scss';


const Userform = (props) => {
    console.log(props);
    return (
        <div>
            <img className='github' src='http://iconsetc.com/icons-watermarks/flat-rounded-square-white-on-black/social-media/social-media_github/social-media_github_flat-rounded-square-white-on-black_512x512.png'/>
            <h3 className='App-title'>Got Github?</h3>
            <form onSubmit={props.getUser} >
                <input name='username' placeholder='GitHub Username'/>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Userform;