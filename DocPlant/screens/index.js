import React, { Component } from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class index extends Component {
  componentDidMount= async()=>{
    const userToken = await AsyncStorage.getItem('userToken');
    const userAuth = await AsyncStorage.getItem('userAuth');  
    if(userToken){
      this.props.navigation.navigate('App',{user: userAuth});
    }
    else{
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
