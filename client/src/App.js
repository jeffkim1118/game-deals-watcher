import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes,  Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile';
import Home from './components/Home';
import Browse from './components/Browse';
import SearchResult from './components/SearchResult';
import Wishlist from './components/WishList'

function App() {
  const [currentUser, setCurrentUser] = useState();  
  const [searchResult, setResult] = useState();
  const [games, setGames] = useState([])
 
  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then((user)=>setCurrentUser(user))
      }
    }) 
  },[])

  useEffect(()=>{ 
    if(currentUser){
        fetch(`/users/${currentUser.id}/games`)
        .then((r) => r.json())
        .then((x) => setGames(x)) 
    }else{
        setCurrentUser(currentUser)
    }
},[])

  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} setGames={setGames}/>
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser} setResult={setResult} setGames={setGames} games={games}/>}/>
        <Route path="/browse" element={<Browse currentUser={currentUser} />}/>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
        <Route path="/signup" element={<Register setCurrentUser={setCurrentUser} />}/>
        <Route path='/wishlist' element={<Wishlist currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
        <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path="/searchresult" element={<SearchResult searchResult={searchResult} currentUser={currentUser} />}/>
      </Routes>   
    </div>
  
  );
}

export default App;
