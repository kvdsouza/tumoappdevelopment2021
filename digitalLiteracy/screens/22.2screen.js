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
    props.navigation.navigate('TwentyThird2');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
      CHAPTER 2. IMPORTANCE OF MANAGING YOUR DIGITAL FOOTPRINT
      </Text>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.icon}
          source={require('../images/girl4.png')}
        />
      </View>
      <Text style={styles.header}>Your digital footprint</Text>
      <Text style={styles.body}>
       There's a lot we can do online, from browsing the web, to sharing updates on social media, to making online purchases. You should keep in mind that everything you do online becomes part of your online history, or your digital footprint.

You should think about your digital footprint when you share information or do things online because things that happen online are difficult to erase.

If you use the internet, you should be aware of your digital footprint. Just like physical footprints that show someone steps on a dirt path, your digital footprint is a history of all the activity you do online. Any social media posts you make, any websites you visit, and any information you share online contributes to your digital footprint. 



</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic} source={require('../images/nk1.png')} />
      </View>
      <Text style={styles.body}>
       Once you post something online, it can't be erased. So, your digital footprint can last forever. This can be a good thing if your digital footprint includes things that give you a positive reputation online. This can help you build your personal brand. Your online history can also help the apps you use know more about you. 

They can use this information to serve you better by adjusting to the things you like and your daily habits. But they can also use this information in the wrong way and share it with others. Keep the following tips in mind when you go online to manage your digital footprint. 

Tip number one, know what your footprint says about you. Other people use your digital footprint to make judgements about you online. This can include employers when you apply for a job or recruiters when you apply for academic programs. Its important to know what your digital footprint says about you and how your information is being used. </Text> 
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic4} source={require('../images/nk2.png')} />
      </View>
      <Text style={styles.body1}>
        To see what your personal brand is online, you can search for yourself. Search for your name in the Bing search engine and see what results are displayed. If these results don't show what you want, think about what you share online and what information you allow other people to see. 

Tip number two, manage your privacy settings. You can modify the privacy settings of most of the social media sites and online applications that you use. This can help you control who sees what you share and what information shows up when someone searches for you online. 



</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.pic4} source={require('../images/nk3.png')} />
      </View>
      <Text style={styles.body1}>
  Tip number three, Manage your cookies. Cookies are notes given to your web browser as you browse the web. These cookies help apps track information that they need while you're using the app. This can help the app work better for you. But this data also contributes to your digital footprint. You can use the settings in your browser to limit or block the use of cookies on certain websites. 

Tip number four, think before you share. Once you share something online, you can't take it back. Make sure you're okay with something being a part of your public digital footprint before you share it. Your digital footprint can live forever. Keep these tips in mind to make sure you're happy with your digital footprint and how it is used. 



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
