import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Movies from "./components/Movies";
import TrendingMovies from './components/TrendingMovies';
import PopularMovies from "./components/PopularMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import NowPlayingMovies from "./components/NowPlayingMovies";
import Tv from "./components/Tv";
import TrendingTv from './components/TrendingTv';
import PopularTv from "./components/PopularTv";
import TopRatedTv from "./components/TopRatedTv";
import OnAirTv from "./components/OnAirTv";
import BusquedaIndefinida from './components/BusquedaIndefinida';

const App = () => {

  return(
    <>
    <BrowserRouter>
        <Nav/>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={<Movies />} />

              <Route path="/movies/trending/page/:pagina" element={<TrendingMovies />} />
              <Route path="/movies/popular/page/:pagina" element={<PopularMovies />} />
              <Route path="/movies/top_rated/page/:pagina" element={<TopRatedMovies />} />
              <Route path="/movies/upcoming/page/:pagina" element={<UpcomingMovies />} />
              <Route path="/movies/now_playing/page/:pagina" element={<NowPlayingMovies />} />              

              <Route path="/movie/:id/info" element={<Movies />} />
              <Route path="/movie/:id/cast" element={<Movies />} />
              <Route path="/movie/:id/videos" element={<Movies />} />
              <Route path="/movie/:id/similar" element={<Movies />} />

              <Route path="/tv" element={<Tv />} />
              
              <Route path="/tv/trending/page/:pagina" element={<TrendingTv />} />
              <Route path="/tv/popular/page/:pagina" element={<PopularTv />} />
              <Route path="/tv/top_rated/page/:pagina" element={<TopRatedTv />} />
              <Route path="/tv/on_the_air/page/:pagina" element={<OnAirTv />} />

              <Route path="/tv/:id/info" element={<Tv />} />
              <Route path="/tv/:id/season/:season" element={<Tv />} />
              <Route path="/tv/:id/cast" element={<Tv />} />
              <Route path="/tv/:id/similar" element={<Tv />} />
              <Route path="/*" element={<BusquedaIndefinida />} />
            </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
