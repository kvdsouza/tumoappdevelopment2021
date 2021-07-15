import React, { useState, useEffect } from 'react';

import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = (props) => {
  const handlePress5 = () => {
    props.navigation.navigate('TwentyThird');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
        CHAPTER 2. MODERN PERSONAL COMPUTING DEVICES
      </Text>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.icon}
          source={require('../images/a.png')}
        />
      </View>
      <Text style={styles.header}>Types of personal computers</Text>
      <Text style={styles.body}>
        Computers come in many forms. Some of the most common types are desktop
        computers, laptops, and mobile phones. But other types of devices such
        as calculators, gaming consoles, and smart TVs are also computers. {"\n"}{"\n"}The types of computers that we use in our daily lives are called personal
        computers. Let's look at some of the most common types of personal
        computing devices and their uses.</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic} source={require('../images/comp1.png')} />
      </View>
      <Text style={styles.body}>
        A desktop is a personal computer designed to stay in one place like on
        top of a desk. A desktop computer typically has separate pieces for the
        base unit, monitor, speakers, keyboard, and a mouse. {"\n"}{"\n"}These parts must be connected using cables. Desktop computers must be plugged in to a power source.</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic2} source={require('../images/comp2.png')} />
      </View>
      <Text style={styles.body}>
        A laptop is a portable personal computer, where all parts of the
        computer are contained in one device. Laptops contain a built-in
        processing unit, monitor, keyboard, speaker and mouse touchpad.{"\n"}{"\n"}Laptops are battery powered. So, they do not always need to be plugged into a
        power source. This makes them easy to be used on-the-go.</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic3} source={require('../images/comp3.png')} />
      </View>
      <Text style={styles.body2}>A tablet is another type of portable personal computer. The computer parts that make up the tablet are contained in a single device; it is smaller than most laptops. Typically, the size of a book.{"\n"}{"\n"}Because of their small portable size, tablets are often used for entertainment activities like watching movies or playing games. You can install software applications on tablets that allow you to perform various tasks. </Text> 
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic4} source={require('../images/comp4.png')} />
      </View>
      <Text style={styles.body1}>
        A smartphone is a common type of portable personal computing device,
        that is small enough to be handheld. The primary use of smartphones is
        to make phone calls using mobile networks. {"\n"}{"\n"}But they can be used for much more. You can use a variety of software applications on your smartphone
        that allow you to take photos, play games, browse the web, send emails,
        read documents, and more. These apps are great for on-the-go scenarios.
        {"\n"}{"\n"}But they are typically a lot more basic than the apps you can install on your desktop or laptop computer. Depending on your needs, there are a
        variety of personal computing devices that you can use to get things
        done.</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress5}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
            padding: 20,
          }}>
          Continue
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    backgroundColor: 'white',
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
  },

  icon: {
    width: 384,
    height: 309,
    padding: 10,
    alignSelf: 'center',
  },
  pic: {
    width: 360,
    height: 205,
  },
  pic2: {
    width: 360,
    height: 205,
  },
  pic3: {
    width: 360,
    height: 185,
  },
  pic4: {
    width: 360,
    height: 185,
  },
  header: {
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    backgroundColor: 'white',
  },
  body: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    color: 'black',
    textAlign: 'justify',
    backgroundColor: 'white',
  },
  body1: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '7%',
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    color: 'black',
    textAlign: 'justify',
    backgroundColor: 'white',
  },
  body2: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    color: 'black',
    textAlign: 'justify',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'black',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    height: 70,
    marginBottom: '7%',
  },
});
