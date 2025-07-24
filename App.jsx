import { StyleSheet,View,StatusBar } from 'react-native'
import React from 'react'
import LoginScreen from './src/app/screens/LoginScreen'

const App = () => {
  return (
    <View>
      <StatusBar barStyle='dark-content'/>
      <LoginScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})