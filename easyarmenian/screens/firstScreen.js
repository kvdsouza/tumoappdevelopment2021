import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default class FirstScreen extends React.Component {
  gotoScreenTwo = () => {
    this.props.navigation.navigate('Second');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Hello! Welcome to</Text>
        <Image style={styles.img} source={require('../assets/logo.png')}/>
        <TouchableOpacity style={styles.bt} onPress={this.gotoScreenTwo}>
          <Text style={styles.btxt}> GET STARTED!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
  img: {
    width: windowWidth * 1.3,
    height: windowHeight * 0.25,
    marginTop: 15,
    alignSelf: 'center',
    marginLeft: 0.28 * windowWidth,
    justifyContent:'center',
  },
  bt: {
    width: windowWidth * 0.75,
    height: windowHeight * 0.1,
    backgroundColor: '#70C19A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
  },

  btxt: {
    fontSize: 20,
    color: 'white',
  },
});
