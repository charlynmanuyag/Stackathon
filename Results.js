import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import BarContainer from './BarContainer';
import yelpToken from './secret.js';
import { Location, Permissions, MapView } from 'expo';
import styles from './Style.js';
import TabNavigator from './TabNavigator';

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      location: null,
      bars: null,
    };
    this.getYelpAPI = this.getYelpAPI.bind(this);
    this._getLocation = this._getLocation.bind(this);
  }
  async getYelpAPI(lat, long) {
    try {
      let url = `https://api.yelp.com/v3/businesses/search?term=bars&latitude=${lat}&longitude=${long}&limit=3`;
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
          this.setState({ bars: responseData });
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
    console.log('in results');
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={styles.container}>
            {this.state.location && this.state.bars ? (
              <View>
                <Text style={styles.resultsTitle}>
                  Here are the bars close to you{' '}
                </Text>
                <BarContainer bars={this.state.bars} {...this.props} />
                <Button
                  onPress={() => navigate('Board')}
                  title="Click to Board"
                  color="black"
                />
              </View>
            ) : (
              <Text
                style={{
                  flex: 1,
                  padding: 20,
                  justifyContent: 'center',
                }}
              >
                Hold on. We are looking bars near you!
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

// const { navigation } = this.props;
// console.log(navigation);
// console.log(
//   'PROPS',
//   JSON.stringify(navigation.getParam('latitude', 'someDefault'))
// );

// <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: this.state.location.coords.latitude,
//             longitude: this.state.location.coords.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         />

//  <Button
//               onPress={() =>
//                 navigate('Results', {
//                   latitude: this.state.location.coords.latitude,
//                 })
//               }
//               title="Press Me"
//               color="black"
//             />
