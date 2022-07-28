import React, { useEffect, useState } from 'react';
import Memo from './Memo';

export default function WishList({currentUser, setCurrentUser}){
    const [games, setGames] = useState([]);
    const [memo, setSavedMemo] = useState();
    const [status, setStatus] = useState();

    useEffect(()=>{ 
        if(currentUser){
            fetch(`/users/${currentUser.id}/games`)
            .then((r) => r.json())
            .then((x) => setGames(x)) 
        }else{
            setCurrentUser(currentUser)
        }
    },[])

    const deleteGame = (game) => {
        fetch(`/users/${currentUser.id}/games/${game.id}`, {
            method: "DELETE",
            headers: { 'Content-Type':'application/json'}
        })
        .then((r)=>r.json())
        .then((x)=>console.log(x))
        setStatus(true);
        setCurrentUser(currentUser)
        if(currentUser){
            fetch(`/users/${currentUser.id}/games`)
            .then((r) => r.json())
            .then((x) => setGames(x)) 
        }
    }
    
    return (
        <div>
            <h1>Your WishList:</h1>
            {status === true ? <div className="alert alert-success" role="alert">Game Removed</div> : null}
        <div className='wishlist_container'> 
            {games ? games.map((game)=>{
                return (<div key={game.id} className="gameCard">
                <br/><img src={game.thumb} className="img-thumbnail" alt='thumbnail'/>
                <p>{game.title}</p>
                <p>Retail: $<s>{game.retailPrice}</s><br/>Cheapest: <strong>${game.cheapestPrice}</strong></p>   
                <Memo game={game} setSavedMemo={setSavedMemo} memo={memo}/>
                <button onClick={()=>deleteGame(game)}>Remove game</button>
                </div>)
            }) : null}
        </div>
        </div>
    )
}