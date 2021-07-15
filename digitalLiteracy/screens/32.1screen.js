import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class FifthScreen extends React.Component{
componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.navigation.navigate('EresunHing3'); // what to push here?
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  handlePress = () => {
    this.props.navigation.navigate('Thir2d');
  };
render(){
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.paragraph}>CONGRATULATIONS!</Text>
        <Image source={require('../images/girl211.png')} style={styles.image} />
        <Text style={styles.paragraph2}>Yey! Another test passed!</Text>
        <Text style={styles.paragraph8}>Now you can learn a new topic!</Text>
        <TouchableOpacity style={styles.paragraph4} onPress={this.handlePress}>
          <Text style={styles.paragraph3}>LETS GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    paddingVertical: 40,
  },
  paragraph: {
    fontSize: 30,
    fontFamily: 'sans-serif-medium',
    fontStyle: 'bold',
    marginTop: '2%',
    marginBottom: '5%',
  },
  paragraph2: {
    fontSize: 21,
    textAlign: 'center',
    margin: '5%',
  },
  image: {
    width: 250,
    height: 250,
  },
  paragraph4: {
    borderRadius: 5,
    fontSize: 20,
    backgroundColor: 'black',
    padding: 20,
    marginTop: 10,
    margin: 'auto',
    width: 300,
  },
  paragraph3: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
  },
  paragraph8: {
    fontStyle: 'italic',
    fontSize: 20,
    marginTop: '2%',
    marginBottom: '11%',
  },
});
