import FetchCategorias from "./FetchCategorias";
import { trendingMovies } from "../auxiliar/variablesAuxiliares.js";

const TrendingMovies = () => {

    return (        
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="movies"
            rutaSubtipo="trending"
            titulo="Películas que son tendencia"
            urlFetch={trendingMovies}
            />
        </main>        
    )
}

export default TrendingMovies;