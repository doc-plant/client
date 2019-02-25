import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, Dimensions, FlatList, TouchableHighlight} from 'react-native';


let { height, width } = Dimensions.get('window');
export default class Card_List extends Component {
  render() {
    return (
      <View style={style.list}>
        <View style={style.list_image}>
          <Image source={{ uri: `http://pngimg.com/uploads/tomato/tomato_PNG12590.png` }}
            style={{ width: 80, height: 80 }} />
        </View>
        <View style={style.list_title}>
          <Text style={{ color: 'black', fontSize: 13 }} >
           Tomatto
          </Text>
          <Text>
            Tes
          </Text>
          <Text>
          </Text>
          <Text>
           Tes
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