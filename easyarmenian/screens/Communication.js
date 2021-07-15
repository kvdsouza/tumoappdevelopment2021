import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>COMMUNICATION Հաղորդակցություն</Text>
        <Image
        style={styles.img}
        source={require('../assets/comm.png')}/>
        <Text style={styles.paragraph}>Hello! Բարև (Bare՛v)</Text>
        <Text style={styles.paragraph}>
          How are you? Ինչպե՞ս ես (Inchpes es)
        </Text>
        <Text style={styles.paragraph}>I'm fine Լավ եմ (lav em) </Text>
        <Text style={styles.paragraph}>
          Thank you! Շնորհակալություն (shnorhakalut’yun)
        </Text>
        <Text style={styles.paragraph}>
          Please Խնդրում եմ (Khndrum em)
        </Text>
        <Text style={styles.paragraph}>
         Bye Ցտեսություն (ts’tesut’yun)
        </Text>
        <Text style={styles.paragraph}>
         Yes Այո (Ayo)
        </Text>
        <Text style={styles.paragraph}>
        No Ոչ (voch)
        </Text>
      </ScrollView>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor:'#fff'
  },
  paragraph: {
    margin: 24,
    marginTop:5,
    marginBottom:5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#4ac497',
    padding: 10,
    borderRadius:10,
    color:'#fff'
  },
  img:{
    alignSelf: 'center',
    margin:24,
    borderWidth:3,
    borderColor:'#4ac497',
    borderRadius:10,
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