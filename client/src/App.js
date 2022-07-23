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
  

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then((user)=>setCurrentUser(user))
      }
    })
  },[])


  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser} setResult={setResult}/> } exact/>
        <Route path="/browse" element={<Browse currentUser={currentUser} setListItem={setListItem}/>}/>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />}/>
        <Route path="/signup" element={<Register setCurrentUser={setCurrentUser} />}/>
        <Route path='/wishlist' element={<Wishlist wishListItem={wishListItem} />}/>
        <Route path="/profile" element={<Profile currentUser={currentUser} />}/>
        <Route path="/searchresult" element={<SearchResult searchResult={searchResult} currentUser={currentUser} />}/>
      </Routes>

    </div>
  );
}

export default App;
