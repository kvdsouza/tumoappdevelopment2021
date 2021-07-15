import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Numbers թվեր (tver)</Text>
        <Text style={styles.paragraph}> 0 Zero զրո (zro) </Text>
        <Text style={styles.paragraph}>1 One մեկ (mek) </Text>
        <Text style={styles.paragraph}>2 Two երկու (yerku) </Text>
        <Text style={styles.paragraph}>3 Three երեք (yerek) </Text>
        <Text style={styles.paragraph}>4 Four չորս (chors)</Text>
        <Text style={styles.paragraph}>5 Five հինգ (hing)</Text>
        <Text style={styles.paragraph}>6 Six վեց (vets) </Text>
        <Text style={styles.paragraph}>7 Seven յոթ (yot) </Text>
        <Text style={styles.paragraph}>8 Eight ութ (ut) </Text>
        <Text style={styles.paragraph}>9 Nine ինը (iny) </Text>
        <Text style={styles.paragraph}>10 Ten տասը (tasy)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
    width: windowWidth,
    height: windowHeight,
  },
  paragraph: {
    margin: 24,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#4ac497',
    padding: 10,
    borderRadius: 10,
    color: '#fff',
  },
  title: {
    margin: 24,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    color: '#4ac497',
  },
});
