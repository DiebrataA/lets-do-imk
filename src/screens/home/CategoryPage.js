import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ListView from '../../components/common/ListView';
import {requestGetAPI} from '../../services/ApiHelper';

const CategoryPage = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    requestGetAPI('category/', props.jwt).then((res) => {
      setCategory(res);
    });
  }, [props.jwt]);

  return (
    <View styles={styles}>
      {category.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.container}
          onPress={() => props.navigation.navigate('TodoPage')}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default CategoryPage;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
