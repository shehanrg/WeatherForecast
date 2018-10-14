import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { retrieveWeatherDetails } from '../actions';
import { Spinner } from './common';
import ListItem from './ListItem';

class WeatherDisplay extends Component {
  componentDidMount = () => {
    this.props.retrieveWeatherDetails();
  };

  renderItem(weatherItem) {
      return (<ListItem weatherItem={weatherItem} />);
  }

  render() {
      console.log(this.props.weatherDetails);
    const { weatherDetails } = this.props;
    return (
      <FlatList
        data={weatherDetails}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.key}
      />
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
