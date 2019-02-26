import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ImageBackground, AsyncStorage, } from 'react-native';
import { local } from '../helpers/index';
import axios from 'axios';


import { Button, Content, Item, Input } from 'native-base';
import { isLogin } from '../actions/user'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



let { height, width } = Dimensions.get('window');

const theme = {
  Button: {
    color: 'white',
    titleStyle: {
      color: 'white',
    },
    type: {
      color: 'white',
    }
  },
};

class Register extends Component {
  static navigationOptions = {
    title: 'Please sign in !',
  };
  // googleSignin = async () => {
  //   try {
  //     const result = await Google.logInAsync({
  //       iosClientId: ".",
  //       scopes: ['profile', 'email'],
  //     });


  //     if (result.type === 'success') {
  //       await AsyncStorage.setItem('userAuth', result.user.name);
  //       await AsyncStorage.setItem('userphotoUrl', result.user.photoUrl);

  //       await AsyncStorage.setItem('userToken', result.accessToken);
  //       this.props.navigation.navigate('Home')
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     return { error: true };
  //   }
  // }
  state = {
    fullname: '',
    email: '',
    password: '',
    avatar: 'https://firebasestorage.googleapis.com/v0/b/docplant-f7bfd.appspot.com/o/icon%2Fprofile.png?alt=media&token=63871830-e775-4c93-bcfc-280dbc039976'
  }

  handleChange = (name) => (value) => {
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = async () => {
    try {
      const { data } = await local.post('/users', this.state)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { navigation: { navigate } } = this.props
    const { fullname, email, password } = this.state
    return (
      <View style={style.container}>
        <ImageBackground source={require('../assets/background_login.png')} style={{ width: '100%', height: '100%' }}>
          <View style={style.header}>
            <Image
              style={style.drawerImage}
              source={require('../assets/login_icon_white.png')} />
          </View>
          <View style={style.body}>

            <View style={{width:"85%", color:"#fff", marginBottom:20, padding:10,  borderWidth:0}}>
              <Item rounded  style={{margin:10, width:"100%",backgroundColor: "rgba(255, 255, 255, 0.5)", paddingLeft:10,  borderWidth:0}}>
                <Input 
                  placeholder='fullname'
                  onChangeText={this.handleChange('fullname')}
                  value={fullname}
                />
              </Item>
              <Item rounded  style={{margin:10, width:"100%",backgroundColor: "rgba(255, 255, 255, 0.5)", paddingLeft:10,  borderWidth:0}}>
                <Input
                  placeholder='e-mail'
                  onChangeText={this.handleChange('email')}
                  value={email}
                />
              </Item>
              <Item rounded style={{ width:"100%" , backgroundColor: "rgba(255, 255, 255, 0.5)", paddingLeft:10, borderWidth:0}}>
                <Input  placeholder='password'
                  onChangeText={this.handleChange('password')}
                  value={password}
                />
              </Item>
            </View>

            <Button bordered light
              onPress={this.handleOnSubmit}
              style={{
                width: "84%",
                alignSelf: "center",
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color: "white",
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>Submit</Text>
            </Button>
            <Text
              style={{
                marginTop: 30,
                color: "white",
                fontWeight: 'bold',
                fontSize: 16,
              }}
              onPress={() => this.props.navigation.navigate('Login')}
            >Already have an account? SIGN IN
            </Text>
          </View>
          <View style={style.footer}>
            <Text style={{
              color: "white",
              fontWeight: 'bold',
              fontSize: 17
            }}>© 2019 DocPlant Inc. All rights reserved</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  access_token: state.user.access_token
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ isLogin }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register)

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green"
  },
  header: {
    flex: 3,
    width: width,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 3,
    width: width,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center"
  },
  footer: {
    flex: 1,
    width: width,
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    height: 120,
    width: "80%",
  }
})
