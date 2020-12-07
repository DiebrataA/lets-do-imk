import React, {useEffect, useState} from 'react';
import styles from './todo.style';
import {CheckBox} from 'native-base';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {
  requestDeleteAPI,
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
  const [isNew, setIsNew] = useState(false);
  const [isCompleteTask, setIsCompleteTask] = useState(false);

  useEffect(() => {
    requestGetAPI(`notes/category/${category_id}/`, acc_token)
      .then((res) => {
        setData(res);
      })
      .catch((e) => console.log(e.response));
  }, [acc_token, category_id]);

  const handleDelete = (edited) => {
    const newData = data.filter((item) => item.id !== edited);
    requestDeleteAPI(`notes/${edited}/`, acc_token).catch((error) =>
      console.log(error.message),
    );
    setModalVisible(false);
    setData(newData);
  };

  const handleCheckBox = (edited) => {
    const newData = data.map((item) => {
      if (item.id === edited) {
        item.is_complete = !item.is_complete;
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
    const sorted = newData.sort((a, b) => {
      return a.is_complete - b.is_complete;
    });
    setData(sorted);
  };

  const handleEditItem = (edited) => {
    const newData = data.map((item) => {
      if (item.id === edited) {
        item.content = inputText;
        item.deadline = deadline ? deadline : item.deadline;
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

  const handleNewTodo = () => {
    setModalVisible(true);
    setInputText('');
    setIsNew(true);
  };

  const actuallyPostNewTodo = () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const ntd = {
      is_complete: false,
      deadline: deadline ? deadline : new Date(),
      content: inputText,
      category: category_id,
    };
    console.log(ntd);
    requestPostAPI('notes/', acc_token, ntd)
      .then((res) => {
        data.push(res);
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
      })
      .catch((error) => console.log(error.message));
    ntd.id = id;
    data.push(ntd);
    setData(data);
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
    <SafeAreaView style={{height: '100%'}}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}> {category_name} </Text>
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
          deleteThis={() => handleDelete(editedItem)}
          editedItem={editedItem}
          deadline={deadline}
          setChangeDate={setDeadline}
          isNew={isNew}
          setIsNew={setIsNew}
          handleNewTodo={actuallyPostNewTodo}
        />
      </View>

      <AddTodoButton onPress={handleNewTodo} />
    </SafeAreaView>
  );
};
export default TodoPage;
