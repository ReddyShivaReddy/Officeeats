import React from 'react';
import { Button, Pressable, Text, View,ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logout from './Logout';

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Text>Shiva Reddy</Text>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Text>View complete profile</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('ManualBook')}>
        <Text>How Office Eats works?</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ReachOut')}>
        <Text>Raise a complaint</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('FAQ')}>
        <Text>FAQs</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('AboutUs')}>
        <Text>About Us</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('AddVendor')}>
        <Text>Add Vendor</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ManageVendors')}>
        <Text>Manage Vendors</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Pressable style={{backgroundColor:'red'}} onPress={() => navigation.navigate('ManageItemsAdmin')}>
        <Text>Manage Items</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Pressable style={{borderWidth:1,width:'70%',borderRadius:7,borderColor:'red',alignSelf:'center'}} onPress={() => <Logout />}>
        <Text style={{color:'red',textAlign:'center',padding:4,fontSize:15}}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
};

export default HomeScreen;