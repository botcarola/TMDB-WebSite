import { useEffect, useState } from "react";

const useFetch = ({variable}) => {

    const [elemento, setElemento] = useState([])
    
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch (variable)
            const data = await res.json()
            setElemento(data.result)
        }

        fetchApi()
        .catch( () => console.log("error"))
    }, [])

    return elemento
}

export default useFetch;