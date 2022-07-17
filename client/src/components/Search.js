import React, { useState } from 'react';

function Search({setSearchResult}){
    const[searchQuery, setSearchQuery] = useState('');

    const handleSearch=(e)=>{
        e.preventDefault();
        fetch(`https://www.cheapshark.com/api/1.0/games?title=${searchQuery}`)
        .then((r)=>{
            if(r.ok){
                r.json().then((result)=> setSearchResult(result))
            }
        })
    }
 
    return(
        <div>
            <div className='SearchByGameName'>
                <form onSubmit={handleSearch}>
                    <input className='SearchByGameNameBar' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}></input>
                    <button type="submit">Search</button>
                </form>              
            </div>
        </div>
    )
}
export default Search;