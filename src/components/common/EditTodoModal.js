import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../screens/home/todo.style';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from 'react-native-elements';
import calendarIcon from '../../assets/Calendar.png';

const ModalWrapper = (props) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <Modal
      animationType="fade"
      visible={props.isModalVisible}
      onRequestClose={() => props.setModalVisible(false)}>
      <View style={styles.modalView}>
        <TouchableOpacity onPress={props.deleteThis}>
          <Text>❌ Delete</Text>
        </TouchableOpacity>
        <Text style={styles.textTitle}>
          {props.isNew ? 'New Task' : 'Edit Task'}
        </Text>
        <View />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              setDate(selectedDate);
              props.setChangeDate(selectedDate ? selectedDate : date);
              setShow(false);
            }}
          />
        )}
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            props.setInputText(text);
          }}
          defaultValue={props.inputText}
          editable={true}
          multiline={false}
          maxLength={200}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{flex: 1, marginLeft: 10}}>
            <Image source={calendarIcon} style={{marginVertical: 10}} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (!props.isNew) {
                props.handleEditItem(props.editedItem);
              } else {
                props.setIsNew(false);
                props.handleNewTodo();
              }
              props.setIsNew(false);
              props.setModalVisible(false);
            }}
            style={[styles.touchableHighlight]}
            underlayColor={'#f1f1f1'}>
            <Text style={styles.textSave}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ModalWrapper;
