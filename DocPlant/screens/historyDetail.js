import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Result from '../components/result'
import { local } from '../helpers';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const { height, width } = Dimensions.get('window')

class ResultHS extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Result',
    headerStyle: {
      backgroundColor: 'rgb(59, 133, 5)',
      borderBottomWidth: 0,

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  })
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }
  state = {
    history: {}
  }
  async componentDidMount () {
    const { navigation } = this.props
    const id = navigation.getParam('historyId')
    const { data } = await local.get(`/histories/${id}`, {
      headers: {
        token: await AsyncStorage.getItem('userToken')
      }
    })
    this.setState({
      history: data
    })
  }


  render() {
    const { history, recommend, youtube } = this.state.history
    const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
        {history && 
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
              <View style={{ marginTop: 5, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  {history.labelId.fixLabel}
                </Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  {history.labelId.fixLabel.split(' ')[0]}
                                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={{ uri: history.image, isStatic: true }}
                  />
                </View>
              </View>
              <Text style={{ marginTop: 25, fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                Treatment Recommendations
                            </Text>
              <View style={{ height: 190, marginTop: 15 }}>
              <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {recommend.map(r => (
                    <TouchableOpacity
                      key={r._id}
                      onPress={() => {
                       navigation.navigate('Detail', {recommend: r, user: history.userId.fullname, youtubes: youtube})
                      }}>
                      <Result imageUri={history.image}
                        name={r.article.split(' ')[0] + '...'}
                      />
                    </TouchableOpacity>
                  ))
                  }
                </ScrollView>
              </View>

            </View>
          </ScrollView>
        }
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  imgs: state.content.img
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ResultHS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});