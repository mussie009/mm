import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { uploadFiletxt } from '../actions/index';
import { bindActionCreators } from 'redux';



class Files extends Component {
  constructor(props) {
    super(props);
    this.uploadFiletxt = this.uploadFiletxt.bind(this);
  }
  uploadFiletxt(acceptedFiles, rejectedFiles) {
    console.log(acceptedFiles);
    this.props.uploadFiletxt(acceptedFiles);
  }

  render(){
    let style = {

      cursor: 'pointer'
    }
    return(
      <div >
        <p className="center fontStyle">Click inside the box or drag and drop to upload file.</p>
        <div className="drop" ><Dropzone onDrop={this.uploadFiletxt}/></div>
      </div>
    );
  }
};

function mapStateToProps({files}) {
  return {files};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({uploadFiletxt}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Files);
// export default connect(mapStateToProps)(Images);


//<Dropzone onDrop={this.uploadFile.bind(this)}/>
