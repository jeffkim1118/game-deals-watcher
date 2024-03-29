import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({currentUser, setCurrentUser, setGames}){

    let navigate = useNavigate();

    function handleLogoutClick(){
        fetch('/logout', {
            method:'DELETE'
        })
        .then((r)=>{
            if(r.ok){
                setCurrentUser(null);
                navigate('/')
            }
        })
    }

    return (
        <div>
            <header className="navigationHeader">
                <div className="nav">
                    <Link className='link' to="/"><strong><span>GDWatcher</span></strong></Link>
                    {currentUser ? (
                        <div className='nav-links'>
                            <Link className="link" to="/" >Home</Link>           
                            <Link className="link" to="/browse">Browse</Link>
                            <Link className="link" to="/wishlist">Wishlist</Link>
                            <Link className="link" to="/profile">Profile</Link>                 
                            <p className='profile-username'>{currentUser.username}</p>
                            <button className='log_out_btn' onClick={handleLogoutClick}>Logout</button>
                        </div>
                    ) : (
                        <div className='nav-links'>
                            <Link className="link" to="/" >Home</Link>
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