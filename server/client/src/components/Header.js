import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoImg from '../images/syncCircle.png';

// style={{width:'40px', marginTop:'10px', marginBottom:'-7px', marginLeft:'10px', marginRight:'10px'}}
  // <Link to="/files" style={style} className="specialeffects">Upload to OneDrive</Link>

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (<li><a href="/auth/microsoft">Sign in with your office 365 account</a></li>);
      default:
        return (<li><a href="/api/logout">Logout</a></li>);

    }
  }
  render(){

    return(

        <nav className="#37474f blue-grey darken-3">
          <div className="nav-wrapper" >
           <a href="#" className="brand-logo ">
            <img src={LogoImg} className="imageLogo" alt="Logo"/>
            Sync Contacts
            </a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

            <ul className="right hide-on-med-and-down">
                <li><a href="/files">upload to OneDrive</a></li>
                {this.renderContent()}

            </ul>

            <ul className="side-nav" id="mobile-demo">

                {this.renderContent()}

                <li>
                <div className="divider"></div>
                </li>

                <li><a href="/files">upload to OneDrive</a></li>
            </ul>
          </div>
        </nav>

    );
  }
}
function mapStateToProps({auth}) {
  return {auth};
}
export default connect(mapStateToProps)(Header);
