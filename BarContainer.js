import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import styles from './Style.js';

export default class BarContainer extends React.Component {
  constructor() {
    super();
    this.handlePinMe = this.handlePinMe.bind(this);
    this.storeBarId = this.storeBarId.bind(this);
    this.getBarId = this.getBarId.bind(this);
  }

  async storeBarId(barId, barInfo) {
    try {
      await AsyncStorage.setItem(`${barId}`, JSON.stringify(barInfo));
    } catch (error) {
      console.error(error);
    }
  }
  async getBarId(barId) {
    let fetchedId = '';
    try {
      fetchedId = await AsyncStorage.getItem(`${barId}`);
    } catch (error) {
      console.error(error);
    }
    return fetchedId;
  }
  handlePinMe(barId, barInfo) {
    console.log('BAR INFO', barInfo);
    console.log('i was pinned');
    this.getBarId(barId).then(response => {
      if (!response) {
        this.storeBarId(barId, barInfo);
      } else {
        console.log('You already pinned me');
      }
    });
  }
  render() {
    const bars = this.props.bars.businesses;
    return (
      <View>
        {bars.map(bar => {
          return (
            <View key={bar.id} style={styles.bars}>
              <Image
                source={{ uri: `${bar.image_url}` }}
                style={{ width: 200, height: 200 }}
              />
              <Text>Name: {bar.name}</Text>
              <Text>
                Location: {bar.location.display_address.toString(' ')}
              </Text>
              {bar.is_closed ? <Text>Closed</Text> : <Text>Open</Text>}
              <Text>Phone: {bar.display_phone}</Text>
              <Text>Rating: {bar.rating} stars</Text>
              <Text>Price: {bar.price}</Text>
              <TouchableOpacity
                onPress={() =>
                  this.handlePinMe(bar.id, {
                    name: bar.name,
                    image: bar.image_url,
                    location: bar.location.display_address.toString(' '),
                    phone: bar.display_phone,
                    rating: bar.rating,
                    price: bar.price,
                  })
                }
                style={styles.pinMe}
              >
                <Text>Pin Me</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
