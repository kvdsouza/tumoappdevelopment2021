import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  press = () => {
    this.props.navigation.navigate('Fourth');
  };
 press1 = () => {
    this.props.navigation.navigate('Eresunyot1');
  };
     press2 = () => {
    this.props.navigation.navigate('Fourth1');
  };
     press3 = () => {
    this.props.navigation.navigate('Fourth2');
  };
  render() {
    return (
      <ScrollView style={styles.viewStyle}>
        <View style={styles.mains}>
          <Text style={styles.paragraph}>Great job!</Text>
          <Text style={styles.paragraph2}>
             Continue learning digital literacy and you would achieve even more.
          </Text>
          <Text style={styles.paragraph3}>Your progress is | 20%</Text>
          <TouchableOpacity onPress={this.press1} >
          <Text style={styles.paragraph4}>Your achievements</Text>
          </TouchableOpacity>
          <View style={styles.main6}>
            <TouchableOpacity style={styles.button1} onPress={this.press}>
              <Image style={styles.image1} source={require('../images/1.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={this.press2}>
              <Image style={styles.image1} source={require('../images/2.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={this.press3}>
              <Image style={styles.image1} source={require('../images/3.png')} />
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
  },
  viewStyle: {
    padding: 8,
    backgroundColor: 'white',
  },
  paragraph: {
    fontSize: 30,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  paragraph2: {
    fontSize: 20,
    textAlign: 'justify',
    margin: '5%',
    fontFamily: 'sans-serif-light',
  },
  paragraph3: {
    fontSize: 19,
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 3,
    borderRadius: 5,
    marginBottom: 15,
    width: "95%",
    marginLeft: '2%',
    fontFamily: 'sans-serif-light',
    alignSelf:'center',
  },
  paragraph4: {
    fontSize: 19,
    justifyContent: 'center',
    backgroundColor: '#F0EFFF',
    color: 'black',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 3,
    borderRadius: 5,
    marginBottom: 15,
    width: "95%",
    marginLeft: '2%',
    fontFamily: 'sans-serif-light',
    alignSelf:'center',
  },
  button1: {
    marginTop: 5,
    marginBottom: 5,
    width: 350,
    height: 180,
  },
  button2: {
    marginTop: 5,
    marginBottom: "7%",
    width: 350,
    height: 180,
  },
  image1: {
    width: 350,
    height: 180,
    alignSelf: "center",
  },
  main6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
