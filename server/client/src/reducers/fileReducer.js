import { UPLOAD_FILE } from '../actions/types';

export default function(state = [], action) {
  console.log('From  file reducer: ', action);
  switch (action.type) {
    case UPLOAD_FILE:
      return [ action.payload, ...state ];
    default:
      return state;

  }
}
