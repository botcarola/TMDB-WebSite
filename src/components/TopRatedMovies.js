import FetchCategorias from "./FetchCategorias";
import { topRatedMovies } from "../auxiliar/variablesAuxiliares.js";

const TopRatedMovies = () => {

    return(
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="movies"
            rutaSubtipo="top_rated"
            titulo="Películas con mejores críticas"
            urlFetch={topRatedMovies}
            />
        </main> 
    )
}

export default TopRatedMovies;