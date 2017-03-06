import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(route){
    this.props.router.replace(route);
  }

  render(){
    let style = {
      backgroundColor: "red",
      position: "absolute",
      right: "25px",
      top: "20px",
      color: "white"
    };

    let style2 = {
      backgroundColor: "red",
      color: "white"
    };

    return (
      <div className="main-splash">
        <div className="splash-nav">
          <Link to="/">
            <img className="logo" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488680995/gct-logo_blthd0.png"/>
          </Link>
          <FlatButton style={style} label="Sign In" onClick={() => this.redirect('login')} />
        </div>
        <div className="splash-grabber">
          <p className="font-fifty">See what’s next.</p>
          <p className="font-twenty">WATCH ANYWHERE. ANYTIME.</p>
          <FlatButton style={style2} label="LIVE DEMO!" onClick={() => this.redirect('login')} />
        </div>
      </div>
    );
  }
}

export default Greeting;
