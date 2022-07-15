import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes,  Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [currentUser, setCurrentUser] = useState();

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
        <Route path="/" />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />}/>
        <Route path="/signup" element={<Register setCurrentUser={setCurrentUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
