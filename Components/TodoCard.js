import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/action';

export default function TodoCard({data}) {
  let d = data.item;
  const dispatch = useDispatch();
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.title}>{d.title}</Text>
      <Text style={styles.subData}>{d.message}</Text>
      <Text style={styles.subData}>{d.type}</Text>
      <Text style={styles.subData}>{d.date}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(deleteTodo(d.title))}>
        <Text style={{color: 'white'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    // height: 100,
    margin: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ED264F',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    margin: 5,
  },
  subData: {
    textAlign: 'center',
    marginTop: 2,
  },
  button: {
    height: 40,
    backgroundColor: '#ED264F',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
