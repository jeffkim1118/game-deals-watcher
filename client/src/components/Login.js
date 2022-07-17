import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login({setCurrentUser}){
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[loggedin, setLoggedinStatus] = useState();
    const loggingIn = {
        username,
        password
    }
    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loggingIn)
        })
        .then((r)=>{
            if(r.ok){
                r.json().then((user)=>setCurrentUser(user))
                navigate('/')
            }else{
                setLoggedinStatus(false)
            }
        })
        .catch(err => console.log(err))
        
    }

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {loggedin===false ? <p>Login failed! Please check your credentials again.</p> : null}
                <input className='username' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' type='username'></input>
                <input className='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password'></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}