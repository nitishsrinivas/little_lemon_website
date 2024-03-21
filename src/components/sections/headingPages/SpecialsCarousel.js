import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import FoodItem2 from '../../../assets/food/food2.jpeg';
import FoodItem3 from '../../../assets/food/food3.jpeg';
import FoodItem5 from '../../../assets/food/food6.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const images = [
    {
        url: Bruschetta,
    },
    {
        url: FoodItem2,      
    },
    {
        url: FoodItem3,
    },
    {
        url: FoodItem5,
    }
]

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} transitionTime={500} stopOnHover={true} Interval={5000} showStatus={false} showArrows={true} showThumbs={false}>
            {
                images.map((images, index) => (
                    <div key={index}>
                    <img src={images.url} alt={index} className="carousel-image"/>
                    </div>
                ))
            }
        </Carousel>
    )
}