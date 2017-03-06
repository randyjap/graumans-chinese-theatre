import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

class FilmReel extends React.Component{
  constructor(props){
    super(props);
    this.state = { slidesToShow: this.slidesToShow() };
  }

  slidesToShow(){
    return Math.floor($( window ).width() / 258);
  }

  componentDidMount(){
    let that = this;
    $(window).resize(function() {
      let width = $( window ).width();
      that.setState({slidesToShow: that.slidesToShow()});
    });
  }

  render(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.slidesToShow,
      slidesToScroll: this.state.slidesToShow
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
        </Slider>
      </div>
    );
  }
}

export default FilmReel;
