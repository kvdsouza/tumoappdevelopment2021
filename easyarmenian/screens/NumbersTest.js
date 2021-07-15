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
    color: Data.numberTest,
    n: 0,
    border1: 'null',
    border2: 'null',
    border3: 'null',
    border4: 'null',
    w1:0,
    w2:0,
    w3:0,
    w4:0,
    status:false
  };
  gotoScreenThree = () => {
    this.props.navigation.navigate('Third');
  };
  next=()=>{
    if(this.state.n!=this.state.color.length - 1){
        this.setState({ n: this.state.n + 1 });
        this.setState({ border1: 'null' });
        this.setState({ w1: 0 });
        this.setState({ border2: 'null' });
        this.setState({ w2: 0 });
        this.setState({ border3: 'null' });
        this.setState({ w3: 0 });
        this.setState({ border4: 'null' });
        this.setState({ w4: 0 });
        this.setState({ status: false });
    }
  }
handlePress = (l) => {
    this.setState({status:true})
    if (l == this.state.color[this.state.n].right) {
      if(l==1){
        this.setState({border1: 'green'})
        this.setState({w1:4})
      }
      else if(l==2){
        this.setState({border2: 'green'})
        this.setState({w2:4})
      }
      else if(l==3){
        this.setState({border3: 'green'})
        this.setState({w3:4})
      }
      else if(l==4){
        this.setState({border4: 'green'})
        this.setState({w4:4})
      }

      
    } else {
      if(l==1){
        this.setState({border1: 'red'})
        this.setState({w1:4})
      }
      else if(l==2){
        this.setState({border2: 'red'})
        this.setState({w2:4})
      }
      else if(l==3){
        this.setState({border3: 'red'})
        this.setState({w3:4})
      }
      else if(l==4){
        this.setState({border4: 'red'})
        this.setState({w4:4})
      }
      if(this.state.color[this.state.n].right==1){
        this.setState({border1: 'green'})
        this.setState({w1:4})
      }
      else if(this.state.color[this.state.n].right==2){
        this.setState({border2: 'green'})
        this.setState({w2:4})
      }
      else if(this.state.color[this.state.n].right==3){
        this.setState({border3: 'green'})
        this.setState({w3:4})
      }
      else if(this.state.color[this.state.n].right==4){
        this.setState({border4: 'green'})
        this.setState({w4:4})
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.color[this.state.n].question}
        </Text>
        <TouchableOpacity onPress={this.handlePress.bind(this, 1)}>
          <Text style={[styles.ans, {borderColor:this.state.border1, borderWidth:this.state.w1}]}>
            {this.state.color[this.state.n].variant1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handlePress.bind(this, 2)}>
          <Text style={[styles.ans, {borderColor:this.state.border2, borderWidth:this.state.w2}]}>
            {this.state.color[this.state.n].variant2}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handlePress.bind(this, 3)}>
          <Text style={[styles.ans, {borderColor:this.state.border3, borderWidth:this.state.w3}]}>
            {this.state.color[this.state.n].variant3}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handlePress.bind(this, 4)}>
          <Text style={[styles.ans, {borderColor:this.state.border4, borderWidth:this.state.w4}]}>
            {this.state.color[this.state.n].variant4}
          </Text>
        </TouchableOpacity>
        {this.state.status ? <TouchableOpacity onPress={this.next.bind(this)}>
          <Text>
            next
          </Text>
        </TouchableOpacity> : null}
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
     backgroundColor: '#70C19A',
  },
  paragraph: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
  ans: {
    margin: 15,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
});
