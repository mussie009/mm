import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { uploadFile } from '../actions/index';
import { bindActionCreators } from 'redux';



class Images extends Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
  }
  uploadFile(acceptedFiles, rejectedFiles) {
    console.log('from accepted file: ', acceptedFiles);
    this.props.uploadFile(acceptedFiles, this.props.activeContact);
    // console.log(this.props.contacts);
  }

  render(){
    return(
      <div>
        Images component
        <Dropzone onDrop={this.uploadFile}/>
      </div>
    );
  }
};

// function mapStateToProps(state) {
//   //whatever is returned from here will show up as props inside of Images
//   return {
//     images: state.images,
//     contact: state.activeContact
//   };
// }
function mapStateToProps({images, activeContact}) {
  return {images, activeContact};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({uploadFile}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Images);
// export default connect(mapStateToProps)(Images);


//<Dropzone onDrop={this.uploadFile.bind(this)}/>
