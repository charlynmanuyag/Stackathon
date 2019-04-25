import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Location, Permissions, MapView } from 'expo';
import yelpToken from './secret.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ResultsScreen from './Results';
import BarContainer from './BarContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
      location: null,
    };
    this.getYelpAPI = this.getYelpAPI.bind(this);
    this._getLocation = this._getLocation.bind(this);
  }
  async getYelpAPI(lat, long) {
    try {
      let url = `https://api.yelp.com/v3/businesses/search?term=bars&latitude=${lat}&longitude=${long}&limit=2`;
      await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + yelpToken,
        },
      })
        .then(response => response.json())
        .then(responseData => {
          console.log('THEM DATA', responseData);
        });
    } catch (error) {
      console.error(error);
    }
  }

  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      console.log('PERMISSION NOT GRANTED!');
      this.setState({ errorMessage: 'PERMISSION NOT GRANTED' });
    }

    const location = await Location.getCurrentPositionAsync({});
    this.setState({ location });

    const longitude = this.state.location.coords.longitude;
    const latitude = this.state.location.coords.latitude;

    this.getYelpAPI(latitude, longitude);
  };

  componentDidMount() {
    this._getLocation();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.location ? (
          <View>
            <Text>HELLO</Text>
            <Text>
              Your current longitude is: {this.state.location.coords.longitude}
            </Text>
            <Text>
              Your current longitude is: {this.state.location.coords.latitude}
            </Text>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <Button
              onPress={() =>
                navigate('Results', {
                  latitude: this.state.location.coords.latitude,
                })
              }
              title="Press Me"
              color="black"
            />
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}

class YelpScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>IM IN YELP SCREEN</Text>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  App: { screen: App },
  Yelp: { screen: YelpScreen },
  Results: { screen: ResultsScreen },
  Bars: { screen: BarContainer },
});

const Apps = createAppContainer(MainNavigator);

export default Apps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 400,
    height: 300,
  },
});
