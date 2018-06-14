
import { FETCH_USER } from '../actions/types';
export default function(state = null, action) {
  // console.log('From auth reducer: ', action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;

  }
}
