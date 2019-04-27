import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Cochin',
  },
  map: {
    width: 400,
    height: 300,
  },
  pinMe: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  bars: {
    alignItems: 'center',
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
});

export default styles;
