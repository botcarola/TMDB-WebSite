import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Movies from "./components/Movies";
import Tv from "./components/Tv";
import BusquedaIndefinida from './components/BusquedaIndefinida';

const App = () => {

  return(
    <>
    <BrowserRouter>
        <Nav/>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={<Movies />} />

              <Route path="/movies/popular/page/1" element={<Movies />} />
              <Route path="/movies/top_rated/page/1" element={<Movies />} />
              <Route path="/movies/upcoming/page/1" element={<Movies />} />
              <Route path="/movies/now_playing/page/1" element={<Movies />} />              

              <Route path="/movie/:id/info" element={<Movies />} />
              <Route path="/movie/:id/cast" element={<Movies />} />
              <Route path="/movie/:id/videos" element={<Movies />} />
              <Route path="/movie/:id/similar" element={<Movies />} />

              <Route path="/tv" element={<Tv />} />

              <Route path="/tv/popular/page/1" element={<Movies />} />
              <Route path="/tv/top_rated/page/1" element={<Movies />} />
              <Route path="/tv/on_the_air/page/1" element={<Movies />} />

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
