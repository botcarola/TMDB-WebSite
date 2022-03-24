export const fetchMovie = "https://api.themoviedb.org/3/movie/550?api_key=d2db916ed787e45a269779c746706c07"
export const apiKey = "d2db916ed787e45a269779c746706c07"

//URLS MOVIES
export const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
export const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
export const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
export const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

//URLS SERIES
export const tv = "https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US"
export const topRatedSeries = "https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US"
export const popularSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`


export const propsMain = [
    {
        rutaCategoria: "movies",
        tipoCategoria: "Películas que son tendencia",
        urlFetch: popularMovies,
        id: 1
    },
    {
        rutaCategoria: "tv",
        tipoCategoria: "Series que son tendencia",
        urlFetch: popularSeries,
        id: 2
    }
]

export const propsMovies = [
    {
        rutaCategoria: "/movie/popular/page/1",
        tipoCategoria: "Películas populares",
        urlFetch: popularMovies,
        id: 1
    },
    {
        rutaCategoria: "/movie/top_rated/page/1",
        tipoCategoria: "Películas con mejores críticas",
        urlFetch: topRatedMovies,
        id: 2
    },
    {
        rutaCategoria: "/movie/upcoming/page/1",
        tipoCategoria: "Películas a estrenarse",
        urlFetch: upcomingMovies,
        id: 3
    },
    {
        rutaCategoria: "/movie/now_playing/page/1",
        tipoCategoria: "Películas en cines",
        urlFetch: nowPlayingMovies,
        id: 4
    }  
]


