export const apiKey = "d2db916ed787e45a269779c746706c07"
export const trendingMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
export const trendingTv = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`

//URLS MOVIES
export const fetchMovie = "https://api.themoviedb.org/3/movie/550?api_key=d2db916ed787e45a269779c746706c07"
export const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
export const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
export const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
export const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

//URLS SERIES
export const tv = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=${apiKey}&language=en-US`
export const popularSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
export const topRatedSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
export const onTheAirSeries = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`


export const propsMain = [
    {
        rutaTipo: "movies",
        rutaSubtipo:"trending",
        titulo: "Películas que son tendencia",
        urlFetch: popularMovies,
        id: 1
    },
    {
        rutaTipo: "tv",
        rutaSubtipo:"trending",
        titulo: "Series que son tendencia",
        urlFetch: popularSeries,
        id: 2
    }
]

export const propsMovies = [
    {
        rutaTipo: "movies",
        rutaSubtipo:"popular",
        titulo: "Películas populares",
        urlFetch: popularMovies,
        id: 1
    },
    {
        rutaTipo: "movies",
        rutaSubtipo:"top_rated",
        titulo: "Películas con mejores críticas",
        urlFetch: topRatedMovies,
        id: 2
    },
    {
        rutaTipo: "movies",
        rutaSubtipo:"upcoming",
        titulo: "Películas a estrenar",
        urlFetch: upcomingMovies,
        id: 3
    },
    {
        rutaTipo: "movies",
        rutaSubtipo:"now_playing",
        titulo: "Películas en cines",
        urlFetch: nowPlayingMovies,
        id: 4
    }

]

export const propsSeries = [
    {
        rutaTipo: "tv",
        rutaSubtipo:"popular",
        titulo: "Series populares",
        urlFetch: popularSeries,
        id: 1
    },
    {
        rutaTipo: "tv",
        rutaSubtipo:"top_rated",
        titulo: "Series con mejores críticas",
        urlFetch: topRatedSeries,
        id: 2
    },
    {
        rutaTipo: "tv",
        rutaSubtipo:"on_the_air",
        titulo: "Series al aire",
        urlFetch: onTheAirSeries,
        id: 3
    }
]
