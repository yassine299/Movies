import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, islargRow }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const baseimg = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        },
    };

    const handlClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                }).catch((error) => console.log(error));
        }
    };
    console.log(movies);
    return (
        <div className="container-fluid">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                <>
                    <img
                        onClick={() => handlClick(movie)}
                        key={movie.id}
                        className="row__poster"
                        src={islargRow ? baseimg + movie.poster_path : baseimg + movie.backdrop_path} alt={movie.name}
                    />
                </>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
