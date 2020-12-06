import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import ListView from '../../components/common/ListView';
import {requestGetAPI} from '../../services/ApiHelper';
import {TextLink} from '../../components/common';
import {removeData} from '../../services';

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
        // <View key={item.id}>
        //   <Text
        //     onPress={() =>
        //       navigation.navigate('TodoPage', {
        //         acc_token: acc_token,
        //         category_id: item.id,
        //       })
        //     }>
        //     {item.name}
        //   </Text>
        // </View>
        <ListView
          item={item}
          key={item.id}
          callback={() =>
            navigation.navigate('TodoPage', {
              acc_token: acc_token,
              category_id: item.id,
            })
          }
        />
      ))}

      <TextLink
        onPress={() => {
          removeData('user_access_token');
          navigation.navigate('LoginPage');
        }}>
        Logout
      </TextLink>
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
