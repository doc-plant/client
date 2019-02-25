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
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Result from '../components/result'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const { height, width } = Dimensions.get('window')
class Results extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Result',
    headerStyle: {
      backgroundColor: 'rgb(59, 133, 5)',
      borderBottomWidth: 0,

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: (
      <TouchableOpacity
        style={{ width: 30, color: "#fff", paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}>
        <Icon name={Platform.OS === "ios" ? "ios-menu" : "md-menu"} size={30} style={{ color: "#fff" }} />
      </TouchableOpacity>
    ),
  })
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }


  render() {
    const { navigation: { navigate }, img } = this.props
    console.log(img);
    
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
              <View style={{ marginTop: 5, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Tomato
                </Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  Tomato Spider mites Two spotted spider mite
                                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                    source={{ uri: img, isStatic: true }}
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
                  <Result imageUri={this.props.img}
                    name="Bacterial_spot"
                  />
                  <TouchableOpacity 
                  onPress={() => {
                    navigate('Detail')
                  }}>
                    <Result imageUri={this.props.img}
                      name="Pepper bell healthy"
                    />
                  </TouchableOpacity>

                  <Result imageUri={this.props.img}
                    name="Tomato Spider mites"
                  />
                </ScrollView>
              </View>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  img: state.content.img
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Results)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});