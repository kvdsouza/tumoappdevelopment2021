import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class FirstScreen extends React.Component {
  gotoLearn = () => {
    this.props.navigation.navigate('Learn');
  };
  gotoTest = () => {
    this.props.navigation.navigate('Test');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 2 }}></View>
        <TouchableOpacity style={styles.lbt} onPress={this.gotoLearn}>
          <Text style={styles.lbtxt}> LEARN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tbt} onPress={this.gotoTest}>
          <Text style={styles.lbtxt}> TEST </Text>

            <Image style = {styles.img} source = {require ('../assets/image.png')}/>
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
  // paragraph: {
  //   margin: 24,
  //   fontSize: 45,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   bottom: 150,
  //   color: 'grey',
  // },

  lbt: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    margin:10,
  
    
  },
    tbt: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom:350,
   
  },
  lbtxt: {
    fontSize: 20,
    color: '#70C19A',
    marginTop:30,
  },
  img:{
    marginTop: 150,
    width: windowWidth*1,
    height: windowHeight *0.45,

  }
});
