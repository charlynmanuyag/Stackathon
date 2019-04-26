import React from 'react';
import { Text, View, Button } from 'react-native';
import { Location, Permissions, MapView } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ResultsScreen from './Results';
import BarContainer from './BarContainer';
import styles from './Style.js';

class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome To Crawl!</Text>
        <Button
          onPress={() => navigate('Results')}
          title="Start Your Bar Crawl"
          color="black"
        />
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  App: { screen: App },
  Results: { screen: ResultsScreen },
  Bars: { screen: BarContainer },
});

const Apps = createAppContainer(MainNavigator);

export default Apps;
