import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ImageBackground, AsyncStorage, } from 'react-native';
import { Google } from 'expo';

import { Button, Content, Item, Input, Icon } from 'native-base';
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

class Login extends Component {
  static navigationOptions = {
    title: 'Please sign in !',
  };
  googleSignin = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: "",
        scopes: ['profile', 'email'],
      });


      if (result.type === 'success') {
        await AsyncStorage.setItem('userAuth', result.user.name);
        await AsyncStorage.setItem('userphotoUrl', result.user.photoUrl);

        await AsyncStorage.setItem('userToken', result.accessToken);
        this.props.navigation.navigate('Home')
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <View style={style.container}>
        <ImageBackground source={require('../assets/background_login.png')} style={{ width: '100%', height: '100%' }}>
          <View style={style.header}>
            <Image
              style={style.drawerImage}
              source={require('../assets/login_icon_white.png')} />
          </View>
          <View style={style.body}>
            <View style={{ width: "85%", color: "#fff", marginBottom: 20, padding: 10, borderWidth: 0 }}>
              <Item rounded style={{ margin: 10, width: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)", paddingLeft: 10, borderWidth: 0 }}>
                <Input placeholder='e-mail' />
              </Item>
              <Item rounded style={{ width: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)", paddingLeft: 10, borderWidth: 0 }}>
                <Input placeholder='password' />
              </Item>
            </View>
            <Button bordered light
              style={{
                width: "80%",
                alignSelf: "center",
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color: "white",
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>SUBMIT</Text>
            </Button>
            <View style={{ flexDirection: 'row', marginTop: 70 }}>
              <View style={{ backgroundColor: 'white', height: 1, flex: 1, alignSelf: 'center' }} />
              <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 20, color:"white" }}>Sign in with </Text>
              <View style={{ backgroundColor: 'white', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Button transparent textStyle={{ color: '#87838B' }}  onPress={() => this.googleSignin()}>
                  <Icon name="logo-google" style={{ color: "white" }}  />
            </Button>
            <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-facebook" style={{ color: "white" }} />
            </Button>
            <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-twitter"style={{ color: "white" }}  />
            </Button>
            <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" style={{ color: "white" }} />
            </Button>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)

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
