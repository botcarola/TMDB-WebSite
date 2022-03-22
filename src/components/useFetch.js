import { useEffect, useState } from "react";

const useFetch = (urlCategoria) => {
    const [elemento, setElemento] = useState([]) 

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch (urlCategoria)
            const data = await res.json()
            setElemento(data.results)
        }
        fetchApi()
        .catch( () => console.log("error"))
    }, [])
    
    return elemento
}

export default useFetch;