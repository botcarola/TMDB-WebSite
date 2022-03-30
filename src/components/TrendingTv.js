import FetchCategorias from "./FetchCategorias";
import { trendingTv } from "../auxiliar/variablesAuxiliares.js";

const TrendingTv = () => {

    return (        
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="tv"
            rutaSubtipo="trending"
            titulo="Series que son tendencia"
            urlFetch={trendingTv}
            />
        </main>        
    )
}

export default TrendingTv;