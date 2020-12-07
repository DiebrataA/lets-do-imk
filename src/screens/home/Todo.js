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
  SafeAreaView,
} from 'react-native';
import {requestGetAPI, requestPutAPI} from '../../services/ApiHelper';
import {handleDate} from '../../utils';
import AddTodoButton from '../../components/common/AddTodoButton';
import {ScrollView} from 'react-native-gesture-handler';

const TodoPage = ({route, navigation}) => {
  const {acc_token, category_id, category_name} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [editedItem, setEditedItem] = useState(0);
  const [data, setData] = useState([]);
  const [isCompleteTask, setIsCompleteTask] = useState(false);

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

  const isComplete = () => {
    setIsCompleteTask(data.is_complete);
    data.is_complete == true ? alert('true') : alert('false');
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
              checked={data.is_complete}
              style={[{borderRadius: 10}]}
              onPress={isComplete}
            />
          </View>
          <Text style={styles.text}> {item.content} </Text>
        </View>
        <Text style={[styles.date]}>{handleDate(item.deadline)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={{width: '100%'}}>
      <ScrollView>
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
      </ScrollView>
      <AddTodoButton />
    </SafeAreaView>
  );
};
export default TodoPage;
