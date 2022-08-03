import React, { useState } from "react";

function PriceLimit({game, setPriceLimit, setLimit}){
    const[price, setPrice] = useState()
    
    return(
        <div>
            <form onSubmit={(e)=>setLimit(e, game)}>
                <label>Price Limit: </label>
                $ <input className='alert-price' value={price} onChange={(e) => setPriceLimit(e.target.value)} placeholder='Set Price'/>
                <button type="submit">Create Alert</button>
            </form>
        </div>
    )
}
export default PriceLimit;