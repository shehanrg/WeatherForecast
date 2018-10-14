import { RETRIEVE_WEATHER_DETAILS, RETRIEVE_WEATHER_DETAILS_SUCCESS } from '../actions/Types';

const INITIAL_STATE = { loading: false, weatherDetails: null, error: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case RETRIEVE_WEATHER_DETAILS:
      return { ...state, loading: true, error: '' };
    case RETRIEVE_WEATHER_DETAILS_SUCCESS:
      return { ...state, ...INITIAL_STATE, weatherDetails: action.payload };
    default:
      return state;
  }
};
