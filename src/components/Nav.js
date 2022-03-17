import { Link } from "react-router-dom";
import  logoNav from "../assets/logoNav.svg";
import InputBusqueda from "./InputBusqueda";
import { BsTv } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { useState } from "react";


const Nav = () => {

    const [ inputPelicula, setInputPelicula ] = useState (true)
    const [ inputSerie, setInputSerie ] = useState (false)    

    const handleClickPelicula = () => {     
        setInputPelicula ( true )
        setInputSerie ( false )
    }

    const handleClickSerie = () => {
        setInputPelicula ( false )
        setInputSerie ( true )
    }

    return (
        <nav className="bg-stone-900 flex text-gray-50 justify-between text-xl">
            <div className="flex w-2/6 ml-10 items-center">
                <a  className="mr-8" href="https://www.themoviedb.org/" target="_blank">
                    <img className="h-20" src={logoNav} alt="the movie database logo"/>
                </a>
                <div className="flex items-center">
                    <div className="flex pr-3">
                        <BiMovie className={inputPelicula === true ? "text-red-600 m-2" : "m-2" } onClick={handleClickPelicula} />
                        <BsTv  className={inputSerie === true ? "text-red-600 m-2" : "m-2"} onClick={handleClickSerie} />
                    </div>
                    {inputPelicula && <InputBusqueda key="1" tipo="Search movies" />}
                    {inputSerie && <InputBusqueda key="2" tipo="Search series" />}
                </div>               
            </div>
            <div className="flex w-1/6 justify-evenly items-center text-base">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/tv">TV</Link>
            </div>          
        </nav> 
    )
}

export default Nav;

