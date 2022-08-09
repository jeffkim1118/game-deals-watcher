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
        // const data = new FormData();

        // data.append("user[first_name]", e.target.first_name.value);
        // data.append("user[last_name]", e.target.first_name.value);
        // data.append("user[email]", e.target.first_name.value);
        // data.append("user[username]", e.target.first_name.value);
        // data.append("user[password]", e.target.first_name.value);
        // data.append("user[avatar]", e.target.avatar.files[0])

        // submitToAPI(data);

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
        <div className='register-form-container'>
            {/* <form className="mb-3" onSubmit={(e)=>handleRegister(e)}>
                <h1>Register</h1>
                {registeredStatus===false? <div className="alert alert-danger" role="alert">Sign up failed, Please enter necessary info!</div> : null}   
                Profile Avatar: <input type="file" id="avatar" name="avatar" /><br/>                
                <input className="form-control" name="first_name" id="first_name"></input><br/>
                <input className="form-control" name="last_name" id="last_name"></input><br/>
                <input className="form-control" type="email" name="email" id="email"></input><br/>
                <input className="form-control" name="username" id="username"></input><br/>
                <input className="form-control" type="password" name="password" id="password"></input><br/>
                <button type='submit'>Submit</button>
            </form> */}


            <form className="mb-3" onSubmit={handleRegister}>
                <h1>Register</h1>
                {registeredStatus===false? <div className="alert alert-danger" role="alert">Sign up failed, Please enter necessary info!</div> : null}                 
                <input className="form-control" placeholder='First name' value={first_name} onChange={(e)=>setFirstName(e.target.value)}></input><br/>
                <input className="form-control"  placeholder='Last name' value={last_name} onChange={(e)=>setLastName(e.target.value)}></input><br/>
                <input className="form-control" type="email" placeholder='Email (Please enter a valid email)' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                <input className="form-control"  placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}></input><br/>
                <input className="form-control" type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}