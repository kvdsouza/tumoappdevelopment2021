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
    props.navigation.navigate('TwentyThird1');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
       CHAPTER 2. COMMUNICATE SAFELY ONLINE
      </Text>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.icon}
          source={require('../images/girl4.png')}
        />
      </View>
      <Text style={styles.header}>How to be safe in the online world?</Text>
      <Text style={styles.body}>
       The internet allows us to communicate with other people in new ways. However, it isn't always safe to communicate with other people online. You don't always know for sure who you're talking to when you're on the internet, so you have to be careful to stay safe.

Using the internet, we can communicate with other people across the world in new ways. This has many benefits, but there are also some dangers. There are online predators using the internet every day. These predators often pretend to be people they aren't. So, it can be hard to know who you're talking to online. Here are three tips you can use to keep yourself safe from online predators when communicating online. 

</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic} source={require('../images/comp1.png')} />
      </View>
      <Text style={styles.body}>
        Tip number one, Use your instincts. If someone makes you feel nervous or uncomfortable, stop communicating with them and tell someone you trust immediately. Most websites and social media sites have tools that you can use to report suspicious activity. 

Tip number two, Limit what you share. Online predators often try to get you to share your personal information through emails and messages. Avoid sharing personal information with an online stranger.</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic3} source={require('../images/imm1.png')} />
      </View>
      <Text style={styles.body2}>A tablet is another type of portable personal computer. The computer parts that make up the tablet are contained in a single device; it is smaller than most laptops. Typically, the size of a book.{"\n"}{"\n"}Because of their small portable size, tablets are often used for entertainment activities like watching movies or playing games. You can install software applications on tablets that allow you to perform various tasks. </Text> 
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic4} source={require('../images/imm2.png')} />
      </View>
      <Text style={styles.body1}>
        Tip number three, Keep your distance. Think twice about meeting someone in person that you have only talked to online. Online predators often use social media to pretend to be someone else by setting up fake profiles using other people's pictures. 

Even if someone seems friendly, it can be hard to know for sure who you're talking to online. Always tell a parent or someone you trust when an online stranger asks to meet you in person, so you don't end up in a dangerous situation.

Many online predators use smart tactics to lure you into dangerous situations, but you can be smarter. Keep these risks and tips in mind, so you can stay safe when you talk to people online.

</Text>
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
