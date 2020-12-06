import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View} from 'react-native-reanimated';
import {TextInput} from 'react-native-gesture-handler';
import {CheckBox, Body} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    const {title, completed, createdAt} = this.props.todo;
    this.state = {
      title,
      completed,
      createdAt,
    };
  }

  onSubmit = () => {
    if (this.state.title.length > 0) {
      this.props.onAdd(this.state);
    }
    return null;
  };

  setStateUtil = (property, value = undefined) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    const {title, completed} = this.state;
    const {onBlur} = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 10,
          paddingBottom: 5,
          paddingTop: 5,
        }}>
        <CheckBox
          checked={completed}
          onPress={() => this.setStateUtil('completed', !completed)}
        />
        <Body
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 25,
          }}>
          <TextInput
            style={{width: '90%'}}
            placeholder="What needs to be done?"
            autoFocus
            underLineColorAndroid="transparent"
            underlineColor="transparent"
            blurOnSubmit
            onSubmitEditing={this.onSubmit}
            onChangeText={(changedTitle) =>
              this.setStateUtil('title', changedTitle)
            }
            value={title}
            autoCorrect={false}
            autoCapitalize="none"
            onBlur={onBlur}
          />
        </Body>
        <TouchableOpacity
          onPress={() => this.props.onCancelDelete}
          style={{paddingLeft: 25, paddingRight: 15}}>
          <Ionicons
            name="ios-trash-outline"
            color={`${title.length > 0 ? 'black' : 'grey'}`}
            size={23}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
