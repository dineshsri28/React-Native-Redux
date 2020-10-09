import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Picker,
} from 'react-native';
import {useDispatch} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import {addTodo} from '../redux/action';
import convert from '../Helper/convert';

export default function Model({modalVisible, setModalVisible}) {
  const dispatch = useDispatch();
  // States
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');
  const [date, setDate] = useState(new Date());
  const [convertedDate, setConvertedDate] = useState('');

  const [showDate, setShowDate] = useState(false);

  const addTodos = () => {
    const payload = {
      title,
      message,
      type,
      date: convertedDate,
    };
    // console.log(payload);
    dispatch(addTodo(payload));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.modalText}>Add Todo</Text>
            <View>
              <Text style={styles.inputText}>Title</Text>
              <TextInput
                value={title}
                style={styles.input}
                onChangeText={(e) => setTitle(e)}
              />
            </View>
            <View>
              <Text style={styles.inputText}>Message</Text>
              <TextInput
                style={styles.input}
                value={message}
                onChangeText={(e) => setMessage(e)}
              />
            </View>
            <View>
              {/* Picker */}
              <Text style={styles.inputText}>Type</Text>
              <View style={{...styles.input, height: 50}}>
                <Picker
                  selectedValue={type}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(e) => setType(e)}>
                  <Picker.Item label="Success" value="success" />
                  <Picker.Item label="Error" value="error" />
                  <Picker.Item label="Warning" value="warning" />
                </Picker>
              </View>
            </View>
            {/* Date And Time Picker Div */}
            <View style={styles.buttonMainDiv}>
              <TouchableOpacity
                style={styles.buttonDiv}
                onPress={() => setShowDate(true)}>
                <Text style={styles.textStyle}>Pick Date</Text>
              </TouchableOpacity>
            </View>
            {/* Date Picker */}
            {showDate ? (
              <DateTimePicker
                minimumDate={new Date()}
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={(e, selectedDate) => {
                  setShowDate(false);
                  setDate(selectedDate);
                  setConvertedDate(convert(selectedDate));
                }}
              />
            ) : null}
            <View style={styles.buttonMainDiv}>
              <TouchableOpacity
                style={styles.buttonDiv}
                onPress={() => addTodos()}>
                <Text style={styles.textStyle}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonDiv}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    padding: 10,
    elevation: 5,
    margin: 10,
    borderRadius: 8,
  },
  modalText: {
    textAlign: 'center',
    marginTop: 20,
  },
  inputText: {
    marginBottom: -5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ED264F',
    borderRadius: 8,
    marginVertical: 10,
    paddingLeft: 10,
    height: 40,
  },
  buttonMainDiv: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonDiv: {
    flex: 1,
    height: 35,
    backgroundColor: '#ED264F',
    borderRadius: 8,
    elevation: 1,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textStyle: {
    color: 'white',
  },
});
