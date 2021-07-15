import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {

  press = () => {

    this.props.navigation.navigate('Eighth1');
  };

  render() {
    

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.paragraph}>CHAPTER 1. PROTECT YOURSELF FROM PHISHING</Text>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.icon} source={require('../images/girl3.png')} />
        </View>

        <Text style={styles.header}>What is phishing?</Text>

        <Text style={styles.body}>
         The internet brings us many possibilities. We can talk to others, make purchases online, and do personal business from one place. But these online interactions aren't always safe. Let's talk about a popular online scam that you should be aware of.  
A common way to catch a fish is to put food on a hook so the fish will want to eat it. Once they bite the food, they will be hooked. Phishing scams on the internet work the same way. People who want to steal your information are like fishermen.
        </Text>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.pic} source={require('../images/imgg1.png')} />
        </View>

        <Text style={styles.body}>
           They send you an email or instant message through social media site or an online game. They often pretend to be someone they aren't and ask you for private information or they tell you to click a hyperlink, so you can complete an important task. If you give them the information or click the hyperlink, you will be hooked. But don't worry. These four practices can help protect you from phishing scams. 

Practice number one, be careful of suspicious messages. Scammers try to make their messages look official and familiar, so you trust them. Think twice when you receive a suspicious message and avoid sharing personal information over message or email. This includes your home address, bank information, passwords, and more. Don't click on a link or download a file if you don't know or trust the sender. 
        </Text>
             <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.pic2} source={require('../images/imgg2.png')} />
        </View>
        <Text style={styles.body}>
          Practice number two, look for signs that a webpage is safe and secure. Before you provide credit card info, enter a password or provide other personal info, verify that you are on a trusted secure website. Most secure websites have the prefix https at the beginning of the URL in the browser address bar. Additionally, make sure you are on the right webpage. Scammers often try to lead you to webpages that appear to be official and use misspellings of company names to trick you. www.microsoft.net is not the same as Microsoft's official website at www.microsoft.com. 

Always check the URL to make sure you're on the right webpage. 
Practice number three, keep your web browser and operating system up to date. You can turn on automatic updates to make sure the latest software releases are automatically installed on your computer. Keeping your device software up to date means you will receive the latest security updates that help to protect your computer. 


        </Text>
     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.pic3} source={require('../images/imgg3.png')} />
        </View>
        <Text style={styles.body}>
         Practice number four, install verified anti-malware software on your devices. This is special software designed to protect your computer from harmful software and hackers. Don't be the next fish to get hooked. When you use the internet, remember to think before you click, download, or share to protect yourself from phishing scams online. 


        </Text>

   
   
        <TouchableOpacity style={styles.button} onPress={this.press}>
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
  }
}

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
    width: 392,
    height: 309,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    width: 360,
    height: 185,
  },
  pic2: {
    width: 360,
    height: 191,
  },
  pic3: {
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
    marginBottom: 40,
  },
});
