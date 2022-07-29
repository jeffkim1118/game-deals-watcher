import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Memo from './Memo';

export default function WishList({currentUser, setCurrentUser}){
    const [games, setGames] = useState([]);
    const [memo, setSavedMemo] = useState();
    const [status, setStatus] = useState();
    const [priceLimit, setPriceLimit] = useState('');
    let navigate = useNavigate();

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
        fetch(`https://www.cheapshark.com/api/1.0/alerts?action=delete&email=${currentUser.email}&gameID=${game.gameID}`)
        .then((r)=>r.json())
        .then((x) => console.log(x))
        alert("Wishlist item removed!")
        // setDeleteStatus(true)
        navigate('/')
    }

    function setLimit(e, game){
        e.preventDefault();
        fetch(`https://www.cheapshark.com/api/1.0/alerts?action=set&email=${currentUser.email}&gameID=${game.gameID}&price=${priceLimit}`)
        .then((r)=>r.json())
        .then((x) => console.log(x))
        // setPriceLimitStatus(true);
        // alert(`Price alert has been set to`+ priceLimit + '!')
        navigate('/')
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
                <form onSubmit={(e)=>setLimit(e, game)}>
                    <label>Price Limit: </label>
                    $ <input className='alert-price' value={priceLimit} onChange={(e) => setPriceLimit(e.target.value)} placeholder='Set Price'/>
                    <button type="submit">Create Alert</button>
                </form>   
                <Memo game={game} setSavedMemo={setSavedMemo} memo={memo}/>
                <button onClick={()=>deleteGame(game)}>Remove game</button>
                </div>)
            }) : null}
        </div>
        </div>
    )
}