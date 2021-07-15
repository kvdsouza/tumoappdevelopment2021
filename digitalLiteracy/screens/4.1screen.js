import * as React from 'react';
import {
  Platform,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
/*import React, { Component, Fragment } from 'react'; */

export default class Fourth1Screen extends React.Component {
  press = () => {
    this.props.navigation.navigate('Fifth1');
  };
  render() {
   
 
    return (
     /* <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
<SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }} */
      <View style={styles.container}>
      <View style={styles.con3}>
        <Text style={styles.title}>COURSE 2</Text>
        <Image style={styles.image} source={require('../images/girl2.png')} />
       </View>
        <View style={styles.cont}>
        <Text style={styles.titl}>HOW TO  
PROTECT YOUR DATA?</Text>
        <Text style={styles.paragraph}>While there are many positive things we can do online, we should always be aware of the safety risks. There are many scams that online predators use to access peoples information online.


</Text>
       <TouchableOpacity style={styles.button} onPress={this.press}>
          <Text style={styles.buttonText}>Lets go</Text>
        </TouchableOpacity> 
      </View>
      </View>
      /*  </SafeAreaView>
      </Fragment> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  con3: {
    backgroundColor:"white",
  },
  cont: {
    backgroundColor: '#181818',
    width: "100%",
    height: 312,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  titl: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Popins',
    marginLeft: 42,
    marginRight: 42,
    marginTop: '5%',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 42,
    marginRight: 42,
    borderRadius: 30,
    marginTop: "2%",
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginTop: "6%",
    alignSelf: "center",
    color: 'black',
  },

  paragraph: {
    fontSize: 15,
    marginLeft: 42,
    marginRight: 42,
    marginBottom: 10,
    marginTop: 20,
    fontStyle: 'normal',
    fontFamily: 'Inter',
    color: '#FFFFFF',
  },
});
