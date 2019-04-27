import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import BoardContainer from './BoardContainer.js';

export default class BoardScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      bars: null,
    };
    this.getAllBars = this.getAllBars.bind(this);
  }
  async getAllBars() {
    try {
      await AsyncStorage.getAllKeys().then(response => {
        return AsyncStorage.multiGet(response).then(result => {
          this.setState({ bars: result });
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getAllBars();
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text>Here is your board!</Text>
          {this.state.bars ? (
            <BoardContainer bars={this.state.bars} />
          ) : (
            <Text>Loading</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}
