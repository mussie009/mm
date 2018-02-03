import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
var FormData = require('form-data');
var fs = require('fs');
// import axios from 'axios';

class Images extends Component {
  uploadFile(files){
    // console.log('uploadFile: ');
    const image = files[0];
  //  console.log(image);
    var formData = new FormData();
    formData.append('file', image);
    console.log(formData.get('file'));
    // let data = new FormData();
    // data.append('file', image, file.fileName);
    // console.log(data);

    // const URL =  `https://graph.microsoft.com/v1.0/me/contacts/{id}/photo/$value`;
    // let uploadRequest = axios.put(URL);
    // uploadRequest.attach('file', image)//please upload this file
    // object.keys(params).forEach((key)) => {// here
    //   uploadRequest.field(key, params[key])
    // });
    // //then you you make the request
    // uploadRequest.end((err,resp) => {
    //   if(err){
    //     console.log(err);
    //   }
    //   console.log('Upload complete', JSON.stringify(resp.body));// browser consol shows your the image uploaded
    // })
  }

  render(){
    return(
      <div>
        Images component
        <Dropzone onDrop={this.uploadFile.bind(this)}/>
      </div>
    );
  }
};

export default Images;
