import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { retrieveWeatherDetails } from '../actions';

class WeatherDisplay extends Component {
  componentDidMount = () => {
    this.props.retrieveWeatherDetails();
  };

  render() {
      console.log(this.props.weatherDetails);
    return (
      <View>
        <Text> Oh hello </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { weatherDetails } = state.weather;
  return {
    weatherDetails,
  };
};

export default connect(
  mapStateToProps,
  { retrieveWeatherDetails },
)(WeatherDisplay);
