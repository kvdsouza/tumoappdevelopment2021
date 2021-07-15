import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import Secondpage from './secondpage';
import Thirdpage from './thirdpage';
import Firstpage from './firstpage';
import firebase from '../firebase.js';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';

const Fourthpage = ({ navigation }) => {
  const [speeches, setSpeeches] = useState([]);

  const readPosts = () => {
    firebase
      .database()
      .ref('posts')
      .on('value', (snapshot) => {
        const posts = snapshot.val();
        var speechs = [];
        for (var key in posts) {
          const speech = posts[key].speech;
          speechs.push(speech);
        }
        setSpeeches(speechs);
      });
  };

  useEffect(() => {
    readPosts();
  }, []);

  const hearOrder = (orderNum) => {
    let a = 'Hear Order ' + orderNum;
    return a;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={speeches}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Button
              onPress={() => navigation.navigate('FifthPage', { order: item })}
              title={hearOrder(speeches.indexOf(item) + 1)}
              color="#841584"
            />
          </View>
        )}
      />
      {console.log('speeches: ' + speeches)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef7e6',
    height: '100%',
  },
});
export default Fourthpage;
