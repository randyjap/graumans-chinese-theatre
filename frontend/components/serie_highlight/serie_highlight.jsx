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
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
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
          <p className="serie-title">Breaking Bad</p>
          <ReactStars count={5} value={5} onChange={this.ratingChanged} size={12} color2={'#db1715'} />
          <b className="serie-year">2013</b>
          <b className="serie-mpaa-rating">TV-MA</b>
          <b className="serie-count">15 Episodes</b>
          <p className="serie-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <div className="serie-right">
          <img onClick={this.openModal} className="serie-artwork" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488765718/serie_artwork_example_dfhuep.jpg"/>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <i onClick={this.closeModal} className="material-icons icon-off">highlight_off</i>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/F1HNuAE9WdU?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
            </Modal>
        </div>
      </div>
    );
  }
}

export default SerieHighlight;
