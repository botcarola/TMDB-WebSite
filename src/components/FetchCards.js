import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import useFetch from "../hooks/useFetch";
import SimpleCard from "./SimpleCard";
import usePagination from "../hooks/usePagination";

const FetchHome = ({rutaTipo, rutaSubtipo, titulo, urlFetch, recortarArray}) => {

    const elementos = useFetch(urlFetch)
    const elementosRecortados = elementos.slice(0,5)   
    const verificarRecortarArray = () => recortarArray === true ? elementosRecortados : elementos
    const arrayVerificado = verificarRecortarArray()
    const paginado = usePagination() 

    return (
    <div className="flex flex-col m-10 mb-5">
        <Link className="flex items-center text-3xl text-white mb-4 font-thin" to ={`/${rutaTipo}/${rutaSubtipo}/page/${paginado}"`}>
            {titulo}
        <BsArrowRightShort className="ml-3"/>
        </Link>
        <div className="flex">
            {arrayVerificado.map( curr => 
            <Link to="/" key={curr.id}>
                <SimpleCard 
                    imagen={curr.poster_path}
                    titulo={!!curr.title ? curr.title : curr.name}            
                />
            </Link>
            )}
        </div>            
    </div>
    )
}

export default FetchHome;