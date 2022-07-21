export default function Profile() {
    const[first_name, setFirstName] = useState('')
    const[last_name, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[updatedStatus, setUpdatedStatus] = useState()

    function updateProfile(e){
        e.preventDefault();
        fetch(`/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({first_name, last_name, email, password})
        })
        .then((r)=>r.json())
        .then((x) => console.log(x))
    }

    return(
        <div className="profile-container">
            <div className="update">
                <form className="profile-update-form" onSubmit={updateProfile}>
                    <input type='input' className="first_name" value={first_name} onChange={(e)=>setFirstName(e.target.value)}/>
                    <input type='input' className="last_name" value={last_name} onChange={(e)=>setLastName(e.target.value)}/>
                    <input type='input' className="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='input' className="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    )
}