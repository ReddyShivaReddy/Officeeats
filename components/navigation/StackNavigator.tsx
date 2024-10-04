import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AboutUs from '../Static_Pages/AboutUs';
import FAQ from '../Static_Pages/FAQ';
import ManualBook from '../Static_Pages/ManualBook';
import ReachOut from '../Static_Pages/ReachOut';
import CustomHeader from './CustomHeader';
import More from '../More'


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="More" 
        component={More} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="AboutUs" 
        component={AboutUs} 
        options={{ 
          header: () => <CustomHeader title="About Us" />
        }} 
      />
      <Stack.Screen 
        name="FAQ" 
        component={FAQ} 
        options={{ 
          header: () => <CustomHeader title="FAQ" /> 
        }} 
      />
      <Stack.Screen 
        name="ManualBook" 
        component={ManualBook} 
        options={{ 
          header: () => <CustomHeader title="Manual Book" /> 
        }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;