import React, { useState, useEffect } from 'react';

export default function Topdeal(){
    const[topDealsList, setTopDeals] = useState([])

    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=35&pageSize=20`)
        .then((r) => r.json())
        .then(topDealsGames => setTopDeals(topDealsGames))
    }, [])
   
    const result = topDealsList.filter(checkTopDeals);

    function checkTopDeals(topDealsList){
        if(topDealsList.metacriticScore > "70"){
            return topDealsList 
        }
    }

    return(
        <div>
            {result.map((singleDeal)=> {
                return (
                    <div>
                        <div className="single_game" key={result}>
                            <img src={singleDeal.thumb} alt="Game-img"/><br/>
                            <span>{singleDeal.title}</span><br/>
                            <span>{Math.round(singleDeal.savings)}% Off</span><br/>
                            <span>Price: <s>${singleDeal.normalPrice}</s> ${singleDeal.salePrice}</span><br/>
                            <span>Meta Critics Score: {singleDeal.metacriticScore}</span>
                        </div>                    
                    </div>
                )
            })}
        </div>
    )
}