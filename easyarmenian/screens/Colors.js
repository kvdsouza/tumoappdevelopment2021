import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class App extends React.Component {
  render() {
    return (
     <ScrollView style={styles.container}>
       <Text style={styles.paragraph}>Red կարմիր (karmir)</Text> 
       <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'red',
                  borderRadius: 20,
                  backgroundColor: 'red',
                }}></Text>

        <Text style={styles.paragraph}>Orange նարնջագույն (narnjaguyn)</Text> 
       <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'orange',
                  borderRadius: 20,
                  backgroundColor: 'orange',
                }}></Text>

        <Text style={styles.paragraph}>Yellow դեղին (deghin)</Text> 
       <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'yellow',
                  borderRadius: 20,
                  backgroundColor: 'yellow',
                }}></Text>

        <Text style={styles.paragraph}>Green կանաչ (kanach)</Text> 
       <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'green',
                  borderRadius: 20,
                  backgroundColor: 'green',
                }}></Text>

        <Text style={styles.paragraph}>Blue երկնագույն (yerknaguyn)</Text> 
       <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'lightblue',
                  borderRadius: 20,
                  backgroundColor: 'lightblue',
                }}></Text>

        <Text style={styles.paragraph}>Indigo կապույտ (kapuyt)</Text> 
       <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'blue',
                  borderRadius: 20,
                  backgroundColor: 'blue',
                }}></Text>

         <Text style={styles.paragraph}>Violet մանուշակագույն (manushakaguyn)</Text> 
       <Text
                style={{
                  margin: 8,
                  paddingVertical: 40,
                  paddingHorizontal: 80,
                  borderWidth: 2,
                  borderColor: 'purple',
                  borderRadius: 20,
                  backgroundColor: 'purple',
                }}></Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    width: windowWidth,
    height: windowHeight,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
