import FetchCategorias from "./FetchCategorias";
import { upcomingMovies } from "../auxiliar/variablesAuxiliares.js";

const UpcomingMovies = () => {

    return(
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="movies"
            rutaSubtipo="upcoming"
            titulo="Películas a estrenar"
            urlFetch={upcomingMovies}
            />
        </main> 
    )
}

export default UpcomingMovies;