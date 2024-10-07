import { View, Text, StatusBar, Image, FlatList, Pressable, TextInput, ScrollView, Animated, Modal } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
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


const ViewCounter = ({ CounterData }: ItemProps) => {
    const number = CounterData.CounterID
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
    var ordered: boolean=false
    const submitOrder = () => {
        ordered=true
        {ordered && 
            setOrderConfirmed(true)
            setTimeout(() => {
                setOrderConfirmed(false);
                setOrderConfirmationPopup(false)
            }, 2500);
        }
    }
    type RenderItemProps = {
        item: counterItemTypes;
    };
    const RenderItem = ({ item }: RenderItemProps) => {
        return (
            <View style={{ marginHorizontal: 15 }}>
                {
                    item.Counter_ID == CounterData.CounterID && item.Available_Status_from_Admin == true &&
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <View >
                            {item.type == 'Veg' ?
                                <MaterialCommunityIcons name="square-circle" size={20} color="green" /> :
                                <FontAwesome6 name="caret-square-up" size={20} color="red" />
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
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignSelf: 'center', marginTop: 5 }}>
                <Image
                    source={
                        CounterData.CounterID === 1
                            ? require('../assets/images/tea.jpg')
                            : CounterData.CounterID === 2
                                ? require('../assets/images/Juice.jpg')
                                : CounterData.CounterID === 3
                                    ? require('../assets/images/Lunch.jpg')
                                    : CounterData.CounterID === 4 ?
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
                {CounterData &&
                    <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                        {CounterData.CounterName == 'Tea Point' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Hot Beverages</Text> :
                            CounterData.CounterName == 'Juice Point' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Refreshing Juices</Text> :
                                CounterData.CounterName == 'Lunch/Dinner' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Meals</Text> :
                                    CounterData.CounterName == 'Snacks' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Hot Snacks</Text> :
                                        <Text>Counter Items</Text>
                        }
                        <View style={{ borderBottomWidth: 1, borderColor: 'black' }} />
                    </View>
                }
            </View>
            <View style={{ paddingBottom: 100 }} >
                <FlatList
                    data={CounterItems}
                    keyExtractor={(item, index: number) => index.toString()}
                    renderItem={RenderItem}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    style={{ marginTop: 20, }}
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
                        marginHorizontal: 15, gap: 15, backgroundColor: '#fff',
                        justifyContent: "center", alignSelf: "center",
                        width: "90%", padding: 15, borderRadius: 20,
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
                onRequestClose={() => setOrderConfirmed(false)}
            >
                <View style={{ height: 300, width: 300, alignSelf: 'center' }}>
                    <LottieView style={{ flex: 1 }} source={require('../assets/Animation - 1728289183998.json')} autoPlay loop />
                </View>
                <View>
                    <Text style={{fontSize:25,fontWeight:'400',textAlign:'center'}}>
                        Order Submitted Successfully
                    </Text>
                    <Text style={{fontSize:25,fontWeight:'400',textAlign:'center'}}>
                        Check the OTP in My Orders Screen
                    </Text>
                </View>
            </Modal>
        </View >
    )
}

export default ViewCounter