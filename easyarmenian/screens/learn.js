import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class learn extends React.Component {
  gotoAlphabet = () => {
    this.props.navigation.navigate('Alphabet');
  };
  gotoCommunication = () => {
    this.props.navigation.navigate('Communication');
  };
  gotoFood = () => {
    this.props.navigation.navigate('Food');
  };
  gotoNature = () => {
    this.props.navigation.navigate('Nature');
  };
  gotoNumbers = () => {
    this.props.navigation.navigate('Numbers');
  };
  gotoColors = () => {
    this.props.navigation.navigate('Colors');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.albt} onPress={this.gotoAlphabet}>
          <Text style={styles.albtxt}> Alphabet </Text>
          <Text style={styles.albtxt}> Այբուբեն </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoCommunication}>
          <Text style={styles.albtxt}> Communication </Text>
          <Text style={styles.albtxt}> Հաղորդակցում </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoFood}>
          <Text style={styles.albtxt}> Food</Text>
          <Text style={styles.albtxt}> Սնունդ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoNature}>
          <Text style={styles.albtxt}> Nature </Text>
          <Text style={styles.albtxt}> Բնություն </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoNumbers}>
          <Text style={styles.albtxt}> Numbers</Text>
          <Text style={styles.albtxt}> Թվեր</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoColors}>
          <Text style={styles.albtxt}> Colours </Text>
          <Text style={styles.albtxt}> Գույներ </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#70C19A',
    padding: 8,
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
  },

  albt: {
    width: 280,
    height: 80,
    backgroundColor: 'white',
    color: '#70C19A',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },

  albtxt: {
    alignItems: 'center',
    marginVertical: 4,
    fontSize: 20,
    color: '#70C19A',
    fontWeight: 'bold',
  },
});
