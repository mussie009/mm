import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Images from './Images';
// import ProfilePhotoes from './ImageDownloads';
// import Collapsible from 'react-collapsible';

class ContactDetail extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  // componentDidMount() {
  //   const json = localStorage.getItem('options');
  //   const options = JSON.parse(json);
  //   this.setState(() => ({options}));
  // }
  // componentDidUpdate() {
  //   const json = JSON.stringify(this.state.options);
  //   localStorage.setItem('options': json);
  // }

  render() {
    let style = {
      background: "#f0f0f5",
      padding: '10px 40px',
      fontSize: 'medium',
      color: 'green',
      wordSpacing: '10px'

    }
    if (!this.props.activeContact){
      return <div>Click a contact to see details.</div>
    }
    return (

      <ul className="posdetails">
        <li style={style} className="collection-item">Surname: {this.props.activeContact.name}</li>
        <li style={style} className="collection-item" >Business-phone: {this.props.activeContact.phone}</li>
        <li style={style} className="collection-item">Email: {this.props.activeContact.email}</li>

      </ul>

    );
  }
}



function mapStateToProps({activeContact}) {
  return {activeContact};
}

export default connect(mapStateToProps)(ContactDetail);
