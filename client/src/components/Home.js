import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Searchbar from './Searchbar';
import Topdeals from './Topdeals';
import IMAGES from '../images/Image';
import { useNavigate } from 'react-router-dom';
import PriceAlert from './PriceAlert';


function Home({currentUser, setResult, setGames, games}){
    const [searchResult, setSearchResult] = useState();
    // const [deals, setDeals] = useState();

    setResult(searchResult)

    let navigate = useNavigate();
    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        draggable: false,
        lazyLoad: true,
        fade: true,
        pauseOnFocus: false
    };

    useEffect(()=>{
        if(currentUser){
            fetch(`/users/${currentUser.id}/games`)
            .then((r) => r.json())
            .then((x) => setGames(x))
        }
    },[])
    
    return(
        <div className='header'>
            {currentUser ? games.map((wishListGame) => { 
                return <div key={wishListGame.id}><PriceAlert wishListGameID={wishListGame.gameID}/></div>
                }) : null}
            {/* {priceLimitStatus===true ? <div className="alert alert-success" role="alert">Price alert email created!</div> : null} */}
            {/* {deleteStatus===true ? <div className="alert alert-success" role="alert">Game removed from your wishlist!</div> : null} */}
            <div className='home-search'>
                <div className='search-container'>
                    <h1>Save More On Games</h1>
                    <Searchbar setSearchResult={setSearchResult} />
                </div>      
            </div>  

            
            <div className='background-img-container'>
                <Slider {...settings}>
                <div className='img-container'><img src={ IMAGES.background1} alt='' className='backgroundIMG'/></div>
                <div className='img-container'><img src={ IMAGES.background2} alt='' className='backgroundIMG'/></div>
                <div className='img-container'><img src={ IMAGES.background3} alt='' className='backgroundIMG'/></div>
                <div className='img-container'><img src={ IMAGES.background4} alt='' className='backgroundIMG'/></div>
                </Slider>
            </div>

            <Topdeals currentUser={currentUser}/>

            {searchResult ? navigate('/searchresult') : null}

            <div className='footer'>

            </div>
        </div>
    )
}

export default Home;