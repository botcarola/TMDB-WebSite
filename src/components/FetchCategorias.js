import FetchCards from "./FetchCards"

const FetchCategorias = ({rutaTipo, rutaSubtipo, titulo, urlFetch}) => {

    return(
        <div className="w-4/6">
            <FetchCards 
            tipoRuta={rutaTipo}
            subtipoRuta={rutaSubtipo}
            title={titulo}                
            fetchUrl={urlFetch}
            recortarArray={false}
            />          
        </div>
    )
}

export default FetchCategorias;