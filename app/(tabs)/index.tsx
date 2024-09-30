import { Image, StyleSheet, Platform,View } from 'react-native';

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



function index(){
return(
  <View style={{flex:1}}>
    {/* <LoginPage /> */}
    {/* <Profile /> */}
    {/* <FoodCounters /> */}
    {/* <FAQ /> */}
    {/* <AboutUs /> */}
    {/* <ReachOut /> */}
    {/* <ManualBook /> */}
    {/* <ViewCounter /> */}
    {/* <MyOrders /> */}
    <AddVendor />
    {/* <ManageVendors /> */}
    {/* <Orders /> */}

  </View>
)
}

export default index