import React, {useState, useEffect} from 'react';

import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )
            // Math.floor(Math.random() * request.data.results.length - 1)
        }
        fetchData();

    }, []);

    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0,n-1) + "..." :str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        > 
            <div className="bannerContent">
                {/*Title*/}
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className="bannerButtons">
                    <button className="bannerButton">
                        Play
                    </button>
                    <button className="bannerButton">
                        My List
                    </button>

                </div>

                <h1 className="bannerOverview">
                    {truncate(movie?.overview, 500)}
                </h1>

                
                {/*Div -> 2 Buttons*/}

                {/*Description*/}
            </div>
            <div className="bannerFade" />
        </header>
    )
}

export default Banner
