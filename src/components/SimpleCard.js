const SimpleCard = ({imagen}) => {

    return(
    <div className="w-64">
        <img src={`https://image.tmdb.org/t/p/original${imagen}`} />
    </div>
    )
}

export default SimpleCard;
