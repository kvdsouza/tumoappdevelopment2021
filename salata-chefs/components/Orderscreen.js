import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import CardComponent from './card';
import firebase from '../firebase';

const OrderScreen = ({ navigation }) => {
 
  const[cardsData,setSpeech]=React.useState([])
React.useEffect(()=>{
firebase.database().ref('orders').on('value', (snapshot) => {
     const orders = snapshot.val();
     let data = [];
     for (var key in orders) {
       const menuItem = orders[key];
       data.push(menuItem);
     }
     setSpeech(data)
   });
},[])
   

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.orders}>
          <Text style={styles.ordersText}>Orders</Text>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          style={{ alignItems: 'center' }}
          data={cardsData}
          renderItem={({ item }) => <CardComponent details={item} />}
        />
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default OrderScreen;
const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0.03 * Dimensions.get('window').height,
  },
  header: {
    width: '100%',
    height: '15%',
    paddingTop: wh * 0.02,
    paddingLeft: ww * 0.05,
  },

  orders: {
    height: '80%',
    width: '40%',
    backgroundColor: '#598101',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: Dimensions.get('window').height * 0.024,
    borderBottomRightRadius: Dimensions.get('window').height * 0.024,
  },
  ordersText: {
    color: 'white',
    fontSize: Dimensions.get('window').height * 0.04,
  },
  body: {
    width: '100%',
    height: '93.75%',
    flexDirection: 'row',
  },
  footer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.05,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  btn: {
    backgroundColor: '#568202',
    width: '40%',
    borderTopRightRadius: Dimensions.get('window').height * 0.024,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
