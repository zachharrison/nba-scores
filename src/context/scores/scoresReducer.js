import { GET_SCORES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SCORES:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }
};
