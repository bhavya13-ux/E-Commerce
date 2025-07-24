import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { paddingBottom: 5, height: 60 },
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused
                ? require('../assets/icons/Home.png')
                : require('../assets/icons/Home.png');
              break;
            case 'Categories':
              iconSource = focused
                ? require('../assets/icons/Categories.png')
                : require('../assets/icons/Categories.png');
              break;
            case 'Cart':
              iconSource = focused
                ? require('../assets/icons/Cart.png')
                : require('../assets/icons/Cart.png');
              break;
            case 'Orders':
              iconSource = focused
                ? require('../assets/icons/Order.png')
                : require('../assets/icons/Order.png');
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
              style={{ width: 25, height: 25, resizeMode: 'contain' }}
            />
          );
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Categories' component={CategoriesScreen} />
      <Tab.Screen name='Cart' component={CartScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
