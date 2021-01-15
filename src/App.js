import React from "react"
import './App.css';
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Movies from "./Movies";

function App() {
  return (
    <div className="app">
      <Movies />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchOriginalnetflix} islargRow />
      <Row title="TOP TRENDING" fetchUrl={requests.fetchtrendingmovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARY MOVIES" fetchUrl={requests.fetchDocumanteMovies} />
    </div>
  );
}

export default App;