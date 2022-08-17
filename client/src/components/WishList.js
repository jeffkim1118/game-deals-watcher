import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Memo from './Memo';
// import PriceLimit from './PriceLimit';
import GameDeals from './GameDeals';

export default function WishList({currentUser, setCurrentUser}){
    const [games, setGames] = useState([]);
    const [memo, setSavedMemo] = useState();
    const [status, setStatus] = useState();
    
    let navigate = useNavigate();
   
    useEffect(()=>{ 
        if(currentUser){
            fetch(`/users/${currentUser.id}/games`)
            .then((r) => r.json())
            .then((x) => setGames(x)) 
        }
    },[currentUser])

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
        navigate('/wishlist')
    }

    return (
        <div>
            <h1>Your WishList:</h1>
            {status === true ? <div className="alert alert-success" role="alert">Game Removed</div> : null}
        <div className='wishlist_container'> 
            {games ? games.map((game)=>{
                console.log(game)
                return (<div key={game.id} className="gameCard">
                <br/><img src={game.thumb} className="img-thumbnail" alt='thumbnail'/>
                <p>{game.title}</p>
                <p>Retail Price: ${game.retailPrice}<br/>Historically Cheapest Price: <strong>${game.cheapestPrice}</strong></p>
                {/* <PriceLimit game={game} setPriceLimit={setPriceLimit} setLimit={setLimit} priceLimit={priceLimit}/> */}
                <Memo currentUser={currentUser} game={game} setSavedMemo={setSavedMemo} memo={memo}/>
                <GameDeals gameID={game.gameID}/>
                <button id="wishListBtn" onClick={(e)=>deleteGame(game)}>Remove game</button>
                </div>)
            }) : null}
        </div>
        </div>
    )
}