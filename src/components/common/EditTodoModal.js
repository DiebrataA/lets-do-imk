import {Modal, Text, TextInput, TouchableHighlight, View} from 'react-native';
import styles from '../../screens/home/todo.style';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from 'react-native-elements';

const ModalWrapper = (props) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <Modal
      animationType="fade"
      visible={props.isModalVisible}
      onRequestClose={() => props.setModalVisible(false)}>
      <View style={styles.modalView}>
        <Text style={styles.text}>Create Todo:</Text>
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
        <Button type={'Outline'} onPress={() => setShow(true)} title="📅" />

        <TouchableHighlight
          onPress={() => {
            props.handleEditItem(props.editedItem);
            props.setModalVisible(false);
          }}
          style={[styles.touchableHighlight]}
          underlayColor={'#f1f1f1'}>
          <Text style={styles.text}>Save</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};
export default ModalWrapper;
