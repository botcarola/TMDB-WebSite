import FetchCards from "./FetchCards";
import { propsMovies } from "../auxiliar/variablesAuxiliares";


const Movies = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsMovies.map(curr => 
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

export default Movies;