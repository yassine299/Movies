import React, { useEffect, useState } from "react";
import "./movies.css";

const Movies = () => {
    const [movie, setmovie] = useState([]);
    const [search, setsearch] = useState('');
    const [query, setquery] = useState('@');

    useEffect(() => {
        getmovies();
    }, [query]);

    const getmovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=bbed96cafb26651d7db489d58dcc5f56&language=en-US&query=' + query + '&page=1&include_adult=false');
        const data = await response.json();
        setmovie(data.results);
    };

    const updateSearch = e => {
        setsearch(e.target.value);
    }

    const getsearch = e => {
        e.preventDefault();
        setquery(search);
        setsearch('');
    }
    const rec = [];
    movie.forEach((recipe) => {
        rec.push(
            <>
                <img
                    className="img__search"
                    src={"https://image.tmdb.org/t/p/w500" + recipe.backdrop_path} alt="" />
            </>
        )
    });

    return (
        <div>
            <nav className="navbar navbar-light bg-dark justify-content-between">
                <a className="navbar-brand">Movies displayer</a>
                <form className="form-inline" onSubmit={getsearch}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={updateSearch} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <div className="search">{rec}</div>

        </div>
    )
};

export default Movies;