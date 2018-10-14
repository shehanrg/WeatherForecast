import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends PureComponent {

    render() {
        const { icon_url, condition, temp } = this.props.weatherItem.item;
    return (
      <View style={{backgroundColor: 'grey'}}>
        <CardSection>
            <Image source={{uri: icon_url}} style={{ width: 50, height: 50}} />
            <Text style={styles.titleStyle}>{condition}</Text>
            <Text style={styles.descriptionStyle}>{`${temp.english} °F`}</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft: 15
    },
    descriptionStyle: {
        fontSize: 15,
        fontWeight: '800',
    }
  };