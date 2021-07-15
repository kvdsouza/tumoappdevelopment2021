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
      <View style={styles.cardImage}>
        <Image
          source={{ uri: props.details.image }}
          style={styles.bunImage}
        />
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.infoArea}>
          <View>
            <Text style={{ color: 'white' }}>Name : {props.details.name}</Text>
          </View>
          <View>
            <Text style={{ color: 'white' }}>
              Price: {props.details.price} $
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={props.viewMore} style={styles.viewButton}>
          <Text style={{ color: 'white' }}>Open now</Text>
        </TouchableOpacity>
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
    backgroundColor: '#E1EEDC',
    borderRadius: wh * 0.024,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardImage: {
    height: '70%',
    width:'100%',
    borderTopRightRadius:wh * 0.024,
    borderTopLeftRadius:wh * 0.024,
    justifyContent:'center',
    alignItems:'center'
  },
  bunImage:{
    height: '90%',
    width:'95%',
    borderTopRightRadius:wh * 0.024,
    borderTopLeftRadius:wh * 0.024,
  },
  cardFooter: {
    height: '30%',
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end',
    
  },
  infoArea: {
    backgroundColor: '#5D830D',
    width: '65%',
    height: '80%',
    justifyContent:'center',
    paddingLeft:'2%',
    borderBottomLeftRadius: wh * 0.024,
    borderTopRightRadius: wh * 0.024,

  },
  
  viewButton: {
   backgroundColor: '#5D830D',
    width: '25%',
    height: '50%',
    justifyContent:'center',
    alignItems:"center",
    paddingLeft:'2%',
    borderBottomRightRadius: wh * 0.024,
    borderTopLeftRadius: wh * 0.024,

  },
});
export default CardComponent;
