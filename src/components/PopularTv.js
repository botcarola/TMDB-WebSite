import FetchCategorias from "./FetchCategorias";
import { popularSeries } from "../auxiliar/variablesAuxiliares.js";

const PopularTv = () => {

    return (
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="tv"
            rutaSubtipo="popular"
            titulo="Series populares"
            urlFetch={popularSeries}
            />
        </main> 
    )
}

export default PopularTv;