import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ResultsScreen from './Results';
import styles from './Style.js';
import BoardScreen from './BoardScreen';
import TabNavigator from './TabNavigator';

class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.images}>
            <Image source={require('./img/beer.png')} />
            <Image source={require('./img/cocktail.png')} />
          </View>
          <Text
            style={{ fontFamily: 'Marker Felt', fontSize: 30, marginTop: 20 }}
          >
            Welcome To Crawl!
          </Text>
          <TouchableOpacity
            style={styles.start}
            onPress={() => navigate('Results')}
          >
            <Text style={{ fontFamily: 'MarkerFelt-Thin', fontSize: 17 }}>
              Start Your Bar Crawl
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          <TabNavigator navigate={navigate} />
        </View>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: { screen: App },
  Results: { screen: ResultsScreen },
  Board: { screen: BoardScreen },
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
