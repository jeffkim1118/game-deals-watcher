import React, { useState } from 'react';

export default function Login({setCurrentUser}){
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const loggingIn = {
        username,
        password
    }

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
            }else{
                
            }
        })
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input className='username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                <input className='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}