import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

export default function Homepage({ navigation }) {
  return (
    <ImageBackground source={require('../assets/back.png')} style={styles.container}>
      <View style={styles.body}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.backText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: wh * 0.03,
  },
  body: {
    width: ww,
    height: wh * 0.87,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: wh * 0.5,
    resizeMode: 'contain',
  },
  btnArea: {
    width: ww,
    height: wh * 0.13,
  },
  btn: {
    backgroundColor: '#CDDF00',
    width: '40%',
    height: '60%',
    borderTopRightRadius: Dimensions.get('window').height * 0.024,
    borderTopLeftRadius: Dimensions.get('window').height * 0.024,
    borderBottomRightRadius: Dimensions.get('window').height * 0.024,
    borderBottomLeftRadius: Dimensions.get('window').height * 0.024,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: Dimensions.get('window').height * 0.03,
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
