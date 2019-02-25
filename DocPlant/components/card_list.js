import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, Dimensions, FlatList, TouchableHighlight} from 'react-native';


let { height, width } = Dimensions.get('window');
export default class Card_List extends Component {
  render() {
    const { image, labelId: {fixLabel}, createdAt} = this.props.item
    return (
      <View style={style.list}>
        <View style={style.list_image}>
          <Image source={{ uri: image }}
            style={{ width: 80, height: 80 }} />
        </View>
        <View style={style.list_title}>
          <Text style={{ color: 'black', fontSize: 13 }} >
           {fixLabel}
          </Text>
          <Text>
            {fixLabel.split(' ')[0]}
          </Text>
          <Text>
          </Text>
          <Text>
           {createdAt.toString()}
          </Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  list: {
    flexDirection: 'row',
    margin: 5,
    width: 365,
    height: 100,
    borderBottomWidth: 0.7,
    borderColor: "#cce6ff",
    backgroundColor: 'white',
    borderRadius: 10
  },
  list_image: {
    margin: 10,
    width: 80,
    height: 80,
    borderRadius: 10,
    // backgroundColor: 'red'
  },
  list_title: {
    margin: 10,
    width: 260,
    height: 80,
    // backgroundColor: 'red'
  }
})