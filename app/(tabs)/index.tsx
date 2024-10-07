import { Image, StyleSheet, Platform, View, StatusBar } from 'react-native';

import LoginPage from '@/components/LoginPage';
import Profile from '@/components/Profile';
import FoodCounters from '@/components/FoodCounters'
import Test from '@/components/Test';
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

function index() {
  return (
    <View style={{ flex: 1 }}>
      {/* <LoginPage /> */}
      {/* <Profile /> */}
      {/* <FoodCounters /> */}
      {/* <FAQ /> */}
      {/* <AboutUs /> */}
      {/* <ReachOut /> */}
      {/* <ManualBook /> */}
      {/* <ViewCounter /> */}
      {/* <MyOrders /> */}
      {/* <AddVendor /> */}
      {/* <ManageVendors /> */}
      {/* <Orders /> */}
      {/* <ManageItemsVendor /> */}
      {/* <ManageItemsAdmin /> */}
      {/* <Test /> */}
      <StatusBar />
      <NavigationContainer independent={true}>
        <TabNavigator />
        {/* <TabNavigatorVendor />  */}
      </NavigationContainer>



      {/* const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [isVendor, setIsVendor] = useState(false); // Assuming you have a way to determine if the user is a vendor
      const handleLogin = (userType) => {
            setIsLoggedIn(true);
          setIsVendor(userType === 'vendor'); 
      };
      return (
      <View style={{ flex: 1 }}>
        {!isLoggedIn ? (
          <LoginPage onLogin={handleLogin} /> 
        ) : (
          <NavigationContainer independent={true}>
            {isVendor ? <TabNavigatorVendor /> : <TabNavigator />}
          </NavigationContainer>
        )}
        <StatusBar />
      </View>
      ); */}

    </View>
  )
}

export default index