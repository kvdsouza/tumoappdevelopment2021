import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import * as Speech from 'expo-speech';
import { Button } from 'react-native-elements';


const Fifthpage = ({ route }) => {
  const { order } = route.params;

  const EXAMPLES = [{ language: 'en', text: order }];

  const [selectedExample, setSelectedExample] = useState(EXAMPLES[0]);
  const [inProgress, setInProgress] = useState(false);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.7);
  const [resum, setResum] = useState(false);

  const _stop = () => {
    Speech.stop();
  };

  const _pause = () => {
    Speech.pause();
    setResum(true);
  };

  const _resume = () => {
    Speech.resume();
    setResum(false);
  };

  const _speak = () => {
    const start = () => {
      setInProgress(true);
    };
    const complete = () => {
      setInProgress(false);
    };

    Speech.speak(selectedExample.text, {
      language: selectedExample.language,
      pitch: pitch,
      rate: rate,
      onStart: start,
      onDone: complete,
      onStopped: complete,
      onError: complete,
    });
  };

  const _increasePitch = () => {
    setPitch(pitch + 0.1);
  };

  const _increaseRate = () => {
    setRate(rate + 0.1);
  };

  const _decreasePitch = () => {
    setPitch(pitch - 0.1);
  };

  const _decreaseRate = () => {
    setRate(rate - 0.1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.separator} />

      <View style={styles.controlRow}>
        <Button disabled={inProgress} onPress={_speak} title="Speak" />

        <Button disabled={!inProgress} onPress={_stop} title="Stop" />
      </View>

      <View style={styles.controlRow}>
        <Button disabled={!inProgress} onPress={_pause} title="Pause" />

        <Button disabled={!resum} onPress={_resume} title="Resume" />
      </View>

      <Text style={styles.controlText}>Pitch: {pitch.toFixed(2)}</Text>
      <View style={styles.controlRow}>
        <Button
          onPress={_increasePitch}
          title="Increase"
          type="clear"
          disabled={inProgress}
        />

        <Text>/</Text>

        <Button
          onPress={_decreasePitch}
          title="Decrease"
          type="clear"
          disabled={inProgress}
        />
      </View>

      <Text style={styles.controlText}>Rate: {rate.toFixed(2)}</Text>
      <View style={styles.controlRow}>
        <Button
          onPress={_increaseRate}
          title="Increase"
          type="clear"
          disabled={inProgress}
        />

        <Text>/</Text>
        <Button
          onPress={_decreaseRate}
          title="Decrease"
          type="clear"
          disabled={inProgress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 0,
    marginBottom: 15,
  },
  controlText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
    textAlign: 'center',
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default Fifthpage;
