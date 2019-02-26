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
  ImageBackground,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Fab, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import Recomended from '../components/recomended'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ApiKeys from '../constants/config';
import * as firebase from 'firebase';
const { height, width } = Dimensions.get('window')
class Home extends Component {
  state = {
    active: 'false',
    userAuth: '',
    _id: ''
  }
  async componentWillMount() {
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
    this.setState({
      userAuth: await AsyncStorage.getItem('userAuth'),
      _id: await AsyncStorage.getItem('_id')
    })
  }

  static navigationOptions = {
    drawerLabel: () => null
  }

  render() {
    const {userAuth, _id} = this.state
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/home_background.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{ flex: 1 }}>
            <ScrollView scrollEventThrottle={16}>
              <View style={{ flex: 1, paddingTop: 150 }}>
                <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                  <Text style={{ fontSize: 35, fontWeight: '700', color: "white" }}>
                    Hello,
                </Text>
                  <Text style={{ fontSize: 30, fontWeight: '700', color: "white" }}>
                    {userAuth}
                </Text>
                </View>
                <Text style={{ marginTop: 25, fontSize: 24, fontWeight: '700', paddingHorizontal: 20, paddingTop: 80 }}>
                  Plant Patients That Need Help 
                </Text>
                <View style={{ flex: 1, height: 215, marginTop: 15 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fapple.png?alt=media&token=b383b6c4-27d3-4925-a0e2-7cfc92e5ee52'}
                      name="Apple"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fbluberry.png?alt=media&token=817ef551-56cb-4903-a830-4166b09c98e5'}
                      name="Blueberry"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2FCherry.png?alt=media&token=8ad7799a-613d-4d32-a000-7fff5060daec'}
                      name="Cherry"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fcorn.png?alt=media&token=664cfb8f-a261-484a-9326-fdee61998589'}
                      name="Corn"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fgrappe.png?alt=media&token=84e0a793-31c7-4156-bec0-614238ca49d7'}
                      name="Grape"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Forange.png?alt=media&token=52f3dc79-2744-4e92-b5aa-fd4f9273f227'}
                      name="Orange"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fpeach.png?alt=media&token=0594cc08-31b6-4bbb-aaa9-acbc3c237782'}
                      name="Peach"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fpepper_bell.png?alt=media&token=ed9ef384-471c-45d3-9dcb-f7dc44d595d0'}
                      name="Pepper Bell"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fpotato.png?alt=media&token=d5210418-e6f4-40ba-9405-51c61381f571'}
                      name="Potato"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fraspberry.png?alt=media&token=5f0da24f-547a-48de-8e07-e359e03d2532'}
                      name="Raspberry"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fsoy.png?alt=media&token=6d63e5ac-acac-479c-8b76-462953d0b0ec'}
                      name="Soybean"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2FSquash.png?alt=media&token=932095bc-4ace-4316-968f-8f660a60059c'}
                      name="Squash"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fstrawberry.png?alt=media&token=b486e930-ef5c-498e-88b4-1630b423adbe'}
                      name="Strawberry"
                    />
                    <Recomended imageUri={'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Ftomato.png?alt=media&token=9fd573e5-959e-4963-8337-401c81a01c9b'}
                      name="Tomato"
                    />

                  </ScrollView>
                </View>

              </View>
            </ScrollView>
            <Fab
              active={!this.state.active}
              direction="left"
              containerStyle={{}}
              style={{ backgroundColor: "#3a8305" }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Text>+</Text>

              <Badge style={{ backgroundColor: "#FF9501" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Camera')}>
                  <Icon name="ios-camera" style={{ color: "#fff" , fontSize:25}} />
                </TouchableOpacity>
              </Badge>

              <Badge style={{ backgroundColor: "#FF9501" }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                  <Icon name="ios-person" style={{ color: "#fff", fontSize:25 }} />
                </TouchableOpacity>
              </Badge>
            </Fab>
          </View>

        </ImageBackground>
      </View>

    );
  }
}
const mapStateToProps = (state) => ({
  img: state.content.img
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});