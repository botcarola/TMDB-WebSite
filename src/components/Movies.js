import FetchCards from "./FetchCards";
import { propsMovies } from "../auxiliar/variablesAuxiliares";

const Movies = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsMovies.map(curr => 
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

export default Movies;