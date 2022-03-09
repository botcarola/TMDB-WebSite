import {Carousel} from '3d-react-carousal';
import Swiper from 'react-id-swiper';


const Home = () => {

    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

    return(
        <>

        

   <Swiper>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
    <div>Slide 4</div>
    <div>Slide 5</div>
  </Swiper>

        
        {/*<Carousel className="m-10" slides={slides} autoplay={true} interval={4000}/>*/}
        </>
    )
}

export default Home;