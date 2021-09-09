import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppColor from '../components/colors/AppColor';

import CartScreen from '../screens/cart/CartScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackHome = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const StackCart = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const StackExplore = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ExploreScreen"
      component={ExploreScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const StackProfile = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const BottomNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 25 : 10,
          height: Platform.OS === 'ios' ? 80 : 60,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
        },
        style: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
        },

        // showLabel: false,
        activeBackgroundColor: AppColor.bottomTab,
        inactiveTintColor: AppColor.bottomTab,
        activeTintColor: AppColor.white,
      }}>
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialComunity name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={StackExplore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <MaterialComunity name="compass-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={StackCart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <MaterialComunity name="cart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StackProfile}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color}) => (
            <MaterialComunity name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
