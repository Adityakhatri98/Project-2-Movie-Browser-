import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {createStackNavigator } from 'react-navigation'
import MovieListScreen from './Screen/MovieListScreen'
import MovieDetailScreen from './Screen/MovieDetailsScreen'


const AppNavigator = createStackNavigator({
  "MovieList": MovieListScreen,
  "MovieDetail": MovieDetailScreen,
},{
  initialRouteName: 'MovieList',
  navigationOptions: {
  headerTintColor: '#a41034'
    }
})
export default class App extends React.Component {
  render() {
      return (
          <AppNavigator />
      )
  }
}

const styles = StyleSheet.create({
  cont1: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderColor: 'teal',
      borderWidth: 25,
  },
  cont2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'orange',
      borderWidth: 25,
  },
  cont3: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'purple',
      borderWidth: 25,
  }
});
