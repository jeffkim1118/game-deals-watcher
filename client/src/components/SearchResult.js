import React from 'react';

function SearchResult({searchResult, currentUser}){
    // const[deals, setDeals] = useState();
    // const[isShown, setShown] = useState(false);

    // function viewDeals(e, gameID){
    //     e.preventDefault();
    //     fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
    //     .then((r)=>r.json())
    //     .then(x => setDeals(x.deals))
    //     setShown(current => !current)
    // }

    function saveData(game){ 
        const dataForWishlist = {
        title:game.external,
        gameID:game.gameID,
        retailPrice:game.normalPrice,
        cheapestPrice:game.cheapest,
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
            }
        })
        .catch((error)=>console.log(error))
    }

    return(
        <div>
            <h1>Your Search Result</h1>
            {searchResult ?            
            <div className='search-result'>              
                {searchResult.map((game) => <div className="result-container" key={game.gameID}>
                    <div>
                    <img className='thumbnail_pic' src={game.thumb} alt='game-img'/>
                    <p>{game.external}</p>
                    <span>Cheapest Price: ${game.cheapest}</span><br/>
                    {/* <button className='btn btn-primary' onClick={(e)=>{viewDeals(e, game.gameID)}}>View Deals</button> */}
                    {/* {isShown && (
                        // (deals.map((deal)=>{return <div>
                        //     <p>{deal.price}</p>
                        // </div>
                        // }))
                        <div>Hello</div>
                    )} */}
                    {currentUser ? <button onClick={()=>saveData(game)}>Add to wishlist</button>:null}
                    </div>
                </div>)}           
            </div> 
            : <div className="alert alert-warning" role="alert">No Result Found</div>}
        </div>
    )
}
export default SearchResult;