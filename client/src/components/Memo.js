import React, { useEffect, useState } from "react"

export default function Memo({game, setSavedMemo}) {
    const[memo, setMemo] = useState('')

    useEffect(()=>{

    },[])

    function handleMemoSubmit(e){
        e.preventDefault();
        fetch(`/games/${game.id}/memos`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({content:memo})
        }).then((r)=>{
            if(r.ok){r.json().then((x)=>setSavedMemo(x))}
        })
    }

    return (
        <div>
            <form onSubmit={handleMemoSubmit}>
                <textarea placeholder="Leave a memo" value={memo} onChange={(e)=>setMemo(e.target.value)}></textarea><br/>
                <button type="submit">Save Memo</button>
            </form>
        </div>
    )
}