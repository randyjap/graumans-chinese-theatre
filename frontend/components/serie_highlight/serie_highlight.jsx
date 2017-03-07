import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import ReactStars from 'react-stars';
import Modal from 'react-modal';

class SerieHighlight extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  ratingChanged(newRating){
    console.log(newRating);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    let data = this.props.data;
    const customStyles = {
      content : {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 9000,
        border: 0,
        padding: 0,
        margin: 0
      },
      overlay: {zIndex: 8000}
    };

    return (
      <div className="serie-highlight">
        <div className="serie-left">
          <p className="serie-title">{data.name}</p>
          <ReactStars count={5} value={5} onChange={this.ratingChanged} size={12} color2={'#db1715'} />
          <b className="serie-year">{data.year}</b>
          <b className="serie-mpaa-rating">{data.mpaa_rating}</b>
          <b className="serie-count">1 Episode for now</b>
          <p className="serie-description">{data.description}</p>
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <div className="serie-right">
          <img onClick={this.openModal} className="serie-artwork" src={data.screenshot_url}/>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <i onClick={this.closeModal} className="material-icons icon-off">highlight_off</i>
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${data.url}?rel=0&amp;showinfo=0&autoplay=1`} frameborder="0" allowfullscreen></iframe>
            </Modal>
        </div>
      </div>
    );
  }
}

export default SerieHighlight;
