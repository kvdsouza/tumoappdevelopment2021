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

    this.props.navigation.navigate('Eighth');
  };

  render() {
    

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.paragraph}>CHAPTER 1. DESCRIBING THE COMPUTER</Text>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.icon} source={require('../images/girl2.png')} />
        </View>

        <Text style={styles.header}>What is a computer?</Text>

        <Text style={styles.body}>
          Computers are now used everywhere around us. You will find them at
          work, in stores, in hospitals, and at home. A computer is an
          electronic machine that can process, store, and retrieve different
          types of data and information. {"\n"}{"\n"}You can use the computer to perform
          many tasks such as writing documents, playing games, sending emails,
          learning new skills, browsing the web, and watching movies. All
          computers consist of two main parts, hardware and software.
        </Text>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.pic} source={require('../images/pic1.png')} />
        </View>

        <Text style={styles.body}>
          Software refers to the intangible parts of a computer, the parts that
          can't be touched. This includes the instructions that control how the
          hardware functions, the applications running on the computer, and the
          data stored on the computer. {"\n"}{"\n"}Hardware includes all of the physical
          parts that make up a computer such as the monitor and the central
          processing unit, that keeps data moving. There are various types of
          computers that you may encounter, but they all share the same
          fundamental purpose of processing and storing information.
        </Text>
        <Text style={styles.header}>
          Describing the primary parts of a computer
        </Text>
        <Text style={styles.body}>
          Let's take a look at the primary hardware components that make up a
          computer. This includes the base unit, the monitor, the speakers, the
          keyboard, and the mouse. Each part serves a purpose that allows us to
          operate and interact with a computer. {"\n"}{"\n"}The base unit holds the brains
          of the computer, the physical parts that process information and make
          the computer function. It contains important components like the CPU
          or Central Processing Unit, the motherboard, the hard disk, and the
          memory units. It also contains ports that allow you to plug additional
          components or devices into your computer, like headphones or a
          printer.
        </Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.pic2} source={require('../images/pic2.png')} />
        </View>
        <Text style={styles.body}>
          The monitor, sometimes referred to as the display, is the part of the
          computer that displays output for users to view, like graphics and
          text. In some cases, the monitor is a separate piece that you must
          physically plug into your computer. In other cases, the monitor is
          built into the computing device. The speakers allow you to listen to
          sound that comes from the computer. In some cases, the speakers are
          built into the computer. In other cases, you must physically connect
          speakers to your computer in order to hear audio.
        </Text>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.pic3} source={require('../images/pic3.png')} />
        </View>
        <Text style={styles.body1}>
          The keyboard is an input device used to interact with a computer.
          Using a keyboard, you can type letters, numbers, and characters that
          will be processed by the computer. Keyboards can be physical and
          attached to the computer, or they can be virtual, where you use a
          touch display to type by directly touching the screen of the monitor.
         {"\n"}{"\n"}The mouse is an important device used to interact with items displayed
          on the screen. When you move the mouse, a pointer on the screen also
          moves, allowing you to operate the computer. You can plug a physical
          mouse into your computer or use the touch pad that is built into some
          computers and provides the same function. All of these parts may not
          look the same for every type of computer, but they still provide the
          same functions.
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
