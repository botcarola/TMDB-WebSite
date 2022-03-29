import FetchCards from "./FetchCards";
import { propsMovies } from "../auxiliar/variablesAuxiliares";


const Movies = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsMovies.map(curr => 
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

export default Movies;