import React, { useState, useEffect } from 'react';

function Browse({currentUser}) {
    const [gameDealsList, setGameDealsList] = useState([]);
    const [gameTitle, setTitle] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    const defaultURL = `https://www.cheapshark.com/api/1.0/deals?`

    useEffect(()=>{
        fetch(defaultURL)
        .then((r)=>r.json())
        .then((gameList)=> setGameDealsList(gameList))
    },[])

    console.log(gameDealsList)

    function handleRedirect(e, dealID){
        e.preventDefault();
        window.open(`https://www.cheapshark.com/redirect?pageSize=10&dealID=${dealID}`, '_blank');
        return null;
    }

    return(
        <div className="container-fluid">
            <h1>Browse</h1>
            <h4>Filter:</h4>
            <input placeholder='Title' value={gameTitle} onChange={(e)=>setTitle(e.target.value)}></input>
            <span>Price Range $:</span>
            <input placeholder='Min' value={minPrice} onChange={(e)=>setMinPrice(e.target.value)}></input>
            <input placeholder='Max' value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)}></input>
            <br/><br/>

            {gameDealsList.map((game) => 
            <div className="container" key={game.dealID}>
                <div className="row">
                    <div className="col">
                        <img src={game.thumb} className="img-thumbnail" alt='thumbnail'/>
                    </div>
                    <div className="col">
                        <strong><p>{game.title}</p></strong>
                    </div>
                    <div className="col">
                        <span><s>${game.normalPrice}</s></span><br/>
                        <span>${game.salePrice}</span><br/>
                        <span>{Math.round(game.savings)}% Off</span>
                    </div>
                    <div className="col">
                        <button onClick={(e)=>handleRedirect(e, game.dealID)}>Visit Store</button>
                    </div>
                    <div className="col">
                        {currentUser ? <button>Add to wishlist</button> : null}                   
                    </div>
                </div><br/>
            </div>
            )}
            
        </div>
    )
}
export default Browse;