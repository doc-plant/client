import { createStackNavigator,  } from 'react-navigation'
import React, { Component } from 'react'
import {TouchableOpacity,Platform} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


//screens
import Result from '../screens/result'
import History from '../screens/history'
import HistoryDetail from '../screens/historyDetail'
import Detail from '../screens/detail'

const ResultNavigation = createStackNavigator({
  Result: {
    screen: Result,
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
    initialRouteName: 'Result'
  })

export default ResultNavigation