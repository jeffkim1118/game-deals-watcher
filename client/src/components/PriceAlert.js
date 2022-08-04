import React, { useEffect, useState } from "react";

function PriceAlert({wishListGameID}){
    const [wishListDeal, setDeals] = useState();

    useEffect(() => {
        if(wishListGameID){
        fetch(`https://www.cheapshark.com/api/1.0/games?id=${wishListGameID}`)
        .then((r) => r.json())
        .then((deals) => setDeals(deals))}
    },[])
    
    console.log(wishListDeal)
    return(
        <div className="home-alert">{wishListDeal ? <p className="alert-info">{wishListDeal.info.title} is available at ${wishListDeal.deals[0].price}</p>: null}</div>
    )
}
export default PriceAlert;