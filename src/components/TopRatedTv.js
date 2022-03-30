import FetchCategorias from "./FetchCategorias";
import { topRatedSeries } from "../auxiliar/variablesAuxiliares.js";

const TopRatedTv = () => {

    return(
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="tv"
            rutaSubtipo="top_rated"
            titulo="Series con mejores críticas"
            urlFetch={topRatedSeries}
            />
        </main>  
    )
}

export default TopRatedTv;