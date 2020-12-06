import {Modal, Text, TextInput, TouchableHighlight, View} from 'react-native';
import styles from '../../screens/home/todo.style';
import React from 'react';

const ModalWrapper = (props) => {
  return (
    <Modal
      animationType="fade"
      visible={props.isModalVisible}
      onRequestClose={() => props.setModalVisible(false)}>
      <View style={styles.modalView}>
        <Text style={styles.text}>Change text:</Text>
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
