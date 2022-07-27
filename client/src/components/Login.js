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
            
            <form className="mb-3" onSubmit={handleSubmit}>
                <h1>Login</h1>
                {loggedin===false ? <div className="alert alert-danger" role="alert">Login Failed! Please check your credential again.</div> : null}           
                <input type="username" className='form-control' id="floatingInputValue" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' ></input><br/>         
                <input type="password" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' ></input><br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}