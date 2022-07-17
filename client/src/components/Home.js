import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { Parallax } from 'react-parallax';
import Search from './Search';
import Topdeals from './Topdeals';
import IMAGES from '../images/Image';

function Home({currentUser, setResult}){
    const [searchResult, setSearchResult] = useState();
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


    return(
        <div className='header'>
            <div className='home-search'>
                <div className='search-container'>
                    <h1>Save More On Games</h1>
                    <Search setSearchResult={setSearchResult} />
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
            
              
            {searchResult ? navigate('/searchresult') : (<Topdeals />)}
            

            <div>
               
            </div>
        </div>
    )
}

export default Home;