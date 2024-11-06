import { Image, StyleSheet, Platform, View, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react'
import LoginPage from '@/components/LoginPage';
import Profile from '@/components/Profile';
import FoodCounters from '@/components/FoodCounters'

import FAQ from '@/components/Static_Pages/FAQ';
import AboutUs from '@/components/Static_Pages/AboutUs';
import ReachOut from '@/components/Static_Pages/ReachOut';
import ManualBook from '@/components/Static_Pages/ManualBook';
import ViewCounter from '@/components/ViewCounter';
import MyOrders from '@/components/MyOrders';
import AddVendor from '@/components/AddVendor';
import ManageVendors from '@/components/ManageVendors';
import Orders from '@/components/Vendors/Orders';
import ManageItemsVendor from '@/components/Vendors/ManageItemsVendor';
import ManageItemsAdmin from '@/components/ManageItemsAdmin';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../../components/navigation/TabNavigator';
import TabNavigatorVendor from '@/components/navigation/TabNavigatorVendor';
import Test from '@/components/Test';
import Logout from '@/components/Static_Pages/Logout';
import { UserProvider, useUser } from '../../components/UserContext';
import HomeScreen from '@/components/More';

const index=()=> {
    {/* 
      <StatusBar />
      <SafeAreaView />
      <NavigationContainer independent={true}>
        <TabNavigator />
        <TabNavigatorVendor />
      </NavigationContainer> 
    </View>
  )  */}

  return (
    <UserProvider>
    <Main />
    </UserProvider>
  );
}
const Main=()=>{
  const { userType, setUserType } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isVendor, setIsVendor] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  
  const handleLogin = async(userType: any) => {
    setIsLoggedIn(true);
    setIsAdmin(userType === 'admin');
    setIsVendor(userType === 'vendor');
    setIsUser(userType === 'user');
    setUserType(userType)
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const LogoutFunction = () => (<HomeScreen logout={handleLogout} />)
  return(

    <View style={{ flex: 1 }}>
    {!isLoggedIn ? (
      <LoginPage onLogin={handleLogin} />
    ) : (
      <NavigationContainer independent={true}>
        { isVendor ? <TabNavigatorVendor /> : 
        isAdmin || isUser ?
        <TabNavigator />: <LoginPage/> }
      </NavigationContainer>

)}
    <StatusBar />
  </View>
)
}
export default index