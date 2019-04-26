import React from 'react';
import { Text, View, Button, Header } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ResultsScreen from './Results';
import styles from './Style.js';
import BoardScreen from './BoardScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log('NAVIGATE', this.props);
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

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: { screen: App },
    Results: { screen: ResultsScreen },
    Board: { screen: BoardScreen },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
