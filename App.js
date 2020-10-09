import React, {useState} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import AppBar from './Components/AppBar';
import Model from './Components/Model';
import TodoList from './Components/TodoList';
import store from './redux/store';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Provider store={store}>
      <View>
        <AppBar showModel={setModalVisible} />
        <Model modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <TodoList />
      </View>
    </Provider>
  );
};

export default App;
