import React, {useEffect, useState} from 'react';
import styles from './todo.style';
import {CheckBox} from 'native-base';
import {
  Text,
  View,
  FlatList,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {requestGetAPI} from '../../services/ApiHelper';
import {handleDate} from '../../utils';

const TodoPage = ({route, navigation}) => {
  const {acc_token, category_id} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [editedItem, setEditedItem] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    requestGetAPI(`notes/category/${category_id}/`, acc_token)
      .then((res) => {
        setData(res);
      })
      .catch((e) => console.log(e.response));
  }, [acc_token, category_id]);

  const handleEditItem = (edited) => {
    const newData = data.map((item) => {
      if (item.id === edited) {
        item.content = inputText;
        return item;
      }
      return item;
    });
    setData(newData);
  };

  const renderItem = ({item}) => (
    <TouchableHighlight
      onPress={() => {
        setModalVisible(true);
        setInputText(item.content);
        setEditedItem(item.id);
      }}
      underlayColor={'#f1f1f1'}>
      <View style={styles.item}>
        <View style={styles.marginLeft}>
          <CheckBox
            checked={data.is_complete}
            style={[{borderRadius: 10}]}
            onPress={() => alert('asu')}
          />
        </View>
        <Text style={styles.text}> {item.content} </Text>
        <Text style={[styles.date]}>{handleDate(item.deadline)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}> List Header </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Change text:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              setInputText(text);
              console.log('state ', inputText);
            }}
            defaultValue={inputText}
            editable={true}
            multiline={false}
            maxLength={200}
          />
          <TouchableHighlight
            onPress={() => {
              handleEditItem(editedItem);
              setModalVisible(false);
            }}
            style={[styles.touchableHighlight]}
            underlayColor={'#f1f1f1'}>
            <Text style={styles.text}>Save</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};
export default TodoPage;
