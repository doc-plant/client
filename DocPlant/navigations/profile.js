import { createStackNavigator,  } from 'react-navigation'
import React, { Component } from 'react'
import {TouchableOpacity,Platform} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


//screens
import Profile from '../screens/profile'
import History from '../screens/history'
import HistoryDetail from '../screens/historyDetail'
import Detail from '../screens/detail'

const ProfileNavigation = createStackNavigator({
  Profile: {
    screen: Profile,
  },
  History: {
    screen: History
  },
  HistoryDetail: {
    screen: HistoryDetail
  },
  Detail: {
    screen: Detail
  },
},
  {
    initialRouteName: 'Profile'
  })

export default ProfileNavigation