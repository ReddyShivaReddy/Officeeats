import React,{useState} from 'react';
import { Button, Pressable, Text, View, ScrollView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logout from './Static_Pages/Logout';
import LoginPage from './LoginPage';
import { useUser } from './UserContext';

const HomeScreen = ({ navigation,logout }: any) => {
  const { userType } = useUser();
  const User = 'Reddy Shiva Reddy'
  const UserEmail='Reddyshiva.reddy@Realpage.com'
  var Initials = User
    .split(' ')
    .slice(0, 2)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
    const [isAdmin,setIsAdmin]=useState<boolean>(userType=='admin')
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginHorizontal: 20, }}>
        <Text style={{ fontWeight: '500', fontSize: 23 }}>
          My Account
        </Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 25, marginVertical: 20, backgroundColor: '#EEF5FF', padding: 20 }}>
          <View style={{ marginBottom: 7, width: 80, height: 80, borderRadius: 100, borderWidth: 0, justifyContent: 'center', backgroundColor: 'black' }}>
            <Text style={{ textAlign: 'center', fontSize: 30,color:'white' }}>
              {Initials}
            </Text>
          </View>

        <View style={{ justifyContent: 'center', marginRight: 10, width: '85%', }}>
          <Text style={{ flexShrink: 1, fontSize: 18, fontWeight: '500', lineHeight: 20, maxWidth: '90%', }}>{User}</Text>
          {/* <Pressable onPress={() => navigation.navigate('Profile')}>
            <Text style={{ fontSize: 15, color: 'darkblue', textDecorationLine: 'underline' }}>View complete profile</Text>
          </Pressable> */}
          <Text style={{ fontSize: 15,  }}>{UserEmail}</Text>
        </View>
      </View>
      <View style={{ gap: 15 }}>

        <View style={{ marginHorizontal: 15, padding: 7, borderBottomWidth: 0.7, borderColor: '#EEF5FF' }}>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('ManualBook')}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15 }}>How Office Eats works?</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 15, padding: 7, borderBottomWidth: 0.7, borderColor: '#EEF5FF' }}>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('ReachOut')}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15 }}>Raise a complaint</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 15, padding: 7, borderBottomWidth: 0.7, borderColor: '#EEF5FF' }}>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('FAQ')}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15 }}>FAQ's</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 15, padding: 7 }}>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('AboutUs')}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15 }}>About Us</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </Pressable>
        </View>
        <View style={{ borderWidth: 2, borderColor: '#EEF5FF', backgroundColor: '#EEF5FF' }} />
        
        {isAdmin && 
        <View style={{gap:15}}>
          <View style={{ marginHorizontal: 15, padding: 7, borderBottomWidth: 0.7, borderColor: '#EEF5FF' }}>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('AddVendor')}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15 }}>Add Counter</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </Pressable>
        </View> 
        
        <View style={{ marginHorizontal: 15, padding: 7, borderBottomWidth: 0.7, borderColor: '#EEF5FF' }}>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('ManageVendors')}>
            <View style={{ justifyContent: 'center'}}>
              <Text style={{ fontSize: 15 }}>Manage Counters</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 15, padding: 7, borderBottomWidth: 0.7, borderColor: '#EEF5FF' }}>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('ManageItemsAdmin')}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15 }}>Manage Counter Items</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </Pressable>
        </View> 
        <View style={{ marginHorizontal: 15, padding: 7, borderBottomWidth: 0.7, borderColor: '#EEF5FF' }}>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('Summary')}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15 }}>Orders Summary</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </Pressable>
        </View>
        </View>
        }
      </View>
      <View style={{ marginHorizontal: 15, padding: 7, marginTop: 10 }}>
        <Pressable style={{ borderWidth: 1, width: '80%', borderRadius: 7, borderColor: 'red', alignSelf: 'center' }} onPress={logout}>
          <Text style={{ color: 'red', textAlign: 'center', padding: 10, fontSize: 15 }}>Log Out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;