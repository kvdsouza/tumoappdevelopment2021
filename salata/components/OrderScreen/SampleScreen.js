import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import CounterInput from 'react-native-counter-input';
import firebase from '../../firebase';

function SaladPage({ route, navigation }) {
  const name = route.params.details.name;
  const price = route.params.details.price;
  const image = route.params.details.image;
  const ingridients = route.params.details.ingridients;
  const time = route.params.details.time;
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(0);
  
  for(var i=0;i<ingridients.length;i++){
    arr.push(true);
  }
  console.log(ingridients.length)
  // useEffect(() => {
  //   alert('yohoooo');
  // }, [arr]);

  const orderConfirmation = () => {
    let arrCount = 0;
    arr.map((item) => {
      if (item === false) {
        arrCount++;
      }
    });
    if (count < 1) {
      if (arr.length === arrCount) {
        alert('Sorry, but you ordered 0 ' + name + ' with no ingridients');
      } else {
        alert(
          'Sorry, can you check how much of ' + name + ' you want to order?'
        );
      }
    } else {
      let speech = count + ' ' + name;
      let without = [];
       for (let i = 0; i < arr.length; i++) {
              arr[i] === false ? without.push(ingridients[i]) : null;
    }
      if (without) {
        speech+=' without '
        without.map(i=>speech+=i+', ')
      }
      
       const order = firebase.database().ref('orders');
   order.push({
     name:name,
     image:image,
     price:price,
     time:time,
    speech:speech
});
alert('Ordered')
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flexDirection: 'column' }}>
        <ImageBackground source={{ uri: image }} style={styles.image} />
        <View style={styles.body}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {time} min | {price} $
            </Text>
          </View>
          <View style={styles.countContainer}>
            <Text style={styles.quantityText}>Quantity</Text>
            <CounterInput
              style={styles.counter}
              increaseButtonBackgroundColor="#CBD8C4"
              decreaseButtonBackgroundColor="#CBD8C4"
              increaseButtonShadowColor="#CBD8C4"
              horizontal
              onChange={(counter) => {
                setCount(counter);
              }}
            />
          </View>
          <View style={styles.ingridContainer}>
            <Text style={styles.ingridText}>Ingridients</Text>
            {ingridients.map((item) => {
              return (
                <CheckBox
                  title={item}
                  containerStyle={styles.checkbox}
                  checked={arr[ingridients.indexOf(item)]}
                  onPress={() => {
                    const newArr = arr;
                    newArr[ingridients.indexOf(item)] = !arr[
                      ingridients.indexOf(item)
                    ];
                    setArr(newArr);
                  }}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderTopRightRadius: 0,
              borderTopLeftRadius: Dimensions.get('window').height * 0.024,
            },
          ]}
          onPress={orderConfirmation}>
          <Text style={styles.btnText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    height: wh * 0.37,
    width: '100%',
    top: 0.03 * wh,
  },

  body: {
    minHeight: wh * 0.65,
    width: '100%',
    paddingBottom: '10%',
    borderTopRightRadius: wh * 0.03,
    borderTopLeftRadius: wh * 0.03,
    backgroundColor: '#E2EDDC',
    alignItems: 'center',
  },
  nameContainer: {
    width: '100%',
    minHeight: wh * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: wh * 0.03,
    borderTopLeftRadius: wh * 0.03,
  },
  nameText: {
    fontSize: Dimensions.get('window').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    height: wh * 0.1,
    width: ww,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    color: '#556541',
    fontSize: Dimensions.get('window').height * 0.03,
  },
  countContainer: {
    backgroundColor: '#CBD8C4',
    height: wh * 0.15,
    width: ww * 0.9,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: Dimensions.get('window').height * 0.04,
  },
  counter: {
    backgroundColor: '#CBD8C4',
    shadowColor: '#CBD8C4',
  },
  ingridContainer: {
    height: 'auto',
    width: ww * 0.9,
    justifyContent: 'flex-start',
    marginTop: wh * 0.01,
  },
  ingridText: {
    fontSize: Dimensions.get('window').height * 0.04,
    marginVertical: 0,
    marginLeft: ww * 0.04,
  },
  checkbox: {
    backgroundColor: '#E2EDDC',
  },
  footer: {
    width: ww,
    height: wh * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  btn: {
    backgroundColor: '#568202',
    width: '40%',
    borderTopRightRadius: wh * 0.024,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default SaladPage;
