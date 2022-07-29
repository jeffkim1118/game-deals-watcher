import React, { useEffect, useState } from "react";

export default function StoreFinder({storeID}){
    const[stores, setStores] = useState([]);
    const defaultImgAddress = `https://www.cheapshark.com/`

    useEffect(()=>{
        fetch(`https://www.cheapshark.com/api/1.0/stores`)
        .then((r) => r.json())
        .then((store)=>setStores(store))
    },[])


    return(
        <div>
            {stores.map((st) => {
        if(st.storeID === storeID){
            return <div key={storeID}>
                <img className="storeLogo" src={defaultImgAddress+st.images.logo} alt="store-logo"/>
                <p>{st.storeName}</p>
                </div>
        }
        return null
    })}
        </div>
    )
}