import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default class EresunHingScreen extends React.Component {
    press1 = () => {
    this.props.navigation.navigate('TwentyOne2');
  };
  
  render(){
  return (
    <ImageBackground
      source={require("../images/ert1.png")}
      style={stylesheet.image}>
      <View style={stylesheet.viewStyle}>
              <TouchableOpacity onPress={this.press1}>
          <Image
            style={stylesheet.images}
            source={require('../images/Group11.png')}
          />
        </TouchableOpacity>
      <Text>You have unlocked achievement!</Text>
      <Text style={stylesheet.text} >GENIUS</Text>
                <Image
            style={stylesheet.image}
            source={require('../images/genius.png')}
          />
      </View>
      
      
      
      </ImageBackground>
  );
  }
}

const stylesheet = StyleSheet.create({
  viewStyle: {
    backgroundColor:'white',
    alignItems: 'center',
    textAlign: 'end',
    margin: 'auto',
    padding:25,
    paddingBottom:0,
    paddingTop:10,
    height:150,
    width:100%'',
  },
  image: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',

  },
  text:{
      fontWeight: 'bold',
      fontSize:25,
  }
});
