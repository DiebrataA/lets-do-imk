import React, {useEffect, useState} from 'react';
import styles from './todo.style';
import {CheckBox} from 'native-base';
import {Text, View, FlatList, TouchableHighlight} from 'react-native';
import {
  requestGetAPI,
  requestPostAPI,
  requestPutAPI,
} from '../../services/ApiHelper';
import {handleDate} from '../../utils';
import AddTodoButton from '../../components/common/AddTodoButton';
import ModalWrapper from '../../components/common/EditTodoModal';

const TodoPage = ({route, navigation}) => {
  const {acc_token, category_id, category_name} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [deadline, setDeadline] = useState(new Date());
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
        item.deadline = deadline;
        const payload = {
          is_complete: item.is_complete,
          deadline: deadline,
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

  const handleNewTodo = () => {
    setModalVisible(true);
    setInputText('');
    const newTodo = {
      is_complete: false,
      deadline: deadline,
      content: inputText,
      category: category_id,
    };
    requestPostAPI('notes/', acc_token, newTodo)
      .then((res) => {
        data.push(res);
        setData(data);
      })
      .catch((error) => console.log(error.message));
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
          <Text
            style={[
              styles.text,
              {textDecorationLine: item.is_complete ? 'line-through' : 'none'},
            ]}>
            {item.content}
          </Text>
        </View>
        <Text style={[styles.date]}>{handleDate(item.deadline)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}> {category_name}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled={true}
      />
      <ModalWrapper
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        setInputText={setInputText}
        inputText={inputText}
        handleEditItem={handleEditItem}
        editedItem={editedItem}
        deadline={deadline}
        setChangeDate={setDeadline}
      />
      <AddTodoButton onPress={handleNewTodo} />
    </View>
  );
};
export default TodoPage;
