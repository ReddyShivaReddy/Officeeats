import React from 'react';
import { View, Text,KeyboardAvoidingView,Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import FoodCounters from '../FoodCounters';
import MyOrders from '../MyOrders';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={FoodCounters}
        options={{
          headerShown: false, 
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={25} color="black" />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
            // borderRadius:8,
            // borderBottomWidth:2
          },
          // tabBarLabel: "My Profile",
          tabBarLabel: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: focused ? 'black' : 'gray' }}>Home</Text>
              {focused && <View style={{ height: 1, width: 40, backgroundColor: 'blue',borderWidth:1.5,borderRadius:20,marginBottom:1  }} />}
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
            {focused && <View style={{ height: 1, width: 60, backgroundColor: 'blue',borderWidth:1.5,borderRadius:30,marginBottom:1  }} />}
          </View>
        ),
      }} />
      <Tab.Screen name="More" component={StackNavigator} options={{
        headerShown: false, tabBarIcon: () => (
          // <Ionicons name="ellipsis-horizontal" size={26} color="black" />
          // <Ionicons name="menu" size={25} color="black" />
          <Ionicons name="grid-outline" size={24} color="black" />
        ),
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: focused ? 'black' : 'gray' }}>More</Text>
            {focused && <View style={{ height: 1, width: 40, backgroundColor: 'blue', borderWidth: 1.5,borderRadius:20,marginBottom:1 }} />}
          </View>
        ),
      }} />
    </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};
export default TabNavigator;