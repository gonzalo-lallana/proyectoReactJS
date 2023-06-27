
import { CarouselItem, Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Overlay from './overlay';


function CarouselContainer() {

    

    return (
        <Carousel id='carousel' fade controls={false} pause='false' prevIcon nextIcon indicators={false}>
            <CarouselItem >
                <img className='d-block w-100' src="../../../public/img/carousel4.jpg" alt="carousel 1" />
                <Overlay></Overlay>
            </CarouselItem>
            <CarouselItem >
                <img className='d-block w-100' src="../../../public/img/carousel5.jpg" alt="carrousel 2" />
                <Overlay></Overlay>
            </CarouselItem>
            <CarouselItem >
                <img className='d-block w-100' src="../../../public/img/carousel6.jpg" alt="carousel 3" />
                <Overlay></Overlay>
            </CarouselItem>
        </Carousel>
    );
}

export default CarouselContainer;