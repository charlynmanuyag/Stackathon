import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './Style.js';

export default class BarContainer extends React.Component {
  constructor() {
    super();
    this.handlePinMe = this.handlePinMe.bind(this);
  }

  handlePinMe() {
    console.log('i was pinned');
  }
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
              {bar.is_closed ? <Text>Open</Text> : <Text>Closed</Text>}
              <TouchableOpacity onPress={this.handlePinMe} style={styles.pinMe}>
                <Text>Pin Me</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
