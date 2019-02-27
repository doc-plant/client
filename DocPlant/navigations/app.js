import React, { Component } from "react";
import {
  createStackNavigator, createAppContainer, createBottomTabNavigator,
  createSwitchNavigator, createDrawerNavigator, DrawerItems
} from 'react-navigation'
import {
  StyleSheet,
  Image,
  Platform,
} from "react-native";

//screens
import Home from '../screens/home'
import Disease from './disease'
import Camera from '../screens/camera'
import Result from './result'
import Profile from './profile'
import { Container, Content, Header, Body, Text } from 'native-base'
import Icon from "react-native-vector-icons/Ionicons";




const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('../assets/mini_logo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>

);



const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen: Disease,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name={Platform.OS === "ios" ? "ios-home" : "md-home"} size={24} style={{ color: 'rgb(59, 133, 5)' }} />
      ),
    }
  },
  Camera: {
    screen: Camera
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <Icon name={Platform.OS === "ios" ? "ios-person" : "md-person"} size={24} style={{ color: 'rgb(59, 133, 5)' }} />
      ),
    }
  },
  Result: {
    screen: Result,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
}, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'green'
  },
  drawerImage: {
    height: 120,
    width: 130,
  }

})

const App = createAppContainer(DrawerNavigation);

export default App
