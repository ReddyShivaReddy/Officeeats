import { Image, StyleSheet, Platform,View } from 'react-native';

import LoginPage from '@/components/LoginPage';
import Profile from '@/components/Profile';
import FoodCounters from '@/components/FoodCounters'
function index(){
return(
  <View style={{flex:1}}>
    {/* <LoginPage /> */}
    {/* <Profile /> */}
    <FoodCounters />

  </View>
)
}

export default index