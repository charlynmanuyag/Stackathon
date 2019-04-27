import React from 'react';
import { View, Text, Image } from 'react-native';

export default class BoardContainer extends React.Component {
  render() {
    const bars = this.props.bars;
    return (
      <View>
        {bars.map(bar => {
          return (
            <View key={bar[0]}>
              <Image
                source={{
                  uri: `${JSON.parse(bar[1].replace(/\\/g, ' ')).image}`,
                }}
                style={{ width: 200, height: 200 }}
              />
              <Text>Name: {JSON.parse(bar[1].replace(/\\/g, ' ')).name}</Text>
              <Text>Phone: {JSON.parse(bar[1].replace(/\\/g, ' ')).phone}</Text>
              <Text>
                Rating: {JSON.parse(bar[1].replace(/\\/g, ' ')).rating} stars
              </Text>
              <Text>Price: {JSON.parse(bar[1].replace(/\\/g, ' ')).price}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
