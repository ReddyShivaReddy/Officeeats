import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutUs from '../Static_Pages/AboutUs';
import FAQ from '../Static_Pages/FAQ';
import ManualBook from '../Static_Pages/ManualBook';
import ReachOut from '../Static_Pages/ReachOut';
import CustomHeader from './CustomHeader';
import More from '../More'
import AddVendor from '../AddVendor';
import ManageItemsAdmin from '../ManageItemsAdmin';
import ManageVendors from '../ManageVendors';
import Profile from '../Profile';
import Logout from '../Logout';

import OrdersSummary from '../OrdersSummary';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MoreDetails" 
        component={More} 
        options={{ headerShown: false , }} 
      />
      <Stack.Screen 
        name="AboutUs" 
        component={AboutUs} 
        options={{ 
          header: () => <CustomHeader title="About Us" />,
        }}
      />
      <Stack.Screen 
        name="FAQ" 
        component={FAQ} 
        options={{ 
          header: () => <CustomHeader title="FAQ's" /> 
        }} 
      />
      <Stack.Screen 
        name="ManualBook" 
        component={ManualBook} 
        options={{ 
          header: () => <CustomHeader title="How Office Eats works?" />,
           

        }} 
      />
      <Stack.Screen 
        name="ReachOut" 
        component={ReachOut} 
        options={{
          header: () => <CustomHeader title="Raise a complaint" /> 
        }}
      />
      <Stack.Screen 
        name="AddVendor" 
        component={AddVendor} 
        options={{
          header: () => <CustomHeader title="Add Vendor" /> 
        }}
      />
      <Stack.Screen 
        name="ManageItemsAdmin" 
        component={ManageItemsAdmin} 
        options={{
          header: () => <CustomHeader title="Manage Items" /> 
        }}
      />
      <Stack.Screen 
        name="ManageVendors" 
        component={ManageVendors} 
        options={{
          header: () => <CustomHeader title="Manage Vendors" /> 
        }}
      />
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          header: () => <CustomHeader title="Profile" /> 
        }}
      />
      <Stack.Screen 
        name="Logout" 
        component={Logout} 
        options={{
          header: () => <CustomHeader title="Log out" /> 
        }}
      />
      <Stack.Screen 
        name="Summary" 
        component={OrdersSummary} 
        options={{
          header: () => <CustomHeader title="Orders Summary" /> 
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;