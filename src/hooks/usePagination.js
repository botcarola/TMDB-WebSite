import { useState } from "react";

const usePagination = () => {

    const [pagina, setPagina] = useState(1);
    return pagina
}

export default usePagination;