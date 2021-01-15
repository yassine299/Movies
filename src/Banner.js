import React, { useEffect, useState } from 'react';
import axios from "./axios";
import requests from "./requests";
import "./banner.css"

function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchOriginalnetflix);
            setmovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return request;
        }
        fetchData();
    }, [])
    const img = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: 'url(' + img + ')',
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie.name}
                </h1>
                <h1 className="banner__desc">
                    {movie.overview}
                </h1>
            </div>
            <div className="banner__feedbottom"></div>
        </header>
    )
}
export default Banner;