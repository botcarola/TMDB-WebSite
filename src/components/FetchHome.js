import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import useFetch from "./useFetch";
import SimpleCard from "./SimpleCard"

const FetchHome = ({rutaCategoria, tipoCategoria, urlCategoria}) => {

    const elementos = useFetch(urlCategoria)
    console.log(elementos)

    return (
    <>
        <Link to ={`/${rutaCategoria}`}>
            {tipoCategoria} que son tendencia
        <BsArrowRightShort />
        </Link>
        {elementos.map( curr => 
        <Link to="/" >
            <SimpleCard 
            imagen={curr.poster_path}
            key={curr.id}
            />
        </Link>
        )}            
    </>
    )
}

export default FetchHome;