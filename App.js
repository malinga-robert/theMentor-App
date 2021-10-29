import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './screens/Home'
import Courses from './screens/courses'
import Shop from './screens/shop'
import Profile from './screens/profile'

export default createBottomTabNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon:
      ({tintColor})=>(
        <Icon name="ios-home" color=
        {tintColor} size={24}/>
      )
    }
  },
  Shop:{
    screen: Shop,
    navigationOptions: {
      tabBarLabel:'Shop',
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-car-outline" color=
        {tintColor} size={24}/>
      )
    }
  },
  Courses:{
    screen: Courses,
    navigationOptions: {
      tabBarLabel: 'Courses',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-book-outline" color=
        {tintColor} size={24}/>
      )
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-person-outline" color=
        {tintColor} size={24}/>
      )
    }
  }
  
},{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'White',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



