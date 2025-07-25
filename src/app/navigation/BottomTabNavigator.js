import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { paddingBottom: 5, height: 65 },
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused
                ? require('../assets/icons/Home.png')
                : require('../assets/icons/Home.png');
              break;
            case 'Cart':
              iconSource = focused
                ? require('../assets/icons/Cart.png')
                : require('../assets/icons/Cart.png');
              break;
            case 'Profile':
              iconSource = focused
                ? require('../assets/icons/Profile.png')
                : require('../assets/icons/Profile.png');
              break;
            default:
              iconSource = require('../assets/icons/Home.png');
          }

          return (
            <Image
              source={iconSource}
              style={{ width: 43, height: 43, resizeMode: 'contain' }}
            />
          );
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Cart' component={CartScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
