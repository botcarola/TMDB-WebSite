import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Movies from "./components/Movies";
import Tv from "./components/Tv";

const App = () => {

  return(
    <>
    <BrowserRouter>
        <Nav/>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id/info" element={<Movies />} />
              <Route path="/movie/:id/cast" element={<Movies />} />
              <Route path="/movie/:id/videos" element={<Movies />} />
              <Route path="/movie/:id/similar" element={<Movies />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/tv/:id/info" element={<Tv />} />
              <Route path="/tv/:id/season/:season" element={<Tv />} />
              <Route path="/tv/:id/cast" element={<Tv />} />
              <Route path="/tv/:id/similar" element={<Tv />} />
            </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
