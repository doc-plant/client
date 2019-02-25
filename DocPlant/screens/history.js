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
  Platform,
  AsyncStorage
} from "react-native";
import { local } from '../helpers';
import Card_List from '../components/card_list';
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
    histories: []
  }

  async componentDidMount () {
    const { data } = await local.get('/histories', {
      headers: {
        token: await AsyncStorage.getItem('userToken')
      }
    })
    this.setState({
      histories: data
    })
  }

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <View style={{ flex: 1 }}>
      <View style={style.container}>
          <View style={style.container}>
            {
              <FlatList
                data={this.state.histories}
                initialNumToRender={8}
                keyExtractor={(item ) => item._id}
                renderItem={({ item }, index) =>
                  <TouchableHighlight
                    onPress={() => {
                      navigate('HistoryDetail', {historyId: item._id});
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
// const mapStateToProps = (state) => ({
//   img: state.content.img
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default History;

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