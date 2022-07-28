import React, { useState } from "react"

export default function Memo({game, setSavedMemo}) {
    const[init_memo, setMemo] = useState()

    function handleMemoSubmit(e){
        e.preventDefault();
        fetch(`/games/${game.id}/memos`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({content:init_memo})
        }).then((r)=>{
            if(r.ok){r.json().then((x)=>setSavedMemo(x))}  
        })
    }

    return (
        <div>
            <p>Memo: {game.memos ? game.memos.map((memo)=>{
                    return <span key={memo.id}>{memo.content}<br/></span>
                }):null}</p>
            <form onSubmit={handleMemoSubmit}>
                <textarea placeholder="Leave a memo" value={init_memo} onChange={(e)=>setMemo(e.target.value)}></textarea><br/>
                <button type="submit">Save Memo</button>
            </form>
        </div>
    )
}