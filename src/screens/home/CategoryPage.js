import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ListView from '../../components/common/ListView';
import {requestGetAPI} from '../../services/ApiHelper';
import {TextLink, Input} from '../../components/common';
import {removeData} from '../../services';

const CategoryPage = ({route, navigation}) => {
  const {acc_token} = route.params;
  console.log('CATEGORY PAGE');
  const [category, setCategory] = useState([]);

  useEffect(() => {
    requestGetAPI('category/', acc_token).then((res) => {
      setCategory(res);
    });
  }, [acc_token]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Input placeholder="search task" />
      </View>
      {category.map((item) => (
        <ListView
          item={item}
          key={item.id}
          callback={() =>
            navigation.navigate('TodoPage', {
              acc_token: acc_token,
              category_id: item.id,
              category_name: item.name,
            })
          }
        />
      ))}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addIcon}>+</Text>
      </TouchableOpacity>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 33,
  },
  addButton: {
    padding: 10,
    margin: 15,
    backgroundColor: 'transparnet',
    borderWidth: 3,
    borderColor: '#9088D4',
    height: 142,
    width: 142,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 60,
    color: '#9088D4',
  },
  section: {
    flexDirection: 'row',
    backgroundColor: 'rgba(144, 136, 212, 0.2)',
    marginBottom: 16,
    fontSize: 16,
    padding: 10,
    borderRadius: 16,
  },
};
