import { View, Text, StatusBar, Image, Pressable, ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
           <SafeAreaView />
            <StatusBar hidden={true}
            />
            <View style={{ borderBottomWidth: 0.2, borderColor: 'grey', }}>
                <View style={{ alignItems: 'center', marginBottom: 7 }}>
                    <Image source={require('../assets/images/wave.jpg')} style={{ width: 200, height: 200, borderRadius: 100, borderWidth: 1, }} />
                </View>
                <Pressable style={{ marginBottom: 10, flexDirection: 'row', gap: 10, width: 80, height: 40, backgroundColor: 'white', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                    <Ionicons name="camera-outline" size={24} color="black" />
                    <Text style={{ fontSize: 15 }}>Edit</Text>
                </Pressable>
            </View>
            <View style={{ marginHorizontal: 15, }}>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="person-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Username</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 18 }}>Reddy Shiva Reddy</Text>
                    </View>
                </View>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="mail-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Email Address</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 18 }}>reddyshiva.reddy@realpage.com</Text>

                    </View>
                </View>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{justifyContent:'center'}}>
                        <Ionicons name="briefcase-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Designation</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 18 }}>Developer 1</Text>
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
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 18 }}>0912545</Text>
                    </View>
                </View>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="calendar-number-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Date of Birth</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 18 }}>02-12-2002</Text>
                    </View>
                </View>
                <View style={{ borderColor: 'grey', gap: 10, marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons name="male-female-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>Gender</Text>
                        <Text style={{ fontWeight: 'medium', marginBottom: 10, fontSize: 18 }}>Male</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default Profile