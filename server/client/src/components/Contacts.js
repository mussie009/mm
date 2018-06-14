import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downloadImage } from '../actions/index';
import { bindActionCreators } from 'redux';
import ProfilePhotoes from './ImageDownloads';
import ContactRow from './contactRow';

// import ContactDetail from './contactDetail';

class ContactsList extends Component {

  renderList() {
   
    
    if(!this.props.contacts){
      return <div>Contacts not yet arrived!</div>
    }

      return this.props.contacts.map((contact) => {
          this.props.downloadImage(contact);
          return (
            <div key={contact.name} >

             <ContactRow  contact={contact} />

            </div>
          );
        });
  }

  render() {
    return(

      <ul>
        {this.renderList()}

      </ul>


    );
  };
}

// function mapStateToProps(state) {
//   //whatever is returned from here will show up as props inside of ContactsList
//   return {
//     contacts: state.contacts,
//     contact: state.activeContact
//   };
// }
function mapStateToProps({contacts}) {
  return {contacts};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({downloadImage}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
// export default connect(mapStateToProps)(ContactsList);
