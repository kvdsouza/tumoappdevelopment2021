
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


export default class FirstScreen extends React.Component {
  press = () => {
    this.props.navigation.navigate('Second');
  };
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.title}>Digital literacy Academy</Text>
        <Text style={styles.paragraph}>Here you will understand the basics of how to use computer,
          smartphones and Internet.
        </Text>
   <Image style={styles.image} source={require('../images/girl.png')}/>
     <TouchableOpacity style={styles.button} onPress={this.press}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'white',
    padding: 17,
    alignItems: 'center',
    marginLeft: 42,
    marginRight: 42,
    borderRadius: 35,
   
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginTop: "15%",
    marginLeft: 42,
    marginRight: 42,
    color: '#FFFFFF',
  },
  image: {
    width: 356,
    height: 280,
    alignSelf: 'center',
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
  },

  paragraph: {
    marginTop: 38,
    marginLeft: 42,
    marginRight: 42,
    fontSize: 18,
    fontStyle: 'normal',
    fontFamily: 'Inter',
    color: '#FFFFFF',
  },
});
