import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar, Image, FlatList,Modal,Button,TouchableOpacity,Pressable } from 'react-native';
import Profile from "./Profile";
import Ionicons from '@expo/vector-icons/Ionicons';

function FoodCounters() {

    const [modalVisible,setModalVisible]=useState(false)
    const [selectedItem,setSelectedItem]=useState({})

    //Static data
    type counter = {
        'CounterID': number,
        'CounterName': string,
        'Timings': string
    }
    type countersTypes = counter[]
    const counters: countersTypes = [{
        CounterID: 1,
        CounterName: 'Tea Point',
        Timings: '9:00 AM - 5:00 PM'
    },
    {
        CounterID: 2,
        CounterName: 'Juice Point',
        Timings: '9:00 AM - 5:00 PM'
    },
    {
        CounterID: 3,
        CounterName: 'Lunch/Dinner',
        Timings: '9:00 AM - 5:00 PM'
    },
    {
        CounterID: 4,
        CounterName: 'Snacks',
        Timings: '9:00 AM - 5:00 PM'
    },
    ]
    type RenderItemProps = {
        item: counter;
    };

    const RenderItem = ({ item }: RenderItemProps) => (
        <Pressable style={{flexDirection:'row', gap:20}} onPress={() => {
            setSelectedItem(item);
            setModalVisible(true);
        }} >
            <View>
                <Image
                    source={
                        item.CounterID === 1
                            ? require('../assets/images/tea.jpg')
                            : item.CounterID === 2
                                ? require('../assets/images/Juice.jpg')
                                : item.CounterID === 3
                                    ? require('../assets/images/Lunch.jpg')
                                    : require('../assets/images/Maggie.jpg')
                    }
                    style={{ width: 110, height: 110,marginBottom:15,borderRadius:10 }}
                />
            </View>
            <View style={{marginTop:20}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>
                    {item.CounterName}
                </Text>
                <Text style={{fontSize:17}}>
                    Timings: {item.Timings}
                </Text>
            </View>
        </Pressable>
    )
    return (
        <>
            <StatusBar />
            <View style={{ flex: 1, marginHorizontal: 10 }}>
                <View>
                    <Text style={{ fontSize: 30, marginTop: 10 }}>Office Eats</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 20, justifyContent: 'center', }}>Your happiness</Text>
                        <Text style={{ fontSize: 20, justifyContent: 'center', }}>is our</Text>
                        <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center' }}>secret ingredient</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/Restaurant.png')} style={{ width: 200, height: 150 }} />
                    </View>
                </View>
                <View style={{ marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 1,gap:10,flexDirection:'row', }}>
                    <Ionicons name="fast-food-outline" size={25} color="black" />
                    <Text style={{ fontSize: 18, marginVertical: 5,justifyContent:'center' }}>Explore Food Counters</Text>
                </View>
                <View style={{marginTop:20}}>
                    <FlatList
                        data={counters}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={RenderItem}
                    />
                </View>
            </View>

            

            <Modal
                // contentContainerStyle={{}}
                visible={modalVisible}
                animationType='fade'
                onRequestClose={() => setModalVisible(false)}
            >
                <ScrollView style={{}}>
                    <View style={{}}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            {/* <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, }} /> */}
                        </TouchableOpacity>
                        <Text style={{}}>Checkout Page</Text>
                    </View>
                    {selectedItem && Object.keys(selectedItem).map((key) => {
                        console.log(selectedItem)
                        return (
                            <View>
                                {/* <Profile /> */}
                            </View>
                        );
                    })}
                    
                </ScrollView>
            </Modal>
        </>
    );
}
export default FoodCounters