import {Carousel} from '3d-react-carousal';
import Swiper from 'react-id-swiper';
import FetchCards from "./FetchCards";
import { propsMain } from "../auxiliar/variablesAuxiliares";

const Main = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsMain.map(curr => 
                <FetchCards 
                key={curr.id}
                tipoRuta={curr.rutaTipo}
                subtipoRuta={curr.rutaSubtipo}
                title={curr.titulo}                
                fetchUrl={curr.urlFetch}
                recortarArray={true}
                />
            )}
        </main>      
    )
}

export default Main;