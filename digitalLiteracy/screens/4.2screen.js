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
    this.props.navigation.navigate('Fifth2');
  };
  render() {
   
 
    return (
     /* <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
<SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }} */
      <View style={styles.container}>
      <View style={styles.con3}>
        <Text style={styles.title}>COURSE 3</Text>
        <Image style={styles.image} source={require('../images/girl2.png')} />
       </View>
        <View style={styles.cont}>
        <Text style={styles.titl}>HOW TO USE 
SOCIAL MEDIA?</Text>
        <Text style={styles.paragraph}>When we go online, we can often do many things that threaten our safety without thinking a lot about it. Its important to think twice about what you share online and keep your safety in mind.


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
