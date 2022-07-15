import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar({currentUser, setCurrentUser}){

    function handleLogoutClick(){
        fetch('/logout', {method:'DELETE'})
        .then((r)=>{
            if(r.ok){
                setCurrentUser(null);
            }
        })
    }

    return (
        <div>
            <header className="navigationHeader">
                <div className="nav">
                    {currentUser ? (
                        <div>
                            <Link className="link" to="/">Home</Link>           
                            <Link className="link" to="/">Browse</Link>
                            <Link className="link" to="/">Wishlist</Link>
                            <Link className="link" to="/profile">Profile</Link>
                            <button className='log_out_btn' onClick={handleLogoutClick}>Logout</button>
                        </div>
                    ) : (
                        <div>
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/browse">Browse</Link>
                            <Link className="link" to="/signup">Sign Up</Link>
                            <Link className="link" to="/login">Login</Link>
                            </div>
                    )}
                </div>
            </header>
        </div>
    )
}