import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import ReactStars from 'react-stars';

class SerieHighlight extends React.Component{
  constructor(props){
    super(props);
  }

  ratingChanged(newRating){
    console.log(newRating);
  }

  render(){
    return (
      <div className="serie-highlight">
        <div className="serie-left">
          <p className="serie-title">Breaking Bad</p>
          <ReactStars count={5} value={5} onChange={this.ratingChanged} size={12} color2={'#db1715'} />
          <b className="serie-year">2013</b>
          <b className="serie-mpaa-rating">TV-MA</b>
          <b className="serie-count">15 Episodes</b>
          <p className="serie-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <div className="serie-right">
          <img className="serie-artwork" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488765718/serie_artwork_example_dfhuep.jpg"/>
        </div>
      </div>
    );
  }
}

export default SerieHighlight;
