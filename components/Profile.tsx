import { View, Text, StatusBar, Image, Pressable, ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
    const User='Reddy Shiva Reddy'
    var Initials = User
            .split(' ')
            .slice(0, 2)
            .map(word => word.charAt(0).toUpperCase())
            .join('');
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
           <SafeAreaView />
            <StatusBar />
            <View style={{ borderBottomWidth: 0, borderColor: 'grey', }}>
                <View style={{ alignSelf: 'center', marginBottom: 7,width: 150, height: 150, borderRadius: 100, borderWidth: 0,justifyContent:'center',backgroundColor:'#EEF5FF' }}>
                    <Text style={{textAlign:'center',fontSize:50,fontWeight:'600'}}>
                        {Initials}
                    </Text>
                    {/* <Image source={require('../assets/images/profile.png')} style={{ width: 170, height: 170, borderRadius: 100, borderWidth: 1, }} /> */}
                </View>
                {/* <Pressable style={{ marginBottom: 10, flexDirection: 'row', gap: 10, width: 80, height: 40, backgroundColor: 'white', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                    <Ionicons name="camera-outline" size={24} color="black" />
                    <Text style={{ fontSize: 15 }}>Edit</Text>
                </Pressable> */}
            </View>
            <View style={{ marginHorizontal: 15,marginTop:10 }}>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="person-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Username</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 17 }}>Reddy Shiva Reddy</Text>
                    </View>
                </View>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="mail-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Email Address</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 17 }}>reddyshiva.reddy@realpage.com</Text>

                    </View>
                </View>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{justifyContent:'center'}}>
                        <Ionicons name="briefcase-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Designation</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 17 }}>Developer 1</Text>
                    </View>
                </View>
                <View style={{
                    borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row'
                }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="id-card-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>RPIPLID</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 17 }}>0912545</Text>
                    </View>
                </View>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="calendar-number-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Date of Birth</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 17 }}>02-12-2002</Text>
                    </View>
                </View>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="male-female-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Gender</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 17 }}>Male</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default Profile