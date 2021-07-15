import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const CardComponent = (props, { navigation }) => {
  return (
    <View style={styles.cardBody}>
      <View style={styles.halfView1}>
        <Image source={{uri:props.details.image}} style={{width:'90%',height:'90%'}} />
      </View>
      <View style={styles.halfView2}>
        <View style={styles.subHalfView21}>
          <Text>Name:{props.details.name}</Text>
          <Text>Time:{props.details.time} min</Text>
          <Text>Price:{props.details.price}$</Text>
      </View>
      <View style={styles.halfView22}>
        
      </View>
      </View>
    </View>
  );
};

const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;
const styles = StyleSheet.create({
  cardBody: {
    width: ww * 0.9,
    height: wh * 0.25,
    marginVertical: '1%',
    backgroundColor: '#ECF29A',
    borderRadius: wh * 0.024,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfView1:{
    width:'50%',
    height:'100%',
    justifyContent:'center',
    alignItems:"center"
  },
  halfView2:{
    width:'50%',
    height:'100%',
  },
});
export default CardComponent;
