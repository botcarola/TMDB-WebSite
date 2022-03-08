import { GoSearch } from "react-icons/go";

const InputPeliculas = ({tipo}) => {

    return (     
        <form className="flex flex-wrap justify-between md:flex-row">
            <input type="text" name="busqueda" placeholder={tipo}  className="flex-1px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent  appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
            <button className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-200 transform rounded-md lg:w-12 lg:h-12 lg:p-0 bg-primary">
                <GoSearch />
            </button>
        </form>            
    )
}

export default InputPeliculas;