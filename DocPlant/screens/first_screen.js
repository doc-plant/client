import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ImageBackground, AsyncStorage, } from 'react-native';
import { Google } from 'expo';

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

class FirstScreen extends Component {
  static navigationOptions = {
    title: '',
  };

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
            <Button bordered light
              style={{
                width: "60%",
                alignSelf: "center",
                justifyContent: 'center',
                borderRadius: 20,
              }}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text
                style={{
                  color: "white",
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>SIGN UP</Text>
            </Button>
            <Text
              style={{
                marginTop: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)

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
