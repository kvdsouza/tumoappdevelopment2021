import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class AlphabetTest extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      
         <FlatList
          keyExtractor = {(item, index) => item.id}
          data = {["A - Ա ա",  "B - Բ բ", "G - Գ գ", "D - Դ դ", "Ye - Ե ե", "Z - Զ զ", "E - Է է", "Y - Ը ը", "Tʰ - Թ թ", "Zh - Ժ ժ", "I - Ի ի", "L - Լ լ", "Kh - Խ խ", "Ts - Ծ ծ", "K - Կ կ", "H - Հ հ", "Dz - Ձ ձ", "Gh - Ղ ղ", "tʃ - Ճ ճ", "M - Մ մ", "Y - Յ յ", "N - Ն ն", "Sh - Շ շ", "Vo - Ո ո", "Ch - Չ չ", "P - Պ պ", "J - Ջ ջ", "Rr - Ռ ռ", "S - Ս ս", "V - Վ վ", "T - Տ տ", "R - Ր ր", "Ts - Ց ց", "U - ՈՒ ու", "Pʰ - Փ փ", " Kʰ- Ք ք", "Yev - և", "O - Օ օ", "F - Ֆ ֆ "]}
          renderItem = {({item}) =>
          <View style = {styles.container}>
          <Text style = {styles.paragraph}>
          {item}
          </Text>
          </View>
          }
          />

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ac497',
    alignItems: "center",
    width: windowWidth,
  },
  paragraph: {
    margin: 24,
    marginTop:5,
    marginBottom:5,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#fff',
    padding: 10,
    borderRadius:10,
    color:'#4ac497',
    width:'90%',
  },

  
});