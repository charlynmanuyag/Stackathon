import React from 'react';
import { Text, View, Image } from 'react-native';

export default class BarContainer extends React.Component {
  render() {
    const bars = this.props.bars.businesses;
    return (
      <View>
        {bars.map(bar => {
          return (
            <View key={bar.id}>
              <Image
                source={{ uri: `${bar.image_url}` }}
                style={{ width: 200, height: 200 }}
              />
              <Text>Name: {bar.name}</Text>
              <Text>
                Location: {bar.location.display_address.toString(' ')}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}
