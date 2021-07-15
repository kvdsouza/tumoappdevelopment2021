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
import CardComponent from './Card';
import firebase from '../../firebase';

const OrderScreen = ({ navigation }) => {
  
  const cardsData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Chicken Pasta Salad',
      price: '4.30',
      time: 30,
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-pasta-salad-270-1543266433.jpg?crop=1xw:1xh;center,top&resize=980:*',
      ingridients: [
        'fusilli pasta',
        'boneless skinless chicken breasts',
        'garlic powder',
        'Kosher salt',
        'Freshly ground black pepper',
        'extra-virgin olive oil',
        'slices bacon',
        'grape tomatoes',
        'spinach',
        'crumbled feta',
        'red onion',
        'freshly chopped dill',
      ],
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Cobb Salad',
      price: '5.55',
      time: 35,
      image:
        'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520887441-cobb-salad-delish-1.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
      ingridients: ['boneless skinless chicken breasts','garlic powder','fusilli pasta','Kosher salt','extra-virgin olive oil','slices bacon', 'grape tomatoes','spinach','Freshly ground black pepper','crumbled feta','red onion','freshly chopped dill'],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Keto Broccoli Salad',
      price: '4.00',
      time: 30,
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190625-keto-broccoli-salad-0167-portrait-pf-1561753084.jpg?crop=1xw:1xh;center,top&resize=980:*',
      ingridients: ['boneless skinless chicken breasts','garlic powder','fusilli pasta','Kosher salt','extra-virgin olive oil','slices bacon', 'grape tomatoes','spinach','Freshly ground black pepper','crumbled feta','red onion','freshly chopped dill', ],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Keto Broccoli Salad',
      price: '4.00',
      time: 30,
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190625-keto-broccoli-salad-0167-portrait-pf-1561753084.jpg?crop=1xw:1xh;center,top&resize=980:*',
      ingridients: [ 'boneless skinless chicken breasts','garlic powder','fusilli pasta','Kosher salt','extra-virgin olive oil','slices bacon', 'grape tomatoes','spinach','Freshly ground black pepper','crumbled feta','red onion','freshly chopped dill', ],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Keto Broccoli Salad',
      price: '4.00',
      time: 30,
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190625-keto-broccoli-salad-0167-portrait-pf-1561753084.jpg?crop=1xw:1xh;center,top&resize=980:*',
      ingridients:  [ 'boneless skinless chicken breasts','garlic powder','fusilli pasta','Kosher salt','extra-virgin olive oil','slices bacon', 'grape tomatoes','spinach','Freshly ground black pepper','crumbled feta','red onion','freshly chopped dill', ],
    },
 
  ];

//   const[cardsData,setMenu]=React.useState([])
// React.useEffect(()=>{
//    firebase.database().ref('menu').on('value', (snapshot) => {
//      const menu = snapshot.val();
//      var data = [];
//      for (var key in menu) {
//        const menuItem = menu[key];
//        data.push(menuItem);
//      }
//      console.log(data)
//      setMenu(data)
//     //  this.setState({captions: captions});
//    });
//    },[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.body}>
        <FlatList
          style={{ alignItems: 'center' }}
          data={cardsData}
          renderItem={({ item }) => (
            <CardComponent
              viewMore={() => navigation.navigate('Details', { details: item })}
              details={item}
            />
          )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0.03 * Dimensions.get('window').height,
  },
  header: {
    width: '100%',
    height: '6.25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
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
