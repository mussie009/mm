import { SELECT_CONTACT } from '../actions/types';

export default function(state = null, action) {
  console.log('From  activeContactReducereducer: ', action);
  switch (action.type) {
    case SELECT_CONTACT:
      return action.payload || null;
    default:
      return state;

  }
}
