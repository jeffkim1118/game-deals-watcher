import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes,  Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';
import Search from './components/Search';
import Browse from './components/Browse';
import SearchResult from './components/SearchResult';

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
        <Route path="/" element={<Home currentUser={currentUser} setResult={setResult}/> }/>
        <Route path="/browse" element={<Browse />}/>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />}/>
        <Route path="/signup" element={<Register setCurrentUser={setCurrentUser} />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/searchresult" element={<SearchResult searchResult={searchResult}/>}/>
      </Routes>
    </div>
  );
}

export default App;
