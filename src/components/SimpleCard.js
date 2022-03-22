const SimpleCard = ({imagen, titulo}) => {

    return(
    <div className="m-1">
        <img className="w-55 h-80" src={`https://image.tmdb.org/t/p/original${imagen}`} />
        <h3 className="text-white mt-4 font-thin">
            {titulo}
        </h3>
    </div>
    )
}

export default SimpleCard;
 