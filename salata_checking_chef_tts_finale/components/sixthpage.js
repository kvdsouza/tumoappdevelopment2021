import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Secondpage from './secondpage';


const Sixthpage = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%',
  },
  
});
export default Sixthpage;
