import React from 'react';
import Slider from "react-slick";
import { Styled } from './styles';
import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';

function Carousel() {
    const settings = {
        dots: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => <ul style={{position: 'relative', top: '-31px', backgroundColor: 'rgba(255,255,255, .5)'}}>{dots}</ul>,
      };
  return (
    <Styled.CarouselContainer>
        <Slider {...settings}>
            <Styled.CarouselItem img={banner1}/>
            <Styled.CarouselItem img={banner2}/>
            <Styled.CarouselItem img={banner3}/>
        </Slider>   
  </Styled.CarouselContainer>
  ) 
}

export default Carousel;