import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import useFetch from "./useFetch";
import SimpleCard from "./SimpleCard"

const FetchHome = ({rutaCategoria, tipoCategoria, urlFetch}) => {

    const elementos = useFetch(urlFetch)
    console.log(elementos)
    const recortados = elementos.slice(0,5) 

    return (
    <div className="flex flex-col m-10 mb-5">
        <Link className="flex items-center text-3xl text-white mb-4 font-thin" to ={`/${rutaCategoria}`}>
            {tipoCategoria}
        <BsArrowRightShort className="ml-3"/>
        </Link>
        <div className="flex">
            {recortados.map( curr => 
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