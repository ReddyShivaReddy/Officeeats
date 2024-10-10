import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StatusBar, Image, FlatList, Modal, Button, TouchableOpacity, Pressable, TextInput } from 'react-native';
import Profile from "./Profile";
import Ionicons from '@expo/vector-icons/Ionicons';
import { JumpingTransition } from "react-native-reanimated";
import ViewCounter from "./ViewCounter";
// import { View, Text, StatusBar, Image, FlatList, Pressable, TextInput, ScrollView, Animated, Modal } from 'react-native'
// import React, { useState } from 'react'
// import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import LottieView from 'lottie-react-native';
type propType = {
    'CounterID': number,
    'CounterName': string,
    'Timings': string
}
type ItemProps = {
    CounterData: propType;
};

function FoodCounters() {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState<any>({})
    console.log(selectedItem)
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

    const [orderItem, setOrderItem] = useState<any>({})
    const [orderConfirmationPopup, setOrderConfirmationPopup] = useState<boolean>(false)
    const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false)
    type counterItemTypes = {
        'Counter_Name': string,
        'Counter_ID': number,
        'Category': string,
        'Available_Status_from_Vendor': boolean,
        'Available_Status_from_Admin': boolean,
        'type': string
    }
    type counterItemsTypes = counterItemTypes[]
    const CounterItems: counterItemsTypes = [
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Tea',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'


        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Coffee',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Boost',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Horlicks',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Lemon Tea',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Green Tea',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Horlicks',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Lemon Tea',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Green Tea',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Juice Point',
            'Counter_ID': 2,
            'Category': 'Orange',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Juice Point',
            'Counter_ID': 2,
            'Category': 'Grapes',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Juice Point',
            'Counter_ID': 2,
            'Category': 'Butter Milk',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Lunch/Dinner',
            'Counter_ID': 3,
            'Category': 'Veg Meal',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Lunch/Dinner',
            'Counter_ID': 3,
            'Category': 'Non-Veg Meal',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Non-Veg'

        },
        {
            'Counter_Name': 'Snacks',
            'Counter_ID': 4,
            'Category': 'Dosa',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Snacks',
            'Counter_ID': 4,
            'Category': 'Sandwich',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
        {
            'Counter_Name': 'Snacks',
            'Counter_ID': 4,
            'Category': 'Maggie',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg'

        },
    ]
    var ordered: boolean = false
    const submitOrder = () => {
        ordered = true
        {
            ordered &&
                setOrderConfirmed(true)
            setTimeout(() => {
                setOrderConfirmed(false);
                setOrderConfirmationPopup(false);
                setModalVisible(false)
            }, 3000);
        }
    }
    type RenderItemPropsView = {
        item: counterItemTypes;
    };
    const RenderItemView = ({ item }: RenderItemPropsView) => {
        return (
            <View style={{ marginHorizontal: 15 }}>
                {
                    item.Counter_ID == selectedItem.CounterID && item.Available_Status_from_Admin == true &&
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7 }}>
                        <View >
                            {item.type == 'Veg' ?
                                <MaterialCommunityIcons name="square-circle" size={17} color="green" /> :
                                <FontAwesome6 name="caret-square-up" size={17} color="red" />
                            }
                            <Text style={{ fontSize: 18, fontWeight: '400' }}>
                                {item.Category}
                            </Text>
                        </View>
                        <Pressable
                            onPress={() => {
                                setOrderItem(item);
                                setOrderConfirmationPopup(true);
                            }}
                            style={{
                                justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 10, width: '20%', backgroundColor: 'black',
                                elevation: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 5,
                            }}>
                            <Text style={{ fontSize: 15, padding: 5, textAlign: 'center', color: 'white' }}>ADD</Text>
                        </Pressable>
                    </View>
                }

            </View>
        )
    }
    const RenderItem = ({ item }: RenderItemProps) => (
        <Pressable style={{ flexDirection: 'row', gap: 15, marginHorizontal: 17,elevation:5,borderWidth:0,backgroundColor:'white',marginVertical:10,borderRadius:15 }} onPress={() => {

            setSelectedItem(item);

            setModalVisible(true);
        }} >
            <View style={{justifyContent:'center',alignSelf:'center',padding:7}}>
                <Image
                    source={
                        item.CounterID === 1
                            ? require('../assets/images/tea.jpg')
                            : item.CounterID === 2
                                ? require('../assets/images/Juice.jpg')
                                : item.CounterID === 3
                                    ? require('../assets/images/Lunch.jpg')
                                    : item.CounterID === 4 ?
                                        require('../assets/images/Maggie.jpg')
                                        : require('../assets/images/counter.jpg')
                    }
                    style={{ width: 100, height: 100,  borderRadius: 20 }}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>
                    {item.CounterName}
                </Text>
                <Text style={{ fontSize: 16 }}>
                    Timings: {item.Timings}
                </Text>
            </View>
        </Pressable>
    )

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar />
            <View >
                <View style={{ marginHorizontal: 17 }}>
                    <Text style={{ fontSize: 30, marginTop: 10, fontStyle: 'italic' }}>Office Eats</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 17 }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 17, justifyContent: 'center', }}>Your happiness</Text>
                        <Text style={{ fontSize: 17, justifyContent: 'center', }}>is our</Text>
                        <Text style={{ fontSize: 17, justifyContent: 'center', alignSelf: 'center' }}>secret ingredient</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/Restaurant.png')} style={{ width: 200, height: 150 }} />
                    </View>
                </View>
                <View style={{ marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 1, gap: 10, flexDirection: 'row', marginHorizontal: 17 }}>
                    <Ionicons name="fast-food-outline" size={25} color="black" />
                    <Text style={{ fontSize: 18, marginVertical: 5, justifyContent: 'center' }}>Explore Food Counters</Text>
                </View>
                <View style={{ marginTop: 20, }}>
                    <FlatList
                        data={counters}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={RenderItem}
                        contentContainerStyle={{ paddingBottom: 500 }}
                    />
                </View>
            </View>
            <Modal
                visible={modalVisible}
                animationType='fade'
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, }}>
                    <View style={{ flexDirection: 'row', gap: 15, marginBottom: 10, marginHorizontal: 17 }}>
                        <Pressable style={{ justifyContent: 'center' }} onPress={() => {
                            setModalVisible(false)
                        }}>
                            <Ionicons name="arrow-back" size={25} color="black" />
                        </Pressable>
                        <Text style={{ fontSize: 20, fontWeight: '500', }}>{selectedItem.CounterName}</Text>
                    </View>
                    <View style={{ flex: 1, paddingBottom: 100 }}>
                        <View style={{ alignSelf: 'center', marginTop: 5 }}>
                            <Image
                                source={
                                    selectedItem.CounterID === 1
                                        ? require('../assets/images/tea.jpg')
                                        : selectedItem.CounterID === 2
                                            ? require('../assets/images/Juice.jpg')
                                            : selectedItem.CounterID === 3
                                                ? require('../assets/images/Lunch.jpg')
                                                : selectedItem.CounterID === 4 ?
                                                    require('../assets/images/Sandwich.jpg')
                                                    : require('../assets/images/counter.jpg')
                                }
                                style={{ width: '100%', height: 275, aspectRatio: 1.5 }}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10, borderWidth: 0.9, marginHorizontal: 15, padding: 7, borderRadius: 8, marginTop: 10 }}>
                            <Ionicons name="search" size={24} color="black" />
                            <TextInput placeholder='Search Item...' style={{ height: 30, fontSize: 20 }} />
                        </View>
                        <View>
                            {selectedItem &&
                                <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                                    {selectedItem.CounterName == 'Tea Point' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Hot Beverages</Text> :
                                        selectedItem.CounterName == 'Juice Point' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Refreshing Juices</Text> :
                                            selectedItem.CounterName == 'Lunch/Dinner' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Meals</Text> :
                                                selectedItem.CounterName == 'Snacks' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Hot Snacks</Text> :
                                                    <Text>Counter Items</Text>
                                    }
                                    <View style={{ borderBottomWidth: 1, borderColor: 'black' }} />
                                </View>
                            }
                        </View>
                        <View style={{ paddingBottom: 200, marginTop: 20, }} >
                            <FlatList
                                data={CounterItems}
                                keyExtractor={(item, index: number) => index.toString()}
                                renderItem={RenderItemView}
                                contentContainerStyle={{ paddingBottom: 200 }}

                            />
                        </View>
                        


                        <Modal
                            visible={orderConfirmationPopup}
                            animationType='fade'
                            onRequestClose={() => setOrderConfirmationPopup(false)}
                            transparent
                        >
                            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>
                                <View style={{
                                    marginHorizontal: 15, gap: 15, backgroundColor: '#FFF8E8',
                                    justifyContent: "center", alignSelf: "center",
                                    width: "80%", padding: 15, borderRadius: 20,
                                    elevation: 10, shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 5,
                                }} >
                                    <View>
                                        <Text style={{ fontSize: 23, fontWeight: '500', textAlign: 'center' }}>Order Confirmation</Text>
                                        <View style={{ borderBottomWidth: 1, borderColor: 'black', backgroundColor: 'black' }} />
                                    </View>
                                    <View style={{ marginVertical: 10, gap: 10 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '500' }}>{orderItem.Counter_Name}</Text>
                                        <Text style={{ fontSize: 17 }}>
                                            Item: <Text style={{ fontSize: 18, fontWeight: '500' }}>{orderItem.Category}</Text> x 1
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Pressable style={{ borderWidth: 1, borderColor: '#3EC70B', backgroundColor: '#3EC70B', width: '30%', borderRadius: 8 }} onPress={submitOrder}>
                                            <Text style={{ color: 'white', textAlign: 'center', padding: 7 }}>Order</Text>
                                        </Pressable>
                                        <Pressable style={{ borderWidth: 1, borderColor: 'black', backgroundColor: 'black', width: '30%', borderRadius: 8 }} onPress={() => { setOrderConfirmationPopup(false) }}>
                                            <Text style={{ color: 'white', textAlign: 'center', padding: 7 }}>Back</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        <Modal

                            visible={orderConfirmed}
                            animationType='fade'
                            onRequestClose={() => {setOrderConfirmed(false); setModalVisible(false)}}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>

                                <Text style={{ fontSize: 25, fontWeight: '400', textAlign: 'center' }}>
                                    Order Submitted Successfully
                                </Text>
                                <View style={{ height: 300, width: 300, alignSelf: 'center' }}>
                                    <LottieView style={{ flex: 1 }} source={require('../assets/Animation - 1728289183998.json')} autoPlay loop />
                                </View>
                                <View>

                                    <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'center' }}>
                                        Check order details in<Text style={{ fontWeight: '600' }}> My Orders</Text> Screen
                                    </Text>
                                </View>
                            </View>
                        </Modal>
                    </View >


                </View>
            </Modal>
        </View>
    );
}
export default FoodCounters