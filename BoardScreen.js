import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import BoardContainer from './BoardContainer.js';
import TabNavigator from './TabNavigator.js';
import styles from './Style.js';

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
    this.getAllBars();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ flex: 0.8 }}>
            <Text>Here is your board!</Text>
            {this.state.bars ? (
              <BoardContainer bars={this.state.bars} />
            ) : (
              <Text>Loading</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
