import { StyleSheet, Text, View, StatusBar, TextInput,KeyboardAvoidingView,SafeAreaView} from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView>
    <StatusBar barStyle='dark-content'/>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>KartNest</Text>
      <Text style={{fonrSize:14,fontFamily:'serif'}}>Login to Your Account</Text>
    </View>
    <KeyboardAvoidingView>
    <View>
      <TextInput></TextInput>
      <TextInput></TextInput>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  headerContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:70,
  },
  headerText:{
    fontSize:30,
    fontWeight:'500',
    letterSpacing:3,
    fontFamily:'serif',
  }
})