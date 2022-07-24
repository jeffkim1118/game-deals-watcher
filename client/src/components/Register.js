import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({setCurrentUser}){
    const[first_name, setFirstName] = useState("")
    const[last_name, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[registeredStatus, setRegisteredStatus] = useState()

    let navigate = useNavigate();

    function handleRegister(e){
        e.preventDefault();
        const newUser = {
            first_name,
            last_name,
            email,
            username,
            password
        }

        if(newUser.first_name === "" || newUser.last_name==="" || newUser.email==="" || username==="" || password===""){
            setRegisteredStatus(false)
        }else{
            fetch(`/users`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser)
            })
            .then((r)=>{
                if(r.ok){r.json().then((loggedin)=>setCurrentUser(loggedin))}
                navigate('/')
            })
        }
    }

    return(
        <div>
            <form className="mb-3" onSubmit={handleRegister}>
                <h1>Register</h1>
                {registeredStatus===false? <div className="alert alert-danger" role="alert">Sign up failed, Please enter necessary info!</div> : null}
                <input className="form-control" id="floatingInputValue" placeholder='First name' value={first_name} onChange={(e)=>setFirstName(e.target.value)}></input>
                <input className="form-control" id="floatingInputValue" placeholder='Last name' value={last_name} onChange={(e)=>setLastName(e.target.value)}></input>
                <input className="form-control" id="floatingInputValue" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input className="form-control" id="floatingInputValue" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                <input className="form-control" id="floatingInputValue" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}