const API_KEY = 'bbed96cafb26651d7db489d58dcc5f56';

const requests = {
    fetchtrendingmovies: '/trending/movie/week?api_key=' + API_KEY + '&language=en-US',
    fetchOriginalnetflix: '/trending/tv/week?api_key=' + API_KEY + '&language=en-US',
    fetchTopRated: '/tv/top_rated?api_key=' + API_KEY,
    fetchActionMovies: '/discover/movie?api_key=' + API_KEY + '&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=' + API_KEY + '&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=' + API_KEY + '&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=' + API_KEY + '&with_genres=10749',
    fetchDocumanteMovies: '/discover/movie?api_key=' + API_KEY + '&with_genres=99',
}

export default requests;