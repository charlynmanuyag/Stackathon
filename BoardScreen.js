import React from 'react';
import { Text, View, AsyncStorage, ScrollView, Alert } from 'react-native';
import BoardContainer from './BoardContainer.js';
import styles from './Style.js';
import TabNavigator from './TabNavigator.js';

export default class BoardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: null,
    };
    this.getAllBars = this.getAllBars.bind(this);
    this.handleUnpin = this.handleUnpin.bind(this);
    this.unPin = this.unPin.bind(this);
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
  async unPin(id) {
    try {
      await AsyncStorage.removeItem(id);
    } catch (error) {
      console.error(error);
    }
  }
  handleUnpin(id) {
    this.unPin(id);
    Alert.alert('You succesfully unpinned me');
  }

  componentDidMount() {
    this.getAllBars();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ flex: 0.8, alignItems: 'center' }}>
            <Text style={styles.boardTitle}>Welcome to your board</Text>
            {this.state.bars ? (
              <BoardContainer
                bars={this.state.bars}
                handleUnpin={this.handleUnpin}
              />
            ) : (
              <Text>Loading</Text>
            )}
          </View>
        </ScrollView>
        <View>
          <TabNavigator navigate={navigate} />
        </View>
      </View>
    );
  }
}
