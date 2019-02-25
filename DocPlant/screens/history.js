import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} from "react-native";
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';

import Card_List from '../components/card_list';



import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const { height, width } = Dimensions.get('window')


class History extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'History',
    headerStyle: {
      backgroundColor: 'rgb(59, 133, 5)',
      borderBottomWidth: 0,

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  })
  state = {
    active: 'true',
    search: '[{},{},{}]'
  }

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <View style={{ flex: 1 }}>
      <View style={style.container}>
          <View style={style.container}>
            {
              <FlatList
                data={this.state.search}
                initialNumToRender={8}
                renderItem={({ item }, index) =>
                  <TouchableHighlight
                    onPress={() => {
                      navigate('HistoryDetail', {img:"https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Ftomato.png?alt=media&token=9fd573e5-959e-4963-8337-401c81a01c9b"});
                    }}
                  >
                    <Card_List item={item}></Card_List>
                  </TouchableHighlight>
                }>
              </FlatList>
            }
          </View>
        </View>
      </View>

    );
  }
}
const mapStateToProps = (state) => ({
  img: state.content.img
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(History)

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },
  header: {
    width: width,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(61, 64, 68)',
    color: "white"
  },
  header_text: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 30,
  },
  search: {
    width: width,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})