import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default ({ navigation }) => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.image} source={require('../images/o.png')} />
        </View>
        <View style={styles.space}>
          <Text style={styles.paragraph}>Hi! Type your name!</Text>

          <TextInput
            style={styles.name}
            value={text}
            onChangeText={setText}
            placeholder="    Enter your name"
          />

          <TouchableOpacity
            style={styles.next}
            onPress={() =>
              text
                ? navigation.navigate('Third', {name: text})
                : alert('Please Input the text')
            }>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                margin: 12,
                fontSize: 18,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    marginBottom: 1,
    marginTop: 1,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 261,
    height: 207,
    margin: '5%',
    marginTop: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 18,
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderRadius: 40,
    margin: '5%',
    marginTop: '10%',
    borderColor: 'silver',
    paddingLeft: 20,
  },
  next: {
    height: 60,
    backgroundColor: 'black',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    margin: '5%',
    marginTop: '3%',
    padding: 22,
  },
});
