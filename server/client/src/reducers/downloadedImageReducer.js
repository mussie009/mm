import { DOWNLOAD_IMAGES} from '../actions/types';
import update from 'immutability-helper';

export default function(state = {}, action) {
  console.log('From  downloadedImageReducer: ', action);
  switch (action.type) {
    case DOWNLOAD_IMAGES:
      // return [ action.payload, ...state ];
      const newObj = update(state, {$merge: action.payload});
      console.log('Merged key value pairs :', newObj);// => {a: 5, b: 6, c: 7}
      return newObj;

    default:
      return state;
  }
}
