import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Memo({currentUser, game, setSavedMemo}) {
    const[init_memo, setMemo] = useState('')
    let navigate = useNavigate();

    function handleMemoSubmit(e){
        e.preventDefault();
        if (init_memo === ''){
            alert("Can't save an empty note!")
        }else{
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
       
    }

    function removeMemo(e, memo){
        e.preventDefault();
        console.log(memo)
        if(currentUser){
            fetch(`/games/${game.id}/memos/${memo.id}`, {
                method: "DELETE",
                headers: { 'Content-Type':'application/json'}
            })
            .then((r)=>r.json())
            .then((x)=>console.log(x))
        }
    }

    return (
        <div>
            Memo: {game.memos ? game.memos.map((memo)=>{
                    return <div key={memo.id}><span key={memo.id}>{memo.content}<br/><div><button onClick={(e)=>removeMemo(e,memo)}>X</button></div></span>
                   </div>
                }):null}
            <form onSubmit={handleMemoSubmit}>
                <textarea placeholder="Leave a memo" value={init_memo} onChange={(e)=>setMemo(e.target.value)}></textarea><br/>
                <button type="submit"  id="wishListBtn">Save Memo</button>
            </form>
        </div>
    )
}