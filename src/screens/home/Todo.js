import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {requestGetAPI} from '../../services/ApiHelper';
import TodoList from '../../components/TodoList';

const TodoPage = ({route, navigation}) => {
  const {acc_token, category_id} = route.params;
  console.log('TODO PAGE');
  console.log(acc_token);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    requestGetAPI(`notes/category/${category_id}/`, acc_token)
      .then((res) => {
        setTodo(res);
      })
      .catch((e) => console.log(e.response));
  }, [acc_token, category_id]);

  return (
    <View>
      {todo.map((item) => (
        <TodoList key={item.id} item={item} />
      ))}
    </View>
  );
};
export default TodoPage;
