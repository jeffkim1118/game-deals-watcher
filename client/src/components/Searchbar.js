import React, { useState } from 'react';

function Searchbar({setSearchResult}){
    const[searchQuery, setSearchQuery] = useState('');
    
    const handleSearch=(e)=>{
        e.preventDefault();
        fetch(`https://www.cheapshark.com/api/1.0/games?title=${searchQuery}`)
        .then((r)=>{
            if(r.ok){
                r.json().then((result)=> {             
                    setSearchResult(result)
                })
            }
        })      
    }
 
    return(
        <div className='searchByTitle-container'>
            <div className='SearchByGameName'>
                <form onSubmit={handleSearch}>
                    <input className="form-control" aria-describedby="inputGroup-sizing-lg" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search A Title"></input>
                    <button className='searchBtn' type="submit">Search</button>
                </form>     
            </div>
        </div>
    )
}
export default Searchbar;