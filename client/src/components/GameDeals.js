import React, { useEffect, useState } from "react";

function GameDeals({gameID}){
    const [gameDeals, setGameDeals] = useState();

    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
        .then((r) => r.json())
        .then((deals) => setGameDeals(deals))
    },[])
    
    function redirectToDeal(e, gameDealID){
        e.preventDefault();
        window.open(`https://www.cheapshark.com/redirect?pageSize=10&dealID=${gameDealID}`, '_blank');
        return null;
    }
    return(
        <div>
           <button onClick={(e)=>redirectToDeal(e, gameDeals.deals[0].dealID)}>Go to the cheapest deal!</button>
        </div>
    )
}
export default GameDeals;