import React, {useState} from "react"

export default function Profile({currentUser, setCurrentUser}) {
    const[first_name, setFirstName] = useState("")
    const[last_name, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[isShown, setIsShown] = useState(false)
    const username = currentUser.username;

    function handleUpdate(e){
        e.preventDefault();       
        const userData = {
            first_name,
            last_name,
            email,
            username,
            password
        }
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
        })
        .then((r)=>r.json())
        .then((x) => setCurrentUser(x))
        .catch(err => console.log(err))
        setIsShown(false)
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setIsShown(current => !current)
        setFirstName(currentUser.first_name)
        setLastName(currentUser.last_name)
        setEmail(currentUser.email)
        setPassword(currentUser.password_digest)
    }

    return(
        <div className="profile-container">
            <div>
                <p>Username: {currentUser.username}</p>
                <p>Last Name: {currentUser.last_name}</p>
                <p>First Name: {currentUser.first_name}</p>
                <p>Email: {currentUser.email}</p>
                <p>Password: ************</p>
                <button onClick={(e)=>handleUpdateProfile(e)}>Change profile info</button>
            </div>
            {isShown && (
            <div className="update" >
                <form className="profile-update-form" onSubmit={handleUpdate} >
                    <label>First Name:</label>
                    <input                       
                        type='input' 
                        className="first_name" 
                        value={first_name} 
                        onChange={(e)=>setFirstName(e.target.value)}
                    /><br/>
                    <label>Last Name:</label>
                    <input                        
                        type='input' 
                        className="last_name"
                        value={last_name} 
                        onChange={(e)=>setLastName(e.target.value)}
                    /><br/>
                    <label>Email:</label>
                    <input                       
                        type='input' 
                        className="email" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                    /><br/>
                    <label>Password:</label>
                    <input 
                        type='input' 
                        className="password" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                    /><br/>
                    <button type="submit">Update</button>
                </form>
            </div>
            )}
        </div>
    )
}