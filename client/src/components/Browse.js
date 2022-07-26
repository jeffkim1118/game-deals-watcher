import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { debounce } from './utils';
import StoreFinder from './StoreFinder';

function Browse({currentUser}) {
    const [gameDealsList, setGameDealsList] = useState([]);
    const [gameTitle, setTitle] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    
    // const [savedtitle, setSaveTitle] = useState('');
    // const [savedGameID, setSaveGameID] = useState('');
    // const [savedRetailed, setSaveRetailed] = useState('');
    // const [savedCheapest, setSaveCheapest] = useState('');
    // const [savedThumb, setSaveThumb] = useState('');
    const [addedStatus, setStatus] = useState(false);


    const fetchDeals = useCallback((queryObject) => {
        const url = new URL(`https://www.cheapshark.com/api/1.0/deals?`);

        for(const [key, value] of Object.entries(queryObject)){
            if(value) url.searchParams.append(key, value);
        }
        return fetch(url)
        .then((r)=>r.json())
        .then((gameList)=> setGameDealsList(gameList));
    }, []);

    
    // It is to prevent API from crashing due to excessive amount of requests.
    const fetchDealsDebounced = useMemo(() => {
        // So API call will not be triggered until 400ms passed since last
    // action that may trigger api call
        return debounce(fetchDeals, 400);
    }, [fetchDeals])

    useEffect(()=>{
        fetchDeals({ title: gameTitle, upperPrice: maxPrice})
    },[fetchDealsDebounced, gameTitle, maxPrice]);


    function handleRedirect(e, dealID){
        e.preventDefault();
        window.open(`https://www.cheapshark.com/redirect?pageSize=10&dealID=${dealID}`, '_blank');
        return null;
    }

    function saveData(game){ 
        console.log(game)
        // setSaveTitle(game.title);
        // setSaveGameID(game.gameID);
        // setSaveRetailed(game.normalPrice);
        // setSaveCheapest(game.salePrice);
        // setSaveThumb(game.thumb);
        const dataForWishlist = {
        title:game.title,
        gameID:game.gameID,
        retailPrice:game.normalPrice,
        cheapestPrice:game.salePrice,
        thumb:game.thumb,
        }
        console.log(dataForWishlist)
        
        
        fetch(`/games`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(dataForWishlist)
        })
        .then((r)=>{
            if(r.ok){
                r.json().then((x)=>console.log(x))
                setStatus(true)
            }
        })
        .catch((error)=>console.log(error))
    }

    
    return(
        <div className="container-fluid">         
            <h1>Browse</h1>
            <h4>Filter:</h4>
            <input placeholder='Enter a Title' value={gameTitle} onChange={(e)=>setTitle(e.target.value)}></input>
            <span>Max Price $:</span>
            <input type="range" className="price-filter" min="0" max="70" value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>${maxPrice}</span>
            <br/><br/>

            {gameDealsList ? gameDealsList.map((game) => 
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
                        <StoreFinder storeID={game.storeID}/>
                        <button onClick={(e)=>handleRedirect(e, game.dealID)}>Visit Store</button>
                    </div>
                    <div className="col">
                        {currentUser ? <button onClick={()=>saveData(game)}>Add to wishlist</button> : null}                   
                    </div>
                </div><br/>
            </div>
            ) : <h1>No Result Found</h1>}          
        </div>
    )
}
export default Browse;