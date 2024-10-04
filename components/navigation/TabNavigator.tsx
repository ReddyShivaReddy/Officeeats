import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import FoodCounters from '../FoodCounters';
import MyOrders from '../MyOrders';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FoodCounters" component={FoodCounters}
       options={{headerShown:false, tabBarIcon:()=>(
        <Ionicons name="home-outline" size={24} color="black" />
  )}} />
      <Tab.Screen name="MyOrders" component={MyOrders} options={{headerShown:false, tabBarIcon:()=>(
        <Ionicons name="receipt-outline" size={24} color="black" />
  )}} />
      <Tab.Screen name="More" component={StackNavigator} options={{headerShown:false, tabBarIcon:()=>(
       <Ionicons name="menu-outline" size={24} color="black" />
  )}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;