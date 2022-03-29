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
                rutaTipo={curr.rutaTipo}
                rutaSubtipo={curr.rutaSubtipo}
                titulo={curr.titulo}                
                urlFetch={curr.urlFetch}
                recortarArray={true}
                />
            )}
        </main>      
    )
}

export default Main;