import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import useFetch from "./useFetch";
import SimpleCard from "./SimpleCard"

const FetchHome = ({rutaCategoria, tipoCategoria, urlCategoria}) => {

    const elementos = useFetch(urlCategoria)
    const recortados = elementos.slice(0,5)   

    return (
    <div className="flex flex-col m-10 mb-10">
        <Link className="flex items-center text-xl text-white" to ={`/${rutaCategoria}`}>
            {tipoCategoria} que son tendencia
        <BsArrowRightShort />
        </Link>
        <div className="flex">
            {recortados.map( curr => 
            <Link to="/" key={curr.id}>
                <SimpleCard 
                    imagen={curr.poster_path}            
                />
            </Link>
            )}
        </div>            
    </div>
    )
}

export default FetchHome;