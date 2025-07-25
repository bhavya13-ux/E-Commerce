import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/app/screens/SplashScreen';
import BottomTabNavigator from './src/app/navigation/BottomTabNavigator';
import LoginScreen from './src/app/screens/LoginScreen';
import RegisterScreen from './src/app/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
