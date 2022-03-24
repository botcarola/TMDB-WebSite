import FetchCards from "./FetchCards";
import { propsSeries } from "../auxiliar/variablesAuxiliares";

const Tv = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsSeries.map(curr =>
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

export default Tv;