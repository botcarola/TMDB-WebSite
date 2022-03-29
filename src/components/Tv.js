import FetchCards from "./FetchCards";
import { propsSeries } from "../auxiliar/variablesAuxiliares";

const Tv = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsSeries.map(curr =>
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

export default Tv;