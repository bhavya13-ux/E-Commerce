import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeIcon from '../assets/icons/Home.png';
import CategoriesIcon from '../assets/icons/Categories.png';
import CartIcon from '../assets/icons/Cart.png';
import OrdersIcon from '../assets/icons/Order.png';
import ProfileIcon from '../assets/icons/Profile.png';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Image source={HomeIcon} style={{ width: 24, height: 24 }} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: () => <Image source={CategoriesIcon} style={{ width: 24, height: 24 }} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => <Image source={CartIcon} style={{ width: 24, height: 24 }} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: () => <Image source={OrdersIcon} style={{ width: 24, height: 24 }} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Image source={ProfileIcon} style={{ width: 24, height: 24 }} />,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
