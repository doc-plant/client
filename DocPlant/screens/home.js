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
import { local } from '../helpers'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ApiKeys from '../constants/config';
import * as firebase from 'firebase';
const { height, width } = Dimensions.get('window')
class Home extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'DocPlant',
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
  state = {
    active: 'false',
    userAuth: '',
    _id: '',
    plants: []
  }
  async componentDidMount() {
    let {data} = await local.get('/plants')
    this.setState({
      plants: data
    })
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

  render() {
    const {userAuth, _id, plants} = this.state
    const { navigation: { navigate } } = this.props
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/home_background.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{ flex: 1 }}>
            <ScrollView scrollEventThrottle={16}>
              <View style={{ flex: 1, paddingTop: 115 }}>
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
                  {
                    plants.map( p => (
                      <TouchableOpacity
                      key={p._id}
                      onPress={() => {
                       navigate('Disease', {diseases: p.diseases});
                     }}
                     >
                     <Recomended imageUri={p.image}
                         name={p.name}
                       />
                     </TouchableOpacity>
                       ))
                  }
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
                  <Icon name="ios-arrow-back" style={{ color: "#fff" , fontSize:25}} />
              
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
})