import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_CONTACTS } from './types';
import { SELECT_CONTACT } from './types';
import { UPLOAD_PHOTO } from './types';
import { DOWNLOAD_IMAGES } from './types';
import _ from 'lodash';
// import superagent from 'superagent';
// import axiosFileupload from 'axios-fileupload';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload: res.data});
};
//Above code is same as down below, above is js2017.
// export const fetchUser = () =>
//   function (dispatch) {
//       axios.get('/api/current_user')
//       .then((res) => dispatch({type: FETCH_USER, payload: res}) )
//  };
export const uploadFiletxt = (files) => async dispatch => {
    const image = files[0];
    var formData = new FormData();
    formData.append('file', image);
    const token = localStorage.getItem("token");
    const res = await axios({
      method:'put',
      url: 'https://graph.microsoft.com/v1.0/me/drive/root:/SyncContacts/myUpload.txt:/content',
      headers : {
        'Authorization': `Bearer ${token}`,
        'Content-type': ' text/plain'
      },
      data:formData,
      json: true

    });

    dispatch({type: UPLOAD_PHOTO, payload: res.data});
};

export const uploadFile = (files, contact) =>
  function(dispatch) {

    const image = files[0];
    const token = localStorage.getItem("token");

    var xhr = new XMLHttpRequest();

    xhr.open("PUT", `https://graph.microsoft.com/v1.0/me/contacts/${contact.id}/photo/$value`, true);
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.setRequestHeader('Content-Type', 'image/jpeg');
    xhr.onload = function() {
      alert(xhr.responseText);


      if(this.status === 200){
          dispatch({type: UPLOAD_PHOTO, payload: xhr.response});
      }
    }
    xhr.send(image);
};

export const downloadImage = (contact) =>
  function(dispatch) {
    var val = _.get(contact, "id");
    const token = localStorage.getItem("token");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", `https://graph.microsoft.com/v1.0/me/contacts/${val}/photo/$value`, true);

    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.setRequestHeader('Content-Type', 'image/jpeg');
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {
      var blob = new Blob([xhr.response], {type: "image/jpeg"});
      if(this.status === 200){
         var payload = {};
         payload[val] = blob;
          dispatch({type: DOWNLOAD_IMAGES, payload:payload });
      }
    }

    xhr.send();
};

export const fetchContacts = () => async dispatch => {
  const token = localStorage.getItem("token");
  const res = await axios({
    method:'get',
    url: 'https://graph.microsoft.com/v1.0/me/contacts',
    headers: {
      'Authorization': `Bearer ${token}`, 
    },
    json: true
  });
  //console.log(res);
  dispatch({type: FETCH_CONTACTS, payload: res.data});
};


export const selectContact = (contact) => {
  // console.log("selectContact action", contact);
  return {
      type: SELECT_CONTACT,
      payload: contact
    };
}
