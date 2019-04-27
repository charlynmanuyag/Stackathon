import React from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

export default class BoardScreen extends React.Component {
  constructor() {
    super();
    this.getAllBars = this.getAllBars.bind(this);
  }
  async getAllBars() {
    try {
      await AsyncStorage.getAllKeys().then(response => {
        console.log('RESPONSE', response);
      });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    this.getAllBars();
    return (
      <View>
        <Text>Here is your board!</Text>
      </View>
    );
  }
}
