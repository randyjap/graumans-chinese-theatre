import React, { Component } from 'react';
import Slider from 'react-slick';

class FilmReel extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $(window).resize(function() {
      let width = $( window ).width();
      console.log(width);
    });
  }

  render(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };
    return (
      <div className='film-reel-container'>
      	<Slider {...settings}>
        	<div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
        </Slider>
      </div>
    );
  }
}

export default FilmReel;
