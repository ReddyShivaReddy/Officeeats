import React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import FoodCounters from '../FoodCounters';
import MyOrders from '../MyOrders';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',

        tabBarLabelStyle: {
          // fontSize: 17,
        },
      }}>
      <Tab.Screen name="Home" component={FoodCounters}
        options={{
          headerShown: false, tabBarIcon: () => (
            <Ionicons name="home-outline" size={25} color="black" />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarLabel: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: focused ? 'black' : 'gray' }}>Home</Text>
              {focused && <View style={{ height: 1, width: 40, backgroundColor: 'blue',borderWidth:2 }} />}
            </View>
          ),
        }} />
      <Tab.Screen name="My Orders" component={MyOrders} options={{
        headerShown: false, tabBarIcon: () => (
          <Ionicons name="receipt-outline" size={25} color="black" />
        ),
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: focused ? 'black' : 'gray' }}>My Orders</Text>
            {focused && <View style={{ height: 1, width: 60, backgroundColor: 'blue',borderWidth:1 }} />}
          </View>
        ),
      }} />
      <Tab.Screen name="More" component={StackNavigator} options={{
        headerShown: false, tabBarIcon: () => (
          <Ionicons name="menu" size={25} color="black" />
        ),
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: focused ? 'black' : 'gray' }}>More</Text>
            {focused && <View style={{ height: 1, width: 40, backgroundColor: 'blue', borderWidth: 2 }} />}
          </View>
        ),

      }} />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;