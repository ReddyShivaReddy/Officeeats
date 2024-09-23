import { View, Text, StatusBar, Image, Pressable,ScrollView } from 'react-native'
import React from 'react'


const Profile = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar />
            <View style={{ borderBottomWidth: 0.2, borderColor: 'grey', }}>
                <View style={{ alignItems: 'center', marginBottom: 7 }}>
                    <Image source={require('../assets/images/wave.jpg')} style={{ width: 200, height: 200, borderRadius: 100, borderWidth: 1, }} />
                </View>
                <Pressable style={{ marginBottom: 10, flexDirection: 'row', gap: 10, width: 80, height: 40, backgroundColor: 'white', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                    <Image source={require('../assets/images/camera.png')} style={{ width: 22, height: 22 }} />
                    <Text style={{ fontSize: 15 }}>Edit</Text>
                </Pressable>
            </View>
            <View style={{ marginHorizontal: 10, }}>
                <View style={{ borderBottomWidth: 0.2, borderColor: 'grey',gap:3,marginTop:15}}>
                    <Text style={{color:'grey'}}>Username</Text>
                    <Text style={{ fontWeight: 'bold',marginBottom:15,fontSize:17 }}>Reddy Shiva Reddy</Text>
                </View>
                <View style={{ borderBottomWidth: 0.2, borderColor: 'grey',gap:3,marginTop:15}}>
                    <Text style={{color:'grey'}}>Email Address</Text>
                    <Text style={{ fontWeight: 'bold' ,marginBottom:15,fontSize:17}}>reddyshiva.reddy@realpage.com</Text>
                </View>
                <View style={{ borderBottomWidth: 0.2, borderColor: 'grey',gap:3,marginTop:15}}>
                    <Text style={{color:'grey'}}>Designation</Text>
                    <Text style={{ fontWeight: 'bold',marginBottom:15,fontSize:17 }}>Developer 1</Text>
                </View>
                <View style={{ borderBottomWidth: 0.2, borderColor: 'grey',gap:3,marginTop:15}}>
                    <Text style={{color:'grey'}}>Date of Birth</Text>
                    <Text style={{ fontWeight: 'bold' ,marginBottom:15,fontSize:17}}>02-12-2002</Text>
                </View>
                <View style={{ borderBottomWidth: 0.2, borderColor: 'grey',gap:3,marginTop:15}}>
                    <Text style={{color:'grey'}}>Gender</Text>
                    <Text style={{ fontWeight: 'bold',marginBottom:15,fontSize:17 }}>Male</Text>
                </View>
                
            </View>
        </ScrollView>
    )
}

export default Profile