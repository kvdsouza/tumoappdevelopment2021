import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class test extends React.Component {
  gotoAlphabetTest = () => {
    this.props.navigation.navigate('AlphabetTest');
  };
  gotoCommunicationTest = () => {
    this.props.navigation.navigate('CommunicationTest');
  };
  gotoFoodTest = () => {
    this.props.navigation.navigate('FoodTest');
  };
  gotoNatureTest = () => {
    this.props.navigation.navigate('NatureTest');
  };
  gotoNumbersTest = () => {
    this.props.navigation.navigate('NumbersTest');
  };
  gotoColorsTest = () => {
    this.props.navigation.navigate('ColorsTest');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.albt} onPress={this.gotoAlphabetTest}>
          <Text style={styles.albtxt}> Alphabet </Text>
          <Text style={styles.albtxt}> Այբուբեն </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.albt}
          onPress={this.gotoCommunicationTest}>
          <Text style={styles.albtxt}> Communication </Text>
          <Text style={styles.albtxt}> Հաղորդակցում </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoFoodTest}>
          <Text style={styles.albtxt}> Food</Text>
          <Text style={styles.albtxt}> Սնունդ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoNatureTest}>
          <Text style={styles.albtxt}> Nature </Text>
          <Text style={styles.albtxt}> Բնություն </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoNumbersTest}>
          <Text style={styles.albtxt}> Numbers</Text>
          <Text style={styles.albtxt}> Թվեր</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albt} onPress={this.gotoColorsTest}>
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
  },

  albt: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    margin: 15,
    justifyContent: 'center',
  },

  albtxt: {
    alignItems: 'center',
    fontSize: 20,
    color: '#70C19A',
    fontWeight: 'bold',
  },
  // paragraph: {
  //   textAlign: 'center',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   color: '#70C19A',
  // },
});
