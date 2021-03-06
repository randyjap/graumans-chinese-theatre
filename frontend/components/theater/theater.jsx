import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FilmReelContainer from './../film_reel/film_reel_container';
import { getAllSeries } from './../../util/serie_api_util';

class Theater extends React.Component {
  constructor(props){
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
    this.redirect = this.redirect.bind(this);
    this.logout = this.logout.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = {
      open: false,
      genres: {}
    };
  }

  componentDidMount(){
    let that = this;
    getAllSeries().then(data => that.setState({ genres: data }));
  }

  redirect(route){
    this.props.router.replace(route);
    this.props.clearSessionErrors();
  }

  logout(){
    this.props.logout().then(() => this.redirect("/"));
  }

  updateProperty(property){
    return e => this.setState({ [property]: e.target.value });
  }

  handleTouchTap(event){
    // This prevents ghost click.
    event.preventDefault();
    console.log(this.state);
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose(){
    this.setState({
      open: false,
    });
  }

  render(){
    let reels;
    let keys = Object.keys(this.state.genres);
    if (keys.length > 0) {
      reels = keys.map(key => {
        return (
          <h2 key={key} className="rowHeader">
            <span className="rowTitle">
              {key}
            </span>
            <FilmReelContainer genre={this.state.genres[key]} />
          </h2>
        );
      });
    }

    let style = {
      backgroundColor: "red",
      position: "absolute",
      right: "25px",
      top: "20px",
      color: "white"
    };

    let style2 = {
      backgroundColor: "red",
      color: "white",
      zIndex: 99999
    };

    return(
      <div className="main-theater">
        <div className="billboard">
          <div className="splash-nav">
            <Link to="/">
              <img className="logo" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488680995/gct-logo_blthd0.png"/>
            </Link>
            <FlatButton
            onTouchTap={this.handleTouchTap}
            label="Guest"
            style={style}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
            animation={PopoverAnimationVertical}
            style={style2}
          >
            <Menu>
              <MenuItem style={style2} primaryText="Sign out" onTouchTap={this.logout} />
            </Menu>
          </Popover>
          </div>
          <div className="billboard-highlight">
            <p className="font-fifty">Chinese Theater Originals!</p>
            <p className="font-twenty">Thanks for visiting!</p>
          </div>
        </div>
        <div className="category-sliders">
          {reels}
        </div>
      </div>
    );
  }
}

export default Theater;
