import {useSelector} from 'react-redux';

import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import TodoCard from './TodoCard';

export default function TodoList() {
  const state = useSelector((state) => state.todos);
  console.log(state);

  return (
    <FlatList
      contentContainerStyle={{paddingBottom: '30%'}}
      data={state}
      renderItem={(data) => <TodoCard data={data} />}
    />
  );
}

const styles = StyleSheet.create({});
