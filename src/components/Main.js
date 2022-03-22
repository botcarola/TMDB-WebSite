import {Carousel} from '3d-react-carousal';
import Swiper from 'react-id-swiper';
import FetchHome from "./FetchHome";
import { popularMovies, popularSeries } from "../auxiliar/variablesAuxiliares";


const Home = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
        <FetchHome 
        rutaCategoria="movies"
        tipoCategoria="Películas" 
        urlCategoria={popularMovies} 
        />
        
        <FetchHome
        rutaCategoria="tv"
        tipoCategoria="Series"
        urlCategoria={popularSeries}
        />
        </main>      
    )
}

export default Home;