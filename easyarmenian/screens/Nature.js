import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Nature Բնություն</Text>
        <Text style={styles.paragraph}> A cat Կատու (katu) </Text>
        <Image style={styles.img} source={require('../assets/cat.jpg')} />
        <Text style={styles.paragraph}>Cloud Ամպ (Amp) </Text>
        <Image style={styles.img} source={require('../assets/cloud.jpg')} />
        <Text style={styles.paragraph}> Tree Ծառ (Tsarr) </Text>
        <Image style={styles.img} source={require('../assets/tree.jpg')} />
        <Text style={styles.paragraph}>Grass Խոտ (Khot)</Text>
        <Image style={styles.img} source={require('../assets/grass.jpg')} />
      </ScrollView>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    padding: 8,
    width: windowWidth,
    height: windowHeight,
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
  title:{
    margin: 24,
    marginTop:5,
    marginBottom:5,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#fff',
    padding: 10,
    borderRadius:10,
    color:'#4ac497'
  }
});
