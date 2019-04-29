import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  logVisibleChange,
} from 'react-native';
import styles from './Style';

export default class BoardContainer extends React.Component {
  componentDidUpdate(nextProps, nextState) {
    if (this.state.someStatefulValue !== nextState.someStatefulValue) {
      nextProps.onChange(nextState.someStatefulValue);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isVisible !== prevProps.isVisible) {
      logVisibleChange(this.props.isVisible);
    }
  }
  render() {
    const bars = this.props.bars;
    return (
      <View>
        {bars.map(bar => {
          return (
            <View style={styles.boardContainer} key={bar[0]}>
              <Image
                source={{
                  uri: `${JSON.parse(bar[1].replace(/\\/g, ' ')).image}`,
                }}
                style={{ width: 200, height: 200, borderRadius: 10 }}
              />
              <Text style={styles.barInfo}>
                Name: {JSON.parse(bar[1].replace(/\\/g, ' ')).name}
              </Text>
              <Text style={styles.barInfo}>
                Address: {JSON.parse(bar[1].replace(/\\/g, ' ')).location}
              </Text>
              <Text style={styles.barInfo}>
                Phone: {JSON.parse(bar[1].replace(/\\/g, ' ')).phone}
              </Text>
              <Text style={styles.barInfo}>
                Rating: {JSON.parse(bar[1].replace(/\\/g, ' ')).rating} stars
              </Text>
              <Text style={styles.barInfo}>
                Price: {JSON.parse(bar[1].replace(/\\/g, ' ')).price}
              </Text>
              <TouchableOpacity
                style={styles.unpinMe}
                onPress={() => this.props.handleUnpin(bar[0])}
              >
                <Text
                  style={{
                    fontFamily: 'MarkerFelt-Thin',
                    fontSize: 17,
                    color: 'white',
                  }}
                >
                  Unpin Me
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
