import FetchCategorias from "./FetchCategorias";
import { nowPlayingMovies } from "../auxiliar/variablesAuxiliares.js";

const NowPlayingMovies = () => {

    return(
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="movies"
            rutaSubtipo="now_playing"
            titulo="Películas en cines"
            urlFetch={nowPlayingMovies}
            />
        </main>
    )
}

export default NowPlayingMovies;