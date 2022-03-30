import FetchCategorias from "./FetchCategorias";
import { onTheAirSeries } from "../auxiliar/variablesAuxiliares.js"

const OnAirTv = () => {

    return(
        <main className="flex justify-center">
            <FetchCategorias
            rutaTipo="tv"
            rutaSubtipo="on_the_air"
            titulo="Series al aire"
            urlFetch={onTheAirSeries}
            />
        </main>
    )
}

export default OnAirTv;