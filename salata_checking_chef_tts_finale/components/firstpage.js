import * as React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import Secondpage from './secondpage';
import Thirdpage from './thirdpage';
// import Secondpage from './secondpage';
// import { NavigationContainer } from '@react-navigation/native';

function Firstpage({ route, navigation }) {
  //const { orders } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Image style={styles.salat} source={require('../assets/salatik.jpg')} />
      </View>
      <View style={styles.second}>
        <Button
          onPress={() => {
            navigation.navigate("FourthPage")
          }}
          title="Chef"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SecondPage')}>
          <Text style={styles.buttonik}> Order Now! </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef7e6',
    height: '100%',
  },
  logo: {
    height: 120,
    width: '100%',
    marginBottom: 50,
  },
  head: {
    alignItems: 'center',
    resizeMode: 'cover',
  },

  salat: {
    height: 400,
    width: '100%',
    marginBottom: 100,
  },
  second: {
    alignItems: 'center',
  },

  buttonik: {
    fontSize: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default Firstpage;
