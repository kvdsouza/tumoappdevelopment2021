import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.paragraph}>Bread հաց (hats)</Text>
        <Image style={styles.img} source={require('../assets/bread.jpg')} />
        <Text style={styles.paragraph}>Water ջուր (jur)</Text>
        <Image style={styles.img} source={require('../assets/water.jpg')} />
        <Text style={styles.paragraph}>An egg ձու (dzu)</Text>
        <Image style={styles.img} source={require('../assets/egg.jpg')} />
        <Text style={styles.paragraph}>Milk կաթ (kat)</Text>
        <Image style={styles.img} source={require('../assets/milk.jpg')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  paragraph: {
    margin: 13,
    marginTop:5,
    marginBottom:5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#4ac497',
    padding: 10,
    borderRadius:10,
    color:'#fff',
    width:'90%'
  },
  img: {
    borderWidth:3,
    borderColor:'grey',
    width: '90%',
    height: 200,
    borderRadius:10,
    alignSelf:'center'
  },
});