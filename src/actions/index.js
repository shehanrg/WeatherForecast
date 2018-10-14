import { RETRIEVE_WEATHER_DETAILS, RETRIEVE_WEATHER_DETAILS_SUCCESS } from './Types';

export const retrieveWeatherDetails = dispatch => (dispatch) => {
  fetch('http://api.wunderground.com/api/c18524cc7fbbc7c8/hourly/q/CA/San_Francisco.json')
    .then(response => response.json())
    .then((responseJson) => {
      dispatch({
        type: RETRIEVE_WEATHER_DETAILS_SUCCESS,
        payload: responseJson.hourly_forecast,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
