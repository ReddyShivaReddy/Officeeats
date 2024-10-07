import React from 'react';
import { View, Text,KeyboardAvoidingView,Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Orders from '../Vendors/Orders';
import ManageItemsVendor from '../Vendors/ManageItemsVendor';
import Overview from '../Vendors/Overview';


const Tab = createBottomTabNavigator();

const TabNavigatorVendor = () => {
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
      <Tab.Screen name="Home" component={Orders}
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
              {focused && <View style={{ height: 1, width: 40, backgroundColor: 'blue',borderWidth:1.5,borderRadius:20,marginBottom:1  }} />}
            </View>
          ),
        }} />
      <Tab.Screen name="Manage Items" component={ManageItemsVendor} options={{
        headerShown: false, tabBarIcon: () => (
          // <Ionicons name="receipt-outline" size={25} color="black" />
          <Ionicons name="options-outline" size={26} color="black" />
        ),
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: focused ? 'black' : 'gray' }}>Manage Items</Text>
            {focused && <View style={{ height: 1, width: 90, backgroundColor: 'blue',borderWidth:1.5,borderRadius:20,marginBottom:1  }} />}
          </View>
        ),
      }} />

<Tab.Screen name="Overview" component={Overview} options={{
        headerShown: false, tabBarIcon: () => (
          <Ionicons name="information" size={24} color="black" />
        ),
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: focused ? 'black' : 'gray' }}>Overview</Text>
            {focused && <View style={{ height: 1, width: 60, backgroundColor: 'blue',borderWidth:1.5,borderRadius:20,marginBottom:1  }} />}
          </View>
        ),
      }} />
      
    </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};
export default TabNavigatorVendor;