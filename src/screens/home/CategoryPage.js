import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ListView from '../../components/common/ListView';
import {requestGetAPI} from '../../services/ApiHelper';

const CategoryPage = ({route, navigation}) => {
  const {acc_token} = route.params;
  console.log('CATEGORY PAGE');
  console.log(acc_token);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    requestGetAPI('category/', acc_token).then((res) => {
      setCategory(res);
    });
  }, [acc_token]);

  return (
    <View style={styles}>
      {category.map((item) => (
        <ListView
          item={item}
          callback={() => navigation.navigate('TodoPage')}
        />
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
