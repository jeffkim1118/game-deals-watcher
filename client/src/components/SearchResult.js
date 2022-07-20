import React, { useState } from 'react';

function SearchResult({searchResult, currentUser}){
    const[deals, setDeals] = useState();
    const[isShown, setShown] = useState(false);

    console.log(deals)

    function viewDeals(e, gameID){
        e.preventDefault();
        fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
        .then((r)=>r.json())
        .then(x => setDeals(x.deals))
    }

    return(
        <div >
            {searchResult ? 
            <div>
                {searchResult.map((x) => <div className="result-container" key={x}><div>
                    <img className='thumbnail_pic' src={x.thumb} alt='game-img'/>
                    <p>{x.external}</p>
                    <span>Cheapest Price: ${x.cheapest}</span><br/>
                    <button className='btn btn-primary' onClick={(e)=>{viewDeals(e, x.gameID); setShown(current => !current)}}>View Deals</button>
                    {isShown && (
                        <div>Hello</div>
                    )}
                    {currentUser ? <button>Add to wishlist</button>:null}
            </div></div>)}</div> 
            : <div className="alert alert-warning" role="alert">No Result Found</div>}
        </div>
    )
}
export default SearchResult;