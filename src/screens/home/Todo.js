import React, {useEffect, useState} from 'react';
import styles from './todo.style';
import {CheckBox} from 'native-base';
import {Text, View, FlatList, TouchableHighlight} from 'react-native';
import {requestGetAPI, requestPutAPI} from '../../services/ApiHelper';
import {handleDate} from '../../utils';
import AddTodoButton from '../../components/common/AddTodoButton';
import ModalWrapper from '../../components/common/EditTodoModal';

const TodoPage = ({route, navigation}) => {
  const {acc_token, category_id, category_name} = route.params;
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

  const handleCheckBox = (edited) => {
    const newData = data.map((item) => {
      if (item.id === edited) {
        item.is_complete = !item.is_complete;
        const payload = {
          is_complete: !item.is_complete,
          deadline: item.deadline,
          content: item.content,
          category: category_id,
        };
        requestPutAPI(`notes/${item.id}/`, acc_token, payload).catch((error) =>
          console.log(error.message),
        );

        return item;
      }
      return item;
    });
    setData(newData);
  };

  const handleEditItem = (edited) => {
    const newData = data.map((item) => {
      if (item.id === edited) {
        item.content = inputText;
        const payload = {
          is_complete: item.is_complete,
          deadline: item.deadline,
          content: item.content,
          category: category_id,
        };
        requestPutAPI(`notes/${item.id}/`, acc_token, payload).catch((error) =>
          console.log(error.message),
        );
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
      <View>
        <View style={styles.itemWrap}>
          <View style={styles.marginLeft}>
            <CheckBox
              checked={item.is_complete}
              style={[{borderRadius: 10}]}
              onPress={() => {
                handleCheckBox(item.id);
              }}
            />
          </View>
          <Text style={styles.text}> {item.content} </Text>
        </View>
        <Text style={[styles.date]}>{handleDate(item.deadline)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}> {category_name} </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled
      />
      <ModalWrapper
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        setInputText={setInputText}
        inputText={inputText}
        handleEditItem={handleEditItem}
        editedItem={editedItem}
      />
      <AddTodoButton />
    </View>
  );
};
export default TodoPage;
