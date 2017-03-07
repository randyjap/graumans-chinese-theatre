import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SerieHighlight from '../serie_highlight/serie_highlight_container';

class FilmReel extends React.Component{
  constructor(props){
    super(props);
    this.state = { slidesToShow: this.slidesToShow(), highlight: false, serie: {} };
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

  show(data){
    this.setState({ highlight: !this.state.highlight, serie: data });
  }

  render(){
    let series;
    let keys = Object.keys(this.props.genre);
    if (keys.length > 0) {
      series = keys.map(key => {
        return (
          <div>
            <img onClick={() => this.show(this.props.genre[key])} className="vid_thumbnail"
              src={this.props.genre[key].thumb_url} />
          </div>
        );
      });
    }

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
        <SerieHighlight data={this.state.serie }></SerieHighlight>
      );
    }
    return (
      <div className='film-reel-container'>
      	<Slider {...settings}>
          { series }
        </Slider>
        <ReactCSSTransitionGroup
          transitionName="highlight"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { highlight }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default FilmReel;
