import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 400,
    height: 300,
  },
  pinMe: {
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  bars: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  tabContainer: {
    flex: 1,
    width: 425,
    justifyContent: 'flex-end',
  },
  topView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  start: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
  },
  resultsTitle: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    fontFamily: 'MarkerFelt-Thin',
    fontSize: 28,
  },
  barInfo: {
    fontFamily: 'MarkerFelt-Thin',
    fontSize: 17,
  },
  boardContainer: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 15,
  },
  unpinMe: {
    backgroundColor: 'maroon',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default styles;
