import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SerieHighlight from '../serie_highlight/serie_highlight_container';

class FilmReel extends React.Component{
  constructor(props){
    super(props);
    this.state = { slidesToShow: this.slidesToShow(), highlight: false };
    this.show = this.show.bind(this);
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

  show(){
    this.setState({ highlight: !this.state.highlight });
  }

  render(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.slidesToShow,
      slidesToScroll: this.state.slidesToShow
    };

    let highlight;
    if (this.state.highlight) {
      highlight = (
        <SerieHighlight></SerieHighlight>
      );
    }
    return (
      <div className='film-reel-container'>
      	<Slider {...settings}>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
          <div><img onClick={this.show} className="vid_thumbnail" src='http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg' /></div>
        </Slider>
        <ReactCSSTransitionGroup
          transitionName="highlight"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {highlight}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default FilmReel;
