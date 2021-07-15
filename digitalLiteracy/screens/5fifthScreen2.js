import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Fifth1Screen extends React.Component {
  press1 = () => {
    this.props.navigation.navigate('Sixth2');
  };
  press2 = () => {
    this.props.navigation.navigate('Eighth2');
  };
  press3 = () => {
    this.props.navigation.navigate('TwentySecond2');
  };
  press4 = () => {
    this.props.navigation.navigate('TwentyThird2');
  };
  render() {
   
    return (
      <ScrollView style={styles.viewStyle}>
        <View style={styles.mains}>
          <Text style={styles.paragraph}>
          COURSE 3. HOW TO 
USE SOCIAL MEDIA?
          </Text>
          <View style={styles.main6}>
            <TouchableOpacity style={styles.button1} onPress={this.press1}>
              <Image style={styles.image1} source={require('../images/nkar1.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={this.press2}>
              <Image style={styles.image1} source={require('../images/nkar2.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={this.press3}>
              <Image style={styles.image1} source={require('../images/nkar3.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={this.press4}>
              <Image style={styles.image1} source={require('../images/nkar4.png')} />
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mains: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
    padding: 8,
    backgroundColor: 'white',
  },
  main6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '5%',
    
  },
  button1: {
    marginTop: 7,
    marginBottom: 7,
    width: 307,
    height: 142,
  },
  button2: {
    marginTop: 7,
    marginBottom: "8%",
    width: 307,
    height: 142,
  },
  image1: {
    width: 307,
    height: 142,
  },
  
  
});
