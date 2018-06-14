import { UPLOAD_PHOTO } from '../actions/types';

export default function(state = [], action) {
  console.log('From  images reducer: ', action);
  switch (action.type) {
    case UPLOAD_PHOTO:
      return [ action.payload, ...state ];
    default:
      return state;

  }
}
