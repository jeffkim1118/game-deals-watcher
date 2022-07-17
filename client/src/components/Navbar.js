import React from 'react';
import { Link } from "react-router-dom";
import Search from "./Search"

export default function Navbar({currentUser, setCurrentUser}){


    function handleLogoutClick(){
        fetch('/logout', {
            method:'DELETE'
        })
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
                        <div className='nav-links'>
                            <Link className="link" to="/" >Home</Link>           
                            <Link className="link" to="/browse">Browse</Link>
                            <Link className="link" to="/whishlist">Wishlist</Link>
                            <Link className="link" to="/profile">Profile</Link>
                            <Search />
                            <p className='profile-username'>{currentUser.username}</p>
                            <button className='log_out_btn' onClick={handleLogoutClick}>Logout</button>
                        </div>
                    ) : (
                        <div className='nav-links'>
                            <Link className="link" to="/" >Home</Link>
                            <Link className="link" to="/browse">Browse</Link>
                            <Link className="link" to="/signup">Sign Up</Link>
                            <Link className="link" to="/login">Login</Link>
                            <Search />
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}