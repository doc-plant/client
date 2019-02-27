import { createStackNavigator,  } from 'react-navigation'
import React, { Component } from 'react'
import {TouchableOpacity,Platform} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


//screens
import Disease from '../screens/disease'
import DiseaseDetail from '../screens/diseaseDetail'
import Detail from '../screens/detail'
import Home from '../screens/home'

const DiseaseNavigation = createStackNavigator({
  Disease: {
    screen: Disease,
  },
  Diseases: {
    screen: DiseaseDetail
  },
  Detail: {
    screen: Detail
  },
  Home: {
    screen: Home
  }
},
  {
    initialRouteName: 'Home'
  })

export default DiseaseNavigation