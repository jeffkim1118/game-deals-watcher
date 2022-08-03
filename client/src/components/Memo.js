import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Memo({game, setSavedMemo}) {
    const[init_memo, setMemo] = useState()
    let navigate = useNavigate();

    function handleMemoSubmit(e){
        e.preventDefault();
        fetch(`/games/${game.id}/memos`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({content:init_memo})
        }).then((r)=>{
            if(r.ok){r.json().then((x)=>setSavedMemo(x))}  
        })
        alert("Memo has been saved");
        navigate('/');
    }

    function removeMemo(e, memo){
        e.preventDefault();
       fetch(`/games/${game.id}/memos/${memo.id}`, {
        method: "DELETE",
        headers: { 'Content-Type':'application/json'}
       })
        .then((r)=>r.json())
        .then((x)=>console.log(x))
    }

    return (
        <div>
            <p>Memo: {game.memos ? game.memos.map((memo)=>{
                    return <div key={memo.id}><span key={memo.id}>{memo.content}<br/></span>
                    <button onClick={(e)=>removeMemo(e, memo)}>X</button></div>
                }):null}</p>
            <form onSubmit={handleMemoSubmit}>
                <textarea placeholder="Leave a memo" value={init_memo} onChange={(e)=>setMemo(e.target.value)}></textarea><br/>
                <button type="submit">Save Memo</button>
            </form>
        </div>
    )
}