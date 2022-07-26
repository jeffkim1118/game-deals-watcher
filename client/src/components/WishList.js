import React, { useEffect, useState } from 'react';

export default function WishList({currentUser}){
    // const[wishListItems, setWishListItems] = useState([])
    // // const loggedinUser = currentUser.id
    // console.log(user)

    // useEffect(()=>{
    //     fetch(`/games`)
    //     .then((r)=> r.json())
    //     .then((x)=>setWishListItems(x))
    //     .catch((error) => console.log(error))
    // },[])

    console.log(currentUser)

    const deleteGame = (game) => {
        fetch(`/games/${game.id}`, {
            method: "DELETE",
            headers: { 'Content-Type':'application/json'}
        })
        .then((r)=>r.json())
        .then((x)=>console.log(x))
    }
    console.log(wishListItems)
    return (
        <div>
            {/* {currentUser.games.map((game)=>{
                return <p>{game.title}</p>
            })} */}
        </div>
    )
}