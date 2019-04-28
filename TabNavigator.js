import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class TabNavigator extends React.Component {
  render() {
    const { navigate } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Home')}
        >
          <Text
            style={{
              fontFamily: 'MarkerFelt-Thin',
              fontSize: 15,
              color: 'white',
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Results')}
        >
          <Text
            style={{
              fontFamily: 'MarkerFelt-Thin',
              fontSize: 15,
              color: 'white',
            }}
          >
            Results
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Board')}
        >
          <Text
            style={{
              fontFamily: 'MarkerFelt-Thin',
              fontSize: 15,
              color: 'white',
            }}
          >
            Board
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: 141,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'black',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderLeftColor: 'black',
    borderLeftWidth: StyleSheet.hairlineWidth,
    padding: 20,
  },
});
