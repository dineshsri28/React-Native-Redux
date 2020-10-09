import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default function AppBar({showModel}) {
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.title}>Todos</Text>
      <TouchableHighlight style={styles.button} onPress={() => showModel(true)}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    maxHeight: 50,
    backgroundColor: '#ED264F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    marginVertical: 10,
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 12,
    color: 'black',
  },
});
