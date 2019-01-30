import { GET_FRIENDS } from '../actions/types';

const initialState = {
  friends: []
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload
      };
    default:
      return state;
  }
};

export default friends;
