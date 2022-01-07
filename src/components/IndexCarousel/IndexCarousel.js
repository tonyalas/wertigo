import './IndexCarousel.css'
import Carousel from 'react-bootstrap/Carousel';

function IndexCarousel() {
    return (
        <div className='tagline-div'>
            <h1>Find where to go</h1>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item interval={2000}>
                    <h1>Eat</h1>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <h1>Shop</h1>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <h1>Have Fun</h1>
                </Carousel.Item>
            </Carousel>
            <hr></hr>
        </div>
        /*
        <div className="tagline-div">
            <h1>Find where to go</h1>
            <div id="homepage-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <h1>Eat</h1>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <h1>Shop</h1>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <h1>Have Fun</h1>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div> */
    )
}

export default IndexCarousel;