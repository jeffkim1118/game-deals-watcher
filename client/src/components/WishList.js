import React, { useEffect, useState } from 'react';
import Memo from './Memo';

export default function WishList({currentUser, setCurrentUser}){
    const [games, setGames] = useState();
    const [memo, setSavedMemo] = useState();
    
    useEffect(()=>{
        fetch(`/users/${currentUser.id}/games`)
        .then((r) => r.json())
        .then((x) => setGames(x)) 
    },[])

    console.log(games)

    const deleteGame = (game) => {
        fetch(`/users/${currentUser.id}/games/${game.id}`, {
            method: "DELETE",
            headers: { 'Content-Type':'application/json'}
        })
        .then((r)=>r.json())
        .then((x)=>console.log(x))
    }
    
    console.log(memo)
    return (
        <div className='wishlist_container'>
            {games ? games.map((game)=>{
                {console.log(game)}
                return <div key={game.id}>
                <img src={game.thumb} className="img-thumbnail" alt='thumbnail'/>
                <p>{game.title}</p>
                <p>Retail: $<s>{game.retailPrice}</s><br/>Cheapest: <strong>${game.cheapestPrice}</strong></p>
                <p>Memo: {game.memos ? game.memos.map((memo)=>{
                    return <span key={memo.id}>{memo.content}<br/></span>
                }):null}</p>
                <Memo game={game} setSavedMemo={setSavedMemo}/>
                <button onClick={()=>deleteGame(game)}>Remove game</button>
                </div>
            }) : null}
        </div>
    )
}