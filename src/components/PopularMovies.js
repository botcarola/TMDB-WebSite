import FetchCategorias from "./FetchCategorias";
import { popularMovies } from "../auxiliar/variablesAuxiliares.js";

const PopularMovies = () => {

    return (        
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="movies"
            rutaSubtipo="popular"
            titulo="Películas populares"
            urlFetch={popularMovies}
            />
        </main>        
    )
}

export default PopularMovies;