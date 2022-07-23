import React, {useState} from "react"

export default function Profile({loggedInUser}) {
    const[first_name, setFirstName] = useState('')
    const[last_name, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    
    
    console.log(loggedInUser)

    // const prefill = {
    //     first_name: loggedInUser.first_name,
    //     last_name: loggedInUser.last_name,
    //     email: loggedInUser.email,
    //     password: loggedInUser.password
    // }

    // const { update, updateProfile } = useForm({
    //     defaultValues: prefill
    // });

    // const onSubmit = (data) => {
    //     fetch(`/user`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then((r)=>r.json())
    //     .then((x) => console.log(x))
    //     .catch(err => alert(err.message))
    // }


    // function updateProfile(e){
    //     e.preventDefault();
        
    // }

   

    return(
        
        <div className="profile-container">
            <div className="update" >
                <form className="profile-update-form"  >
                    <label>First Name:</label>
                    <input 
                        // ref={update}
                        type='input' 
                        className="first_name" 
                        value={first_name} 
                        onChange={(e)=>setFirstName(e.target.value)}
                    /><br/>
                    <label>Last Name:</label>
                    <input 
                        // ref={update} 
                        type='input' 
                        className="last_name"
                        value={last_name} 
                        onChange={(e)=>setLastName(e.target.value)}
                    /><br/>
                    <label>Email:</label>
                    <input 
                        // ref={update}
                        type='input' 
                        className="email" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                    /><br/>
                    <label>Password:</label>
                    <input 
                        // ref={update}
                        type='input' 
                        className="password" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                    /><br/>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}