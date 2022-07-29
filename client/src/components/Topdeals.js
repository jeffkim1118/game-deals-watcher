import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Topdeal({currentUser}){
    const[topDealsList, setTopDeals] = useState([])

    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&storeID=7&upperPrice=20`)
        .then((r) => r.json())
        .then(topDealsGames => setTopDeals(topDealsGames))
    }, [])
   
    const result = topDealsList.filter(checkTopDeals);

    function checkTopDeals(topDealsList){
        if(topDealsList.metacriticScore > "70"){
            return topDealsList 
        }
    }

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        focusOnSelect: true,
    };

    function redirectToDeal(e,singleDeal){
        e.preventDefault();
        window.open(`https://www.cheapshark.com/redirect?pageSize=10&dealID=${singleDeal}`, '_blank');
        return null;
    }

    return(
        <div className='games-list'>
            <h1>Top Deals</h1>     
            <Slider {...settings}>
                {result.map((singleDeal)=> (
                    <div className="list-container" key={singleDeal}>
                        <div className="single_game">
                            <img src={singleDeal.thumb} onClick={(e)=>redirectToDeal(e,singleDeal.dealID)} className="game-img" alt="Game-img"/><br/>
                            <strong><span className='game-info'>{singleDeal.title}</span><br/></strong>
                            <strong><span className='game-info'>{Math.round(singleDeal.savings)}% Off</span></strong><br/>
                            <span className='game-info'>Price: <s>${singleDeal.normalPrice}</s> <strong>${singleDeal.salePrice}</strong></span><br/>
                            <span className='game-info'>Meta Critics Score: {singleDeal.metacriticScore}</span><br/>
                            {/* {currentUser ? <button>Add to my wishlist</button> : null} */}
                        </div>                  
                    </div>
                ))}               
            </Slider>
        </div>
    )
}