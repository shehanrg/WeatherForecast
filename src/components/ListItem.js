import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends PureComponent {
  render() {
    const {
      icon_url, condition, temp, FCTTIME,
    } = this.props.weatherItem.item;
    return (
      <View style={{ backgroundColor: 'grey' }}>
        <CardSection>
          <Image source={{ uri: icon_url }} style={{ width: 50, height: 50 }} />
          <View style={{flexDirection: 'column',}}>
            <Text style={styles.titleStyle} numberOfLines={2}>
              {`Forecast for ${FCTTIME.pretty}`}
            </Text>
            <Text style={styles.descriptionStyle}>
              {`Sky looks ${condition} and temprature is ${temp.english} °F`}
            </Text>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 12,
    paddingLeft: 12,
    fontWeight: '800',
  },
  descriptionStyle: {
    fontSize: 12,
    paddingLeft: 12
  },
};
