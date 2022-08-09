import React, { createContext, useState } from "react"
// import AvatarForm from "./AvatarForm";
// import LatestA from "./LatestA";
import ProfilePicture from "./ProfilePicture";

export const ProfileContext = createContext(null)

function Profile({currentUser, setCurrentUser}) {
    const[first_name, setFirstName] = useState("");
    const[last_name, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[isShown, setIsShown] = useState(false);
    const[updatedStat, setStatus] = useState(false);
    
    function handleUpdate(e){
        e.preventDefault();
        if (password === ''){
            alert("Please enter a new password!")
        }else{
            const username = currentUser.username;
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
            setStatus(true)
            }
        }
       
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setIsShown(current => !current)
        setFirstName(currentUser.first_name)
        setLastName(currentUser.last_name)
        setEmail(currentUser.email)
    }

    // const [latestAvatar, setLatestAvatar] = useState(ProfileContext);
    return(
        <div className="profile-container">
            {updatedStat === true ? <div className="alert alert-success" role="alert">Profile updated!</div> : null}
            {currentUser ? <div className="profile-info"> 
                {/* <ProfileContext.Provider value={{latestAvatar, setLatestAvatar}}>           */}
                <div>
                <ProfilePicture currentUser={currentUser} />
                {/* <LatestA currentUser={currentUser}/> */}
                {/* <AvatarForm currentUser={currentUser}/> */}
                </div>
                {/* </ProfileContext.Provider>  */}

                <div>
                    <p>Username: {currentUser.username}</p>
                    <p>Last Name: {currentUser.last_name}</p>
                    <p>First Name: {currentUser.first_name}</p>
                    <p>Email: {currentUser.email}</p>
                    <p>Password: ************</p>
                    <button onClick={(e)=>handleUpdateProfile(e)}>Change profile info</button>
                </div>
            </div>: null }
            
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
                    <label>New Password Required:</label>
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
export default Profile;