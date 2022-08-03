import React, { useEffect, useState } from "react";

function PriceAlert({wishListGameID}){
    const [deals, setDeals] = useState();

    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/games?ids=${wishListGameID}`)
        .then((r) => r.json())
        .then((deals) => setDeals(deals))
    },[])
    
    console.log(deals)
    return(
        <div>{}</div>
    )
}
export default PriceAlert;