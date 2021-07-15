import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react';
import Data from '../data.json';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class FirstScreen extends React.Component {
  state = {
    color: Data.colorTest,
    n: 0,
    border: 'white',
  };
  handlePress = (l) => {
    this.setState({ status: true });
    if (this.state.color[this.state.n].right == 1) {
      this.setState({ border1: this.state.color[this.state.n].variant1 });
    } else if (this.state.color[this.state.n].right == 2) {
      this.setState({ border1: this.state.color[this.state.n].variant2 });
    } else if (this.state.color[this.state.n].right == 3) {
      this.setState({ border1: this.state.color[this.state.n].variant3 });
    } else if (this.state.color[this.state.n].right == 4) {
      this.setState({ border1: this.state.color[this.state.n].variant4 });
    }
  };
  next = () => {
    if (this.state.n != this.state.color.length - 1) {
      this.setState({ n: this.state.n + 1 });
      this.setState({ border1: 'white' });
      this.setState({ status: false });
    }
  };
  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.border1 }]}>
        <Text style={styles.paragraph}>
          {this.state.color[this.state.n].question}
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 7 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ justifyContent: 'flex-start', alignItems: 'center' }}
              onPress={this.handlePress.bind(this, 1)}>
              <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'black',
                  borderRadius: 20,
                  backgroundColor: this.state.color[this.state.n].variant1,
                }}></Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ justifyContent: 'flex-start', alignItems: 'center' }}
              onPress={this.handlePress.bind(this, 2)}>
              <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'black',
                  borderRadius: 20,
                  backgroundColor: this.state.color[this.state.n].variant2,
                }}></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 7 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ justifyContent: 'flex-start', alignItems: 'center' }}
              onPress={this.handlePress.bind(this, 3)}>
              <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'black',
                  borderRadius: 20,
                  backgroundColor: this.state.color[this.state.n].variant3,
                }}></Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ justifyContent: 'flex-start', alignItems: 'center' }}
              onPress={this.handlePress.bind(this, 4)}>
              <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'black',
                  borderRadius: 20,
                  backgroundColor: this.state.color[this.state.n].variant4,
                }}></Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.status ? (
          <TouchableOpacity onPress={this.next.bind(this)}>
            <Text>next</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    width: windowWidth,
    height: windowHeight,
  },
  paragraph: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
});
