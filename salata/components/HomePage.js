import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
// import Secondpage from './secondpage';
// import { NavigationContainer } from '@react-navigation/native';

//
//<

function HomePage({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyImage}>
          <Image
            style={styles.salat}
            source={require('../assets/Homepage-Photo.png')}></Image>
          <Text style={styles.textFromImage}>Food Ordering{"\n"} Made easy</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Orders')}>
            <Text style={styles.orderText}> Order Now ! </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0.03 * Dimensions.get('window').height,
  },
  header: {
    width: '100%',
    height: '12.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
  },
  body: {
    width: '100%',
    height: '87.5%',
  },
  bodyImage: {
    width: '100%',
    height: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor:'magenta'
  },
  salat: {
    resizeMode: 'contain',
  },
  textFromImage: {
    fontSize: Dimensions.get('window').height * 0.024,
    color: '#E88758',
    position: 'absolute',
    right: '65%',
    bottom: '13%',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    height: 'auto',
  },
  footer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#568202',
    width: '40%',
    borderTopLeftRadius: Dimensions.get('window').height * 0.024,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default HomePage;
