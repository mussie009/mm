import React, { Component } from 'react';
import  { connect } from 'react-redux';
// import _ from 'lodash';
// import Image from 'react-image-file';
// import { bindActionCreators } from 'redux';
// import { downloadImage } from '../actions/index';

class ProfilePhotoes extends Component {


  // constructor(props) {
  //   super(props);
  // }

  renderList() {
    let style = {
      width: '41px',
      margin: '-4px 9px -10px',
      borderRadius: '4px'
    }

    if(!this.props.downloadedImages[this.props.contact.id]){
      return <div>Image downloading...</div>
    }


        return (
              <li key={this.props.contact.id} className="collection-item ">
              <img id={"img-"+this.props.contact.id} alt="" style={style} />
              </li>
          );
      }

  render(){
console.log("in imagw",this.props.contact)

    return(

        <div>
        {this.renderList()}
      </div>

    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update", this.props.downloadedImages, this.props.contact.id);

    // var imageBlob = this.props.downloadedImages[this.props.contact.id]

    // for (var key in this.props.downloadedImages) {
    //   console.log('KEY VALUE:', key, this.props.downloadedImages[key]);
    //   var blob = this.props.downloadedImages[key];
    //     var base64data;
    //     var reader = new window.FileReader();
    //     reader.readAsDataURL(blob);
    //     reader.onloadend = function() {
    //           base64data = reader.result;
    //           console.log("TEST base64 data: ", base64data );
    //           // var image = document.getElementById("img-"+index);
    //           // image.src = base64data;
    //     }

    var imageBlob = this.props.downloadedImages[this.props.contact.id]
    console.log(imageBlob);

if (imageBlob != null) {
  var base64data;
    var reader = new window.FileReader();
    reader.readAsDataURL(imageBlob);
    reader.contactId = this.props.contact.id;
    reader.onloadend = function() {
          base64data = reader.result;
          console.log("test",this.contactId);
          var image = document.getElementById("img-"+this.contactId);
          if (image) {
            image.src = base64data;
          }

    }
}


  }
}

function mapStateToProps({downloadedImages}){
  return {downloadedImages};
}
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({downloadImage}, dispatch);
//  }
export default connect(mapStateToProps)(ProfilePhotoes);
