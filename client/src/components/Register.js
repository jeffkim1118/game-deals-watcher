import React, { useState } from 'react';

export default function Register({setCurrentUser}){
    const[first_name, setFirstName] = useState('')
    const[last_name, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    function handleRegister(e){
        e.preventDefault();
        const newUser = {
            first_name,
            last_name,
            email,
            phone,
            username,
            password
        }
        if(newUser.phone===''){
            fetch(`/users`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    first_name, 
                    last_name, 
                    email, 
                    phone:'', 
                    username, 
                    password
                })
            })
            .then((r)=>{
                if(r.ok){r.json().then((loggedin)=>setCurrentUser(loggedin))}
            })
        }else{
            fetch(`/users`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser)
            })
            .then((r)=>{
                if(r.ok){r.json().then((loggedin)=>setCurrentUser(loggedin))}
            })
        }
    }

    return(
        <div>
            <form onSubmit={handleRegister}>
                <input placeholder='First name' value={first_name} onChange={(e)=>setFirstName(e.target.value)}></input>
                <input placeholder='Last name' value={last_name} onChange={(e)=>setLastName(e.target.value)}></input>
                <input placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input placeholder='Phone (Optional)' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                <input placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}