import React, { useState } from 'react';
import Search from './Search';
import Topdeals from './Topdeals'
import SearchResult from './SearchResult';

function Home({currentUser}){
    const [searchResult, setSearchResult] = useState();
    console.log(searchResult)
    return(
        <div>
            <Search setSearchResult={setSearchResult} />
            {searchResult ? (<SearchResult searchResult={searchResult}/>) : (<Topdeals />)}
            
        </div>
    )
}

export default Home;