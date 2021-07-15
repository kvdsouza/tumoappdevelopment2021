import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACHIEVEMENTS</Text>
      <FlatList
        style={{ margin: '7%' }}
        numColumns={2}
        data={FlatListData['catpics']}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.src}
              style={{
                width: 125,
                height: 125,
                resizeMode: 'contain',
                margin: 15,
              }}
            />
            <Text style={styles.text}>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    marginLeft: 42,
    marginRight: 42,
    borderRadius: 30,
  },
  title: {
    fontSize: 31,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginTop: 24,
    textAlign: 'center',
  },

  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
    fontStyle: 'normal',
    fontFamily: 'Inter',
  },
});
var FlatListData = {
  catpics: [
    {
      src: require('../images/l.png'),
      caption: 'DISCOVERER',
    },
    {
      src: require('../images/newcomer.png'),
      caption: 'NEWCOMER',
    },
    {
      src: require('../images/solver.png'),
      caption: 'SOLVER',
    },
    {
      src: require('../images/inventor.png'),
      caption: 'INVENTOR',
    },
    {
      src: require('../images/r.png'),
      caption: 'GENIUS',
    },
    {
      src: require('../images/v.png'),
      caption: 'DREAMER',
    },
  ],
};
