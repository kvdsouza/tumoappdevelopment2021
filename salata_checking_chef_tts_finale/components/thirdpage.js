import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  CheckBox,
  Button,
} from 'react-native';
import Secondpage from './secondpage';
import firebase from '../firebase.js';
import CounterInput from 'react-native-counter-input';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';

const Thirdpage = ({ route, navigation }) => {
  const [spinach, setSpinach] = useState(false);
  const [dried_bacon, setDried_bacon] = useState(false);
  const [tomato, setTomato] = useState(false);
  const [radish, setRadish] = useState(false);
  const [chick_peas, setChick_peas] = useState(false);
  const [turkey, setTurkey] = useState(false);

  const { itemName } = route.params;
  const { itemPrice } = route.params;

  const Spinach = {
    name: 'Spinach',
    value: spinach,
    f: setSpinach,
  };

  const Dried_bacon = {
    name: 'Dried bacon',
    value: dried_bacon,
    f: setDried_bacon,
  };

  const Tomato = {
    name: 'Tomato',
    value: tomato,
    f: setTomato,
  };

  const Radish = {
    name: 'radish',
    value: radish,
    f: setRadish,
  };

  const Chick_peas = {
    name: 'Chick_peas',
    value: chick_peas,
    f: setChick_peas,
  };

  const Turkey = {
    name: 'Turkey',
    value: turkey,
    f: setTurkey,
  };

  const Ingredients = [
    Spinach,
    Dried_bacon,
    Tomato,
    Radish,
    Chick_peas,
    Turkey,
  ];

  const [counter, setCounter] = useState(1);
  const [speeches, setSpeeches] = useState([]);

  const way = () => {
    const result = Ingredients.filter((item) => {
      return item.value;
    });

    console.log('result ' + result);

    let sent = counter + ' ' + itemName + ' with';

    for (let i = 0; i < result.length; i++) {
      sent = sent + ' ' + result[i].name;
    }
    console.log('sent: ' + sent);

    const posts = firebase.database().ref('posts');
    posts.push({
      speech: sent,
    });

    navigation.navigate('Home');
  };


  //console.log('speeches: ' + speeches);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/salatik.jpg')}
          style={styles.image}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{itemName}</Text>
          </View>
        </ImageBackground>

        <View style={styles.body}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Price: {itemPrice} $</Text>
          </View>
          <View style={styles.ingridContainer}>
            <Text style={styles.priceText}>Ingridients</Text>
          </View>
          <View style={styles.ingridContainer}>
            <FlatList
              data={Ingredients}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <View style={styles.checkboxContainer}>
                  <Text>{item.name}</Text>
                  <CircleCheckBox
                    checked={item.value}
                    onToggle={(checked) => item.f(checked)}
                    labelPosition={LABEL_POSITION.RIGHT}
                  />
                </View>
              )}
            />
          </View>
          <View style={styles.orderContainer}>
            <CounterInput
              horizontal
              initial = {1}
              onChange={(counter) => {
                {
                  setCounter(counter);
                }
              }}
            />
            <TouchableOpacity style={styles.button} onPress={way}>
              <Text> Order </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const priceHeight = Dimensions.get('window').height * 0.1;
const imageHeight = Dimensions.get('window').height * 0.25;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef7e6',
    height: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  image: {
    height: imageHeight,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  nameContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingLeft: '10%',
    paddingTop: '1%',
  },
  nameText: {
    color: 'white',
  },
  body: {
    height: 'auto',
    paddingBottom: '10%',
    justifyContent: 'space-between',
  },
  priceContainer: {
    height: priceHeight,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '5%',
  },
  priceText: {
    fontSize: 26,
  },
  ingridContainer: {
    height: 'auto',
    paddingHorizontal: '5%',
  },
  orderContainer: {
    height: priceHeight,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '10%',
  },
  button: {
    marginHorizontal: '5%',
  },
});
export default Thirdpage;
