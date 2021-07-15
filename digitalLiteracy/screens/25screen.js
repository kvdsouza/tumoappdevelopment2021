import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity , ScrollView } from 'react-native';

const App = (props) => {
  const [back1, setBack1] = useState('white');
  const [back2, setBack2] = useState('white');
  const [back3, setBack3] = useState('white');
  const [back4, setBack4] = useState('white');


  const handlePress1 = () => {
    setBack1('red');
    setBack2('#7CFC00');
    setBack3('white');
    setBack4('white');
  };

  const handlePress2 = () => {
    setBack1('white');
    setBack2('#7CFC00');
    setBack3('white');
    setBack4('white');
  };

  const handlePress3 = () => {
    setBack1('white');
    setBack2('#7CFC00');
    setBack3('red');
    setBack4('white');
  };
  const handlePress4 = () => {
    setBack1('white');
    setBack2('#7CFC00');
    setBack3('white');
    setBack4('red');
  };

  const handlePress5 = () => {
    props.navigation.navigate('EresunErku');
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>TEST 2. TYPES OF 
PERSONAL COMPUTERS</Text>

      <Text style={styles.question}>
        Question 3.
        <Text style={styles.qtext}>
       {" "}Harold needs to purchase a computer with a built-in keyboard to type his lecture notes, and to work on his assignments at home. He’ll also need various applications and programs installed on the computer to complete his assignments. What is the best type of computer for his needs?
        </Text>
      </Text>

      <View style={styles.spaceText} />

      <TouchableOpacity
        onPress={handlePress1}
        style={{
          padding:"2%",
          backgroundColor: back1,
          textAlign: 'left',
          borderColor: 'silver',
          borderWidth: 1,
          borderRadius: 40,
          marginLeft: "3%",
          marginRight: "3%",
        }}>
        <Text style={styles.buttonText}>1. A tablet</Text>
      </TouchableOpacity>

      <View style={styles.spaceButton} />

      <TouchableOpacity
        style={{
          padding:"2%",
          backgroundColor: back2,
          textAlign: 'left',
          borderColor: 'silver',
          borderWidth: 1,
          borderRadius: 40,
          marginLeft: "3%",
          marginRight: "3%",
        }}
        onPress={handlePress2}>
        <Text style={styles.buttonText}>2. A laptop</Text>
      </TouchableOpacity>

      <View style={styles.spaceButton} />

      <TouchableOpacity
        style={{
          padding:"2%",
          backgroundColor: back3,
          textAlign: 'left',
          borderColor: 'silver',
          borderWidth: 1,
          borderRadius: 40,
          marginLeft: "3%",
          marginRight: "3%",
        }}
        onPress={handlePress3}>
        <Text style={styles.buttonText}>3. A desktop</Text>
      </TouchableOpacity>

      <View style={styles.spaceButton} />

      <TouchableOpacity
       style={{
          padding:"2%",
          backgroundColor: back4,
          textAlign: 'left',
          borderColor: 'silver',
          borderWidth: 1,
          borderRadius: 40,
          marginLeft: "3%",
          marginRight: "3%",
        }}
        onPress={handlePress4}>
        <Text style={styles.buttonText}>4. A smartphone</Text>
      </TouchableOpacity>

      <View style={styles.spaceButton} />

      <TouchableOpacity style={styles.submit} onPress={handlePress5}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 20,
    fontSize: 24,
    fontFamily: 'Sarif',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  spaceText: {
    width: 30,
    height: 20,
  },
  spaceButton: {
    width: 30,
    height: 20,
  },
  question: {
    margin: 6,
    fontSize: 19,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'justify',
    backgroundColor: 'white',
    marginLeft: "6%",
    marginRight: "6%",
  },
  qtext: {
    margin: 20,
    fontSize: 19,
    fontFamily: 'sans-serif-condesed',
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'justify',
    backgroundColor: 'white',
  },

  buttonText: {
    color: 'black',
    margin: 4.3,
    marginLeft: 16,
    fontSize: 18,
  },
  submit: {
    padding:"3%",
    backgroundColor: 'black',
    textAlign: 'left',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 40,
    marginLeft: "3%",
    marginRight: "3%",
  },

  submitText: {
    color: 'white',
    margin: 1,
    fontSize: 21,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});


