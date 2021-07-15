import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class TwentyOne extends React.Component {
  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.navigation.navigate('Eresunhing2'); // what to push here?
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  press = () => {
    this.props.navigation.navigate('TwentySecond1');
  };

  press1 = () => {
    this.props.navigation.navigate('Thir1d');
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.paragraph}>CONGRATULATIONS!</Text>
        <Image source={require('../images/man-working-from-home-2194237-0.png')} style={styles.image} />
        <Text style={styles.paragraph2}>
          You did it! You passed {"\n"}your first test!
        </Text>
        <TouchableOpacity style={styles.paragraph4} onPress={this.press}>
          <Text style={styles.paragraph3}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph8}>or</Text>
        <TouchableOpacity onPress={this.press1} style={styles.paragraph4}>
          <Text style={styles.paragraph3}> Go to main page</Text>
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
    fontStyle: 'bold',
  },
  paragraph: {
    fontSize: 30,
  },
  paragraph2: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    fontFamily: "sans-serif-medium",
  },
  image: {
    width: 250,
    height: 250,
  },
  paragraph4: {
    borderRadius: 20,
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
    fontSize: 18,
  },
  paragraph8: {
    paddingVertical: 20,
    fontSize: 20,
  },
});
