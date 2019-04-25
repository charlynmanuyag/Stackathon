import React from 'react';
import { View, Text } from 'react-native';
import BarContainer from './BarContainer';

export default class ResultsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    console.log(
      'PROPS',
      JSON.stringify(navigation.getParam('latitude', 'someDefault'))
    );
    return (
      <View>
        <Text>HI</Text>
        <BarContainer />
      </View>
    );
  }
}
