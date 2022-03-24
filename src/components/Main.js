import {Carousel} from '3d-react-carousal';
import Swiper from 'react-id-swiper';
import FetchCards from "./FetchCards";
import { propsMain } from "../auxiliar/variablesAuxiliares";

const Home = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsMain.map(curr => 
                <FetchCards 
                key={curr.id}
                rutaCategoria={curr.rutaCategoria}
                tipoCategoria={curr.tipoCategoria}
                urlFetch={curr.urlFetch}
                />
            )}
        </main>      
    )
}

export default Home;