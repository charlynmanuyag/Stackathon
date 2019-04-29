import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import styles from './Style.js';

export default class BarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePinMe = this.handlePinMe.bind(this);
    this.storeBarId = this.storeBarId.bind(this);
    this.getBarId = this.getBarId.bind(this);
    this.clearData = this.clearData.bind(this);
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
    console.log('i was pinned');
    this.getBarId(barId).then(response => {
      if (!response) {
        this.storeBarId(barId, barInfo);
        Alert.alert('You successfully pinned me!');
      } else {
        Alert.alert('You already pinned me!');
      }
    });
  }
  clearData() {
    AsyncStorage.clear();
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
                style={{ width: 200, height: 200, borderRadius: 10 }}
              />
              <Text
                style={{
                  fontFamily: 'MarkerFelt-Thin',
                  fontSize: 17,
                  marginTop: 10,
                }}
              >
                Name: {bar.name}
              </Text>
              <Text style={styles.barInfo}>
                Location: {bar.location.display_address.toString(' ')}
              </Text>
              {bar.is_closed ? (
                <Text style={styles.barInfo}>Closed</Text>
              ) : (
                <Text style={styles.barInfo}>Open</Text>
              )}
              <Text style={styles.barInfo}>Phone: {bar.display_phone}</Text>
              <Text style={styles.barInfo}>Rating: {bar.rating} stars</Text>
              <Text
                style={{
                  fontFamily: 'MarkerFelt-Thin',
                  fontSize: 17,
                  marginBottom: 10,
                }}
              >
                Price: {bar.price}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.handlePinMe(bar.id, {
                    name: bar.name,
                    image: bar.image_url,
                    location: bar.location.display_address.toString(' '),
                    phone: bar.display_phone,
                    rating: bar.rating,
                    price: bar.price,
                    longitude: bar.coordinates.longitude,
                    latitude: bar.coordinates.latitude,
                  })
                }
                style={styles.pinMe}
              >
                <Text
                  style={{
                    fontFamily: 'MarkerFelt-Thin',
                    fontSize: 17,
                    color: 'white',
                  }}
                >
                  Pin Me
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <Button onPress={this.clearData} title="Clear Data" />
      </View>
    );
  }
}
