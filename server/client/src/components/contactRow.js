import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectContact } from '../actions/index';
import { bindActionCreators } from 'redux';
import ProfilePhotoes from './ImageDownloads';
import ContactDetail from './contactDetail';

class ContactRow extends Component {

  constructor(props) {
    super(props);
    this.selectContact = this.selectContact.bind(this);
    this.state = {
      visibility: false
    };
  }

  selectContact() {
    this.props.selectContact(this.props.contact);
    
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    let style = {
      cursor: 'pointer'
    }
    return(
          <div className="collection z-depth-2" >

          <li onClick={this.selectContact} className="collection-item " style={style}>
          <ProfilePhotoes contact={this.props.contact} />
          {this.props.contact.name}
          {this.state.visibility ? <i className="small right material-icons">arrow_drop_up</i> :
          <i className="small right material-icons">arrow_drop_down</i>
          }
          </li>

          {this.state.visibility ?
            <ContactDetail /> :
             null
          }
          </div>
        );
  }
}

// function mapStateToProps( state){
//   return {
//   }
// }

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectContact}, dispatch);
}

export default connect(null, mapDispatchToProps)(ContactRow);
