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
  constructor(props) {
    super(props);
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
    console.log('IN MOUNT');
    this.getAllBars();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('IT DID UPDATE');
    console.log('PREV STATE', prevState);
    console.log('PREV PROPS', prevProps);
    console.log('PROPSS', this.state);
  }

  render() {
    console.log('IN RENDER');
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
