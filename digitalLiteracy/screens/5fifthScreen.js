import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class FifthScreen extends React.Component {
  press1 = () => {
    this.props.navigation.navigate('Sixth');
  };
  press2 = () => {
    this.props.navigation.navigate('Eighth');
  };
  press3 = () => {
    this.props.navigation.navigate('TwentySecond');
  };
  press4 = () => {
    this.props.navigation.navigate('TwentyThird');
  };
  render() {
   
    return (
      <ScrollView style={styles.viewStyle}>
        <View style={styles.mains}>
          <Text style={styles.paragraph}>
            COURSE 1. HOW CAN YOU USE COMPUTER?
          </Text>
          <View style={styles.main6}>
            <TouchableOpacity style={styles.button1} onPress={this.press1}>
              <Image style={styles.image1} source={require('../images/img5.PNG')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={this.press2}>
              <Image style={styles.image1} source={require('../images/img6.PNG')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={this.press3}>
              <Image style={styles.image1} source={require('../images/img7.PNG')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={this.press4}>
              <Image style={styles.image1} source={require('../images/img8.PNG')} />
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
