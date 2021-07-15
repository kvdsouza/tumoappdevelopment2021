import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Icon,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ThirdPage from './thirdpage';
import FourthPage from './fourthpage';
import FifithPage from './fifthpage';
import SixthPage from './sixthpage';

const Stack = createStackNavigator();

const SecondPage = ({ navigation }) => {
  const Harvest_Cobb_Salad = {
    name: 'Harvest Cobb Salad',
    img: require('../assets/pic1.jpg'),
    price: '5.30',
  };

  const Bacon_and_Avocado_Macaroni_Salad = {
    name: 'Bacon and Avocado Macaroni Salad',
    img: require('../assets/pic2.jpg'),
    price: '4.55',
  };

  const Whole_Foods_California_Quinoa_Salad = {
    name: 'Whole Food’s California Quinoa Salad',
    img: require('../assets/pic3.jpg'),
    price: '4.30',
  };

  const Asian_Style_Cobb_Salad = {
    name: 'Asian-Style Cobb Salad',
    img: require('../assets/pic4.jpg'),
    price: '4.00',
  };

  const Orders = [
    Harvest_Cobb_Salad,
    Bacon_and_Avocado_Macaroni_Salad,
    Whole_Foods_California_Quinoa_Salad,
    Asian_Style_Cobb_Salad,
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={Orders}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Card style={styles.cardBody}>
              <Card.Image
                source={item.img}
                style={{ justifyContent: 'flex-end', margin: 0 }}>
                <View style={styles.cardFooter}>
                  <View style={styles.infoArea}>
                    <View style={styles.saladName}>
                      <Text style={{ color: 'white' }}>Name : {item.name}</Text>
                    </View>
                    <View style={styles.saladName}>
                      <Text style={{ color: 'white' }}>
                        Price: {item.price}$
                      </Text>
                    </View>
                    <View></View>
                  </View>

                  <TouchableOpacity
                    onPress={() => navigation.navigate("ThirdPage", {itemName: item.name, itemPrice: item.price})}
                    style={styles.viewButton}>
                    <Text style={{ color: 'white' }}>View</Text>
                  </TouchableOpacity>
                </View>
              </Card.Image>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBody: {
    padding: 0,
  },
  cardFooter: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '40%',
  },
  infoArea: {
    flexDirection: 'row',
    width: '100%',
    height: '60%',
  },
  saladName: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SecondPage;
