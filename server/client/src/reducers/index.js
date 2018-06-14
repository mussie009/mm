import { combineReducers } from 'redux';
import authReducer from './authReducer';
import contactsReducer from './contactsReducer';
import activeContactReducer from './activeContactReducer';
import imageReducer from './imageReducer';
import fileReducer from './fileReducer';
import downloadedImageReducer from './downloadedImageReducer';

export default combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  activeContact: activeContactReducer,
  images: imageReducer,
  files: fileReducer,
  downloadedImages: downloadedImageReducer
});
